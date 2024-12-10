import dotenv from "dotenv";
dotenv.config();
import { get } from "axios";
import { rmSync, writeFileSync } from "fs";
import { createHash } from "crypto";
import { globSync } from "glob";

const themeCommentRegex = /\/\*[\s\S]*?\*\//g;

async function getTheme() {
  let themeUrl = process.env.THEME;
  if (themeUrl) {
    //https://forum.obsidian.md/t/1-0-theme-migration-guide/42537
    //Not all themes with no legacy mark have a theme.css file, so we need to check for it
    try {
      await get(themeUrl);
    } catch {
      if (themeUrl.indexOf("theme.css") > -1) {
        themeUrl = themeUrl.replace("theme.css", "obsidian.css");
      } else if (themeUrl.indexOf("obsidian.css") > -1) {
        themeUrl = themeUrl.replace("obsidian.css", "theme.css");
      }
    }

    const res = await get(themeUrl);
    try {
      const existing = globSync("src/site/styles/_theme.*.css");
      existing.forEach((file) => {
        rmSync(file);
      });
    } catch { }
    let skippedFirstComment = false;
    const data = res.data.replace(themeCommentRegex, (match) => {
      if (skippedFirstComment) {
        return "";
      } else {
        skippedFirstComment = true;
        return match;
      }
    });
    const hashSum = createHash("sha256");
    hashSum.update(data);
    const hex = hashSum.digest("hex");
    writeFileSync(`src/site/styles/_theme.${hex.substring(0, 8)}.css`, data);
  }
}

getTheme();

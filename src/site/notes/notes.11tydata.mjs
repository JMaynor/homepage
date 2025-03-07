import dotenv from "dotenv";
dotenv.config();
import { ALL_NOTE_SETTINGS } from "../../helpers/constants.mjs";

const allSettings = ALL_NOTE_SETTINGS;

export const eleventyComputed = {
  layout: (data) => {
    if (data.tags.indexOf("gardenEntry") != -1) {
      return "layouts/index.njk";
    }
    return "layouts/note.njk";
  },
  permalink: (data) => {
    if (data.tags.indexOf("gardenEntry") != -1) {
      return "/";
    }
    return data.permalink || undefined;
  },
  settings: (data) => {
    const noteSettings = {};
    allSettings.forEach((setting) => {
      let noteSetting = data[setting];
      let globalSetting = process.env[setting];

      let settingValue = noteSetting || (globalSetting === "true" && noteSetting !== false);
      noteSettings[setting] = settingValue;
    });
    return noteSettings;
  },
};

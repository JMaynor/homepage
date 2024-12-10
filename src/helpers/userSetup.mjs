function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
const _userMarkdownSetup = userMarkdownSetup;
export { _userMarkdownSetup as userMarkdownSetup };
const _userEleventySetup = userEleventySetup;
export { _userEleventySetup as userEleventySetup };

const path = require("path");
const nodeEnv = process.env.NODE_ENV;
const nav = require("./nav");
const sidebar = require("./sidebar");

console.log("nav===>", nav);
console.log("sidebar===>", sidebar);

console.log("process.env.NODE_ENV===>", nodeEnv); // development production
console.log("path", path.join(__dirname, "./public"));

module.exports = {
  title: "前端知识",
  description: "风之积也不厚，则其负大翼也无力",
  base: nodeEnv == "development" ? "" : "/vuepress-star/",
  ga: "G-0WGB32QW31",
  markdown: {
    lineNumbers: true,
  },
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  themeConfig: {
    repo: "https://github.com/all-smile/vuepress-star",
    sidebarDepth: 1,
    nav: nav,
    sidebar: sidebar,
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址",
    smoothScroll: true,
  },
  extendMarkdown: (md) => {
    md.set({ breaks: true });
    md.use(require("markdown-it-plantuml"));
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": path.join(__dirname, "./public"),
      },
    },
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ["@vuepress/medium-zoom", true],
    ["@vuepress/back-to-top", true],
  ],
};

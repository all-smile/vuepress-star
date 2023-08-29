const path = require("path");

console.log("path", path.join(__dirname, "./public"));

module.exports = {
  title: "前端知识",
  description: "风之积也不厚，则其负大翼也无力",
  ga: "G-0WGB32QW31",
  markdown: {
    lineNumbers: true,
  },
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  themeConfig: {
    repo: "https://github.com/all-smile/doc-vuepress",
    sidebarDepth: 1,
    nav: [
      {
        text: "基础",
        link: "/base/",
      },
      {
        text: "进阶",
        link: "/more/",
      },
      {
        text: "知识库",
        items: [
          {
            text: "🥝偏前端开发实用技能",
            link: "/fe-skills/",
          },
          {
            text: "🎈偏前端架构运维小火慢炖",
            link: "/fe-framework/",
          },
        ],
      },
    ],
    sidebar: {
      "/base/": [
        {
          title: "JavaScript",
          collapsable: true,
          children: [
            "JavaScript-原型.md",
            "JavaScript-继承.md",
            "JavaScript-闭包.md",
            { title: "test", path: "/base/JavaScript/test.md" },
          ],
        },
        {
          title: "CSS",
          collapsable: true,
          children: ["CSS-盒子模型.md", "CSS-选择器.md", "CSS-BFC.md"],
        },
        {
          title: "浏览器",
          collapsable: true,
          children: ["浏览器-事件模型.md", "浏览器-内存泄漏.md"],
        },
        {
          title: "性能优化",
          collapsable: true,
          children: ["性能优化-重绘和回流.md"],
        },
        {
          title: "工程化",
          collapsable: true,
          children: ["工程化-模块化机制.md"],
        },
      ],
      "/more/": [
        {
          title: "设计模式",
          collapsable: true,
          children: ["设计模式.md"],
        },
        {
          title: "浏览器网络相关",
          collapsable: false,
          children: ["HTTP发展.md", "HTTP协议.md"],
        },
      ],
      "/fe-skills/": [
        {
          title: "个人网站汇总导航",
          collapsable: false,
          children: ["个人网站汇总导航.md"],
        },
      ],
      "/fe-framework/": [
        {
          title: "🍧架构能力",
          collapsable: true,
          children: [
            { title: "MVP原则", path: "/fe-framework/架构能力/MVP原则.md" },
            {
              title: "移动端css适配布局",
              path: "/fe-framework/架构能力/移动端css适配布局.md",
            },
            {
              title: "设计模式",
              path: "/fe-framework/架构能力/设计模式.md",
            },
            {
              title: "前端架构",
              path: "/fe-framework/架构能力/前端架构.md",
            },
            {
              title: "框架中的规范",
              path: "/fe-framework/架构能力/框架中的规范.md",
            },
            {
              title: "网络协议",
              path: "/fe-framework/架构能力/网络协议.md",
            },
            {
              title: "算法&框架算法",
              path: "/fe-framework/架构能力/算法&框架算法.md",
            },
            {
              title: "✨架构工作✔",
              path: "/fe-framework/架构能力/✨架构工作✔.md",
            },
          ],
        },
        {
          title: "🍓可配置化架构",
          collapsable: true,
          children: [
            {
              title: "单据架构+业务字典",
              path: "/fe-framework/可配置化架构/单据架构+业务字典.md",
            },
            {
              title: "数据字典",
              path: "/fe-framework/可配置化架构/数据字典.md",
            },
            {
              title: "表单字段处理",
              path: "/fe-framework/可配置化架构/表单字段处理.md",
            },
          ],
        },
        {
          title: "🍒团队建设",
          collapsable: true,
          children: [
            {
              title: "如何打造一个超能团队",
              path: "/fe-framework/团队建设/如何打造一个超能团队.md",
            },
            {
              title: "前端的详细设计文档模版",
              path: "/fe-framework/团队建设/前端的详细设计文档模版.md",
            },
          ],
        },
        {
          title: "🥝Bridge桥技术应用研究",
          collapsable: true,
          children: [
            {
              title: "uni-app 小程序开发",
              path: "/fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.md",
            },
          ],
        },
        {
          title: "🎊网络&网关&协议",
          collapsable: true,
          children: [
            {
              title: "SSL",
              path: "/fe-framework/网络&网关&协议/SSL.md",
            },
            {
              title: "为什么微服务一定要有API网关",
              path:
                "/fe-framework/网络&网关&协议/为什么微服务一定要有API网关.md",
            },
          ],
        },
      ],
    },
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

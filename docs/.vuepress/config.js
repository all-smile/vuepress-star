const path = require("path");
const nodeEnv = process.env.NODE_ENV;

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
    nav: [
      {
        text: "雪泥鸿爪",
        items: [
          {
            text: "🥝书籍/电影",
            link: "/see/",
          },
          {
            text: "🥝吉光片羽",
            link: "/bling/",
          },
        ],
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
      {
        text: "个人空间",
        items: [
          {
            text: "🎈掘金（优秀创作者）",
            link: "https://juejin.cn/user/852876755212814/posts",
          },
          {
            text: "🎃微信公众号",
            link: "https://mp.weixin.qq.com/s/SUT82RsrhUL46VP98lk-6A",
          },
          {
            text: "🎨互联主页",
            link: "https://home.i-xiao.space/",
          },
          {
            text: "✨语雀",
            link: "https://www.yuque.com/xiaojt",
          },
          {
            text: "🎉Hexo个人博客",
            link: "https://blog.i-xiao.space/",
          },
          {
            text: "🎊博客园",
            link: "https://www.cnblogs.com/all-smile",
          },
        ],
      },
    ],
    sidebar: {
      "/fe-skills/": [
        {
          title: "个人网站汇总导航",
          collapsable: true,
          children: ["个人网站汇总导航.md"],
        },
        {
          title: "🎃代码规范控制",
          collapsable: true,
          children: [
            {
              title: "BEM规范",
              path: "/fe-skills/代码规范控制/BEM规范.md",
            },
            {
              title: "vscode开发中格式化问题解决",
              path: "/fe-skills/代码规范控制/vscode开发中格式化问题解决.md",
            },
            {
              title: "gitattributes文件作用详细讲解",
              path: "/fe-skills/代码规范控制/gitattributes文件作用详细讲解.md",
            },
            {
              title: "eslint介绍",
              path: "/fe-skills/代码规范控制/eslint介绍.md",
            },
            {
              title: "vscode导入导出配置（gist）",
              path: "/fe-skills/代码规范控制/vscode导入导出配置（gist）.md",
            },
            {
              title: "perttier+eslint+husky的使用",
              path: "/fe-skills/代码规范控制/perttier+eslint+husky的使用.md",
            },
            {
              title: "commitlint配置",
              path: "/fe-skills/代码规范控制/commitlint配置.md",
            },
            {
              title: "团队代码规范",
              path: "/fe-skills/代码规范控制/团队代码规范.md",
            },
          ],
        },
        {
          title: "🍿基础框架优化项",
          collapsable: true,
          children: [
            {
              title: "捕获404页面，并重定向页面",
              path: "/fe-skills/基础框架优化项/捕获404页面，并重定向页面.md",
            },
            {
              title: "滚动条样式修改",
              path: "/fe-skills/基础框架优化项/滚动条样式修改.md",
            },
            {
              title: "marginTop塌陷最好的处理方式",
              path: "/fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.md",
            },
            {
              title: "打开、关闭当前网页",
              path: "/fe-skills/基础框架优化项/打开、关闭当前网页.md",
            },
            {
              title: "封装sessionStorage",
              path: "/fe-skills/基础框架优化项/封装sessionStorage.md",
            },
            {
              title: "页面文字禁止被选中复制",
              path: "/fe-skills/基础框架优化项/页面文字禁止被选中复制.md",
            },
            {
              title: "socket消息接收",
              path: "/fe-skills/基础框架优化项/socket消息接收.md",
            },
            {
              title: "浏览器识别，以及版本号",
              path: "/fe-skills/基础框架优化项/浏览器识别，以及版本号.md",
            },
            {
              title: "JS复制文本",
              path: "/fe-skills/基础框架优化项/JS复制文本.md",
            },
            {
              title: "less全局变量使用方式",
              path: "/fe-skills/基础框架优化项/less全局变量使用方式.md",
            },
          ],
        },
        {
          title: "🎯Vue",
          collapsable: true,
          children: [
            {
              title: "env[mode]文件中如何添加注释",
              path: "/fe-skills/Vue/env[mode]文件中如何添加注释.md",
            },
            {
              title: "vue实用技巧",
              path: "/fe-skills/Vue/vue实用技巧.md",
            },
            {
              title: "vue组件通信的方式",
              path: "/fe-skills/Vue/vue组件通信的方式.md",
            },
            {
              title: "🎀Vue自定义指令",
              path: "/fe-skills/Vue/🎀Vue自定义指令.md",
            },
            {
              title: "控制点菜单管理",
              path: "/fe-skills/Vue/控制点菜单管理.md",
            },
            {
              title: "$emit,$on实现原理剖析",
              path: "/fe-skills/Vue/$emit,$on实现原理剖析",
            },
            {
              title: "keep-alive实现原理探究",
              path: "/fe-skills/Vue/keep-alive实现原理探究.md",
            },
            {
              title: "diff算法",
              path: "/fe-skills/Vue/diff算法.md",
            },
            {
              title: "vue扩展插件，自定义原型方法挂载",
              path: "/fe-skills/Vue/vue扩展插件，自定义原型方法挂载.md",
            },
            {
              title: "vue-router之hash与history",
              path: "/fe-skills/Vue/vue-router之hash与history.md",
            },
            {
              title: "vuecli4创建项目",
              path: "/fe-skills/Vue/vuecli4创建项目.md",
            },
          ],
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
      "/see/": [
        {
          title: "电影",
          collapsable: true,
          children: [
            {
              title: "肖申克的救赎",
              path: "/see/电影/肖申克的救赎.md",
            },
            {
              title: "当幸福来敲门",
              path: "/see/电影/当幸福来敲门.md",
            },
          ],
        },
        {
          title: "书籍",
          collapsable: true,
          children: [
            {
              title: "阿Q正传",
              path: "/see/书籍/阿Q正传.md",
            },
          ],
        },
        {
          title: "美食",
          collapsable: true,
          children: [
            {
              title: "腊排骨火锅",
              path: "/see/美食/腊排骨火锅.md",
            },
          ],
        },
      ],
      "/bling/": [
        {
          title: "婚姻",
          collapsable: true,
          children: [
            {
              title: "订婚",
              path: "/bling/婚姻/订婚.md",
            },
            {
              title: "拍婚纱照",
              path: "/bling/婚姻/拍婚纱照.md",
            },
            {
              title: "要好",
              path: "/bling/婚姻/要好.md",
            },
            // {
            //   title: "备婚",
            //   path: "/bling/婚姻/备婚.md",
            // },
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

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0001.png",
    "revision": "90f26c34e11c15823250aa9880dfd9ab"
  },
  {
    "url": "404.html",
    "revision": "352369f6506a5e1969bdc94803ec70c8"
  },
  {
    "url": "assets/css/0.styles.c51e8d4d.css",
    "revision": "03994f86418fe64558ca4df0a5801bcf"
  },
  {
    "url": "assets/img/0001.90f26c34.png",
    "revision": "90f26c34e11c15823250aa9880dfd9ab"
  },
  {
    "url": "assets/img/0001.f4d06433.png",
    "revision": "f4d06433fe969e461a56bf77c7a6ca1e"
  },
  {
    "url": "assets/img/0002.390a8682.png",
    "revision": "390a8682e33193f94e96b376f9582464"
  },
  {
    "url": "assets/img/0002.4abc7ad2.png",
    "revision": "4abc7ad27f823f299df40b80c393bcb9"
  },
  {
    "url": "assets/img/0003.8828036f.png",
    "revision": "8828036fd4223932a2a99dabff112862"
  },
  {
    "url": "assets/img/0003.cfd95c89.png",
    "revision": "cfd95c89ab051ea2b21b7f999df48661"
  },
  {
    "url": "assets/img/0004.7605a2e5.png",
    "revision": "7605a2e51b961237d336092f729347ba"
  },
  {
    "url": "assets/img/0004.d76c8d18.png",
    "revision": "d76c8d18ec2a104e935a01cd54b4b1db"
  },
  {
    "url": "assets/img/0005.97cafcb6.png",
    "revision": "97cafcb60de800f98632d21a2a1b7860"
  },
  {
    "url": "assets/img/0005.b108c4b1.png",
    "revision": "b108c4b10b8391c70359063678d671bf"
  },
  {
    "url": "assets/img/0007.8f8ec0e2.png",
    "revision": "8f8ec0e2ace96f7c7e1eb01a24be04b9"
  },
  {
    "url": "assets/img/0008.41d73d17.png",
    "revision": "41d73d1719a170cb4a780f48fea8bdbe"
  },
  {
    "url": "assets/img/0010.6d10d60c.png",
    "revision": "6d10d60c17b71ecd64f9d7e3ea8d7f6d"
  },
  {
    "url": "assets/img/0011.6f420b48.png",
    "revision": "6f420b4831178da93e50aa1be5b07145"
  },
  {
    "url": "assets/img/0012.b56361f1.png",
    "revision": "b56361f14dd79922937525e6eb6e55b9"
  },
  {
    "url": "assets/img/0013.0b7a0e09.png",
    "revision": "0b7a0e095d1d2e7de70eaf7e090ce528"
  },
  {
    "url": "assets/img/0014.8d35a836.png",
    "revision": "8d35a836f5b025ff6a034b30da602c54"
  },
  {
    "url": "assets/img/0021.56c36f32.png",
    "revision": "56c36f327dc5f9c37f0f36d43e920fd7"
  },
  {
    "url": "assets/img/0022.117543ca.png",
    "revision": "117543ca1c6e292ed07c3be6e57a64cc"
  },
  {
    "url": "assets/img/0023.588c349f.png",
    "revision": "588c349f64d744610f1af21767ecec04"
  },
  {
    "url": "assets/img/0024.a299254a.png",
    "revision": "a299254aaa2bea66fe9e49c38e47d706"
  },
  {
    "url": "assets/img/0025.3314ef9e.png",
    "revision": "3314ef9e2e569c98b5d902229a78ed64"
  },
  {
    "url": "assets/img/0026.c12a3a18.png",
    "revision": "c12a3a1864bd63d14afd4d7a649de59f"
  },
  {
    "url": "assets/img/0027.15131dd7.png",
    "revision": "15131dd7ffca3b69c046543375914f4c"
  },
  {
    "url": "assets/img/0029.7954573a.png",
    "revision": "7954573ab96545de056867abff755c4a"
  },
  {
    "url": "assets/img/0030.524976ba.png",
    "revision": "524976ba78065bdaa5627039c4d761a7"
  },
  {
    "url": "assets/img/0031.7515ff2d.png",
    "revision": "7515ff2d4ef0f53bda15b6c4b0683770"
  },
  {
    "url": "assets/img/0032.ec5ab60e.png",
    "revision": "ec5ab60e73f7a0d67d3db4e06355f891"
  },
  {
    "url": "assets/img/nav.c76f6e76.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0677eaa7.js",
    "revision": "4c3b875ab072455fb6babf87de790dff"
  },
  {
    "url": "assets/js/11.f2a0712d.js",
    "revision": "b56464e4c48a35b5aad142eee68c49aa"
  },
  {
    "url": "assets/js/12.a30bfe3f.js",
    "revision": "ebdc65464c0c3f3fe30fc61c41e41f22"
  },
  {
    "url": "assets/js/13.8f89614e.js",
    "revision": "58fa0ece72e9df903038989271e31556"
  },
  {
    "url": "assets/js/14.b1f70602.js",
    "revision": "ddd18019e9e476ea9517ea9ddafe61fc"
  },
  {
    "url": "assets/js/15.8217ad83.js",
    "revision": "756b9a7b97a1cac606e7ad20711d78db"
  },
  {
    "url": "assets/js/16.8683ec2c.js",
    "revision": "117592d661de1badc95d5de85cfbe1f9"
  },
  {
    "url": "assets/js/17.44279241.js",
    "revision": "22bcff21f7584cee564d981a8f1ad94e"
  },
  {
    "url": "assets/js/18.effe79bd.js",
    "revision": "e9acfc6c6ffd812f6cd8d0e3c76d49fe"
  },
  {
    "url": "assets/js/19.9829260f.js",
    "revision": "b597c7842d5ebdab1e20f5d46e3669fc"
  },
  {
    "url": "assets/js/2.fea80727.js",
    "revision": "c8364c734c95135ff916e696d747cd76"
  },
  {
    "url": "assets/js/20.96b60e91.js",
    "revision": "b9fb04c58aa09221fe64de6198955087"
  },
  {
    "url": "assets/js/21.e54115a3.js",
    "revision": "d4d0ce30af6c1b06158e6bf71994b25b"
  },
  {
    "url": "assets/js/22.c662f2c7.js",
    "revision": "890cd19f88f93339087bf1d9e8245000"
  },
  {
    "url": "assets/js/23.a7612566.js",
    "revision": "3200a5163218ab0b694652fc2c9a98e1"
  },
  {
    "url": "assets/js/24.736be4eb.js",
    "revision": "c982dddcc39a1948059b8bd3e1d03c5e"
  },
  {
    "url": "assets/js/25.b3d69e97.js",
    "revision": "d1010f1a1dac74cd53070c4261f950d4"
  },
  {
    "url": "assets/js/26.fce4f12f.js",
    "revision": "e15bfd5a45ab678df259d10045feaa80"
  },
  {
    "url": "assets/js/27.0acbe604.js",
    "revision": "141d1063861a44ce8ac5dfe165a0f54e"
  },
  {
    "url": "assets/js/28.2851968a.js",
    "revision": "77407cd44e9c08384c378dc4c5745282"
  },
  {
    "url": "assets/js/29.ba7c8de2.js",
    "revision": "b0a59f702e4dfb6ffecdc05104ba1d65"
  },
  {
    "url": "assets/js/3.cba199c5.js",
    "revision": "f2e51adc5d4222d7b011c0b8b78f8e6f"
  },
  {
    "url": "assets/js/30.197531bb.js",
    "revision": "418013d47ca2be8b2583157604507ef9"
  },
  {
    "url": "assets/js/31.4f1d8a76.js",
    "revision": "2f0ac11843d571c3723ba473078d077e"
  },
  {
    "url": "assets/js/32.4775f3b6.js",
    "revision": "039d383681e964ca7edc784972b380b1"
  },
  {
    "url": "assets/js/33.73a1bdea.js",
    "revision": "7f28830712e3c372b9d366c028cdb939"
  },
  {
    "url": "assets/js/34.e629123b.js",
    "revision": "6d67d15be082a4caed00ef399de1120d"
  },
  {
    "url": "assets/js/35.b0676310.js",
    "revision": "99595115cacb1edd58e8c751988b87b8"
  },
  {
    "url": "assets/js/36.20988aaa.js",
    "revision": "eeb29ea0f80ea30ead382739e2b3e3d9"
  },
  {
    "url": "assets/js/37.5c36cabe.js",
    "revision": "7a3a52ee50dd1d7e163142c16d9bcd03"
  },
  {
    "url": "assets/js/38.6d4f08eb.js",
    "revision": "4572c1b5dd7bc3adf5ffbe4645451943"
  },
  {
    "url": "assets/js/39.1bd11ef6.js",
    "revision": "8512a9562002ea5174354dd7ff63a821"
  },
  {
    "url": "assets/js/4.2fa42de4.js",
    "revision": "3b19df8f23a5e4b22dbb6c53f4b4be8d"
  },
  {
    "url": "assets/js/40.59076805.js",
    "revision": "f4f03418116767a37c5675a44117d2a5"
  },
  {
    "url": "assets/js/41.b8da5d20.js",
    "revision": "4d4ef22dc281e71d7203498dd0dafc80"
  },
  {
    "url": "assets/js/42.0a45e568.js",
    "revision": "6a4a29452cb075e76ef2a2d3a9175f4a"
  },
  {
    "url": "assets/js/43.d23bd400.js",
    "revision": "73dac5a26aa5c65c33b5078c980dc7c7"
  },
  {
    "url": "assets/js/44.0b98a0ed.js",
    "revision": "312c3e431b1645d5ba8eda7c19ffc61b"
  },
  {
    "url": "assets/js/45.4b0ef52b.js",
    "revision": "7d1822d4c5922cfd655368b117b21e88"
  },
  {
    "url": "assets/js/46.f585835b.js",
    "revision": "f47820dfae75998b22002dbccf0e6a71"
  },
  {
    "url": "assets/js/47.c1e675a6.js",
    "revision": "5da212f83bd63cdfbcad91ed9e2d419b"
  },
  {
    "url": "assets/js/48.2cdb2484.js",
    "revision": "eba3827199bf47c97b20fdc018b8cf40"
  },
  {
    "url": "assets/js/49.bca9e808.js",
    "revision": "3ce981783011f0a59c5e65a7f644be72"
  },
  {
    "url": "assets/js/5.0c7bd04f.js",
    "revision": "ddcd209536bfd5f4249c8659d8280bbf"
  },
  {
    "url": "assets/js/50.befcf1f5.js",
    "revision": "949ab53100440fce0627c96905b46354"
  },
  {
    "url": "assets/js/51.b8e19760.js",
    "revision": "9ee8ef4923338448be759d233b2dc727"
  },
  {
    "url": "assets/js/52.943750f1.js",
    "revision": "1690bf57fea2bbca7ac1bef008a63d19"
  },
  {
    "url": "assets/js/53.e4d85d0d.js",
    "revision": "af0666caab429a8f7dbd508ecf2a86b6"
  },
  {
    "url": "assets/js/54.4e38ea52.js",
    "revision": "bf208983a6836c1fe5a4b1b378bd0012"
  },
  {
    "url": "assets/js/55.0c3f52ee.js",
    "revision": "6e2750db29bb1e85fbe066c636aca8b1"
  },
  {
    "url": "assets/js/56.587def02.js",
    "revision": "b98cbfcc13a5bac640b7d282aa969995"
  },
  {
    "url": "assets/js/57.4a6a5971.js",
    "revision": "2a835868c98d389a307785b6e4afb185"
  },
  {
    "url": "assets/js/58.88a1b201.js",
    "revision": "0505e6e4da4770810bcaab540fb4a324"
  },
  {
    "url": "assets/js/6.a1630b07.js",
    "revision": "feb3c9d3ffda95e193bc004a76575a5a"
  },
  {
    "url": "assets/js/7.f41a1aee.js",
    "revision": "1e3ece7c3cac8bc79f87af18f148a4f8"
  },
  {
    "url": "assets/js/8.3d22e042.js",
    "revision": "3b8fbe8200d12b1d0dd3354cfff1074b"
  },
  {
    "url": "assets/js/9.c1bd2f79.js",
    "revision": "01f3cec7154a1e62ef9e8b2f2a79fb18"
  },
  {
    "url": "assets/js/app.e3d69521.js",
    "revision": "65cfbeaba95581161429e49497d240cc"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "72a33b30c5fd84b81151592af677d099"
  },
  {
    "url": "fe-framework/frame/0001.png",
    "revision": "90f26c34e11c15823250aa9880dfd9ab"
  },
  {
    "url": "fe-framework/frame/0002.png",
    "revision": "4abc7ad27f823f299df40b80c393bcb9"
  },
  {
    "url": "fe-framework/frame/0003.png",
    "revision": "8828036fd4223932a2a99dabff112862"
  },
  {
    "url": "fe-framework/frame/0004.png",
    "revision": "7605a2e51b961237d336092f729347ba"
  },
  {
    "url": "fe-framework/frame/0005.png",
    "revision": "b108c4b10b8391c70359063678d671bf"
  },
  {
    "url": "fe-framework/index.html",
    "revision": "2e454bd09915962bd67ff4ae8003d30a"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "6f06ac2dec74cb7946b787adc76d0168"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "f601b9feef718fb23bfd9a6469a90b4b"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "ddee366adb35c9871b76bff02fa81fe4"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "85132f95596407678517d3d2688af7fa"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "6e1e2cf7bf2610d8c28a30da464a56c3"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "46e365936e5e53463ef0685244c6b2db"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "fb77b4dec8a9cdc1bf9ed67784dabfd5"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "aee306a78a77268cf9414a636bc6ad29"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "3cb525f5682f91bca24f0c1204ec35a7"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "7e1885942585a1db6bffe9e7cd52f800"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "9e1bca30677b6d5a67494dd8a0c4fb07"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "bb8064d4529e154fe70f19f7a65c89b1"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "e73cd89860ffd63305277510a1f6b9ab"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "3eacc55a59cde127da4be40d24acac95"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "c7929cf4d3073fdd6b8c8bf5073225bc"
  },
  {
    "url": "fe-skills/0001.png",
    "revision": "f4d06433fe969e461a56bf77c7a6ca1e"
  },
  {
    "url": "fe-skills/0002.png",
    "revision": "390a8682e33193f94e96b376f9582464"
  },
  {
    "url": "fe-skills/0003.png",
    "revision": "cfd95c89ab051ea2b21b7f999df48661"
  },
  {
    "url": "fe-skills/0004.png",
    "revision": "d76c8d18ec2a104e935a01cd54b4b1db"
  },
  {
    "url": "fe-skills/0005.png",
    "revision": "97cafcb60de800f98632d21a2a1b7860"
  },
  {
    "url": "fe-skills/0006.png",
    "revision": "5f19486ed6a6c8af42c0f786c6c69b01"
  },
  {
    "url": "fe-skills/0007.png",
    "revision": "8f8ec0e2ace96f7c7e1eb01a24be04b9"
  },
  {
    "url": "fe-skills/0008.png",
    "revision": "41d73d1719a170cb4a780f48fea8bdbe"
  },
  {
    "url": "fe-skills/0009.png",
    "revision": "7e0e9bd63288845abba66fbdc9e309a1"
  },
  {
    "url": "fe-skills/0010.png",
    "revision": "6d10d60c17b71ecd64f9d7e3ea8d7f6d"
  },
  {
    "url": "fe-skills/0011.png",
    "revision": "6f420b4831178da93e50aa1be5b07145"
  },
  {
    "url": "fe-skills/0012.png",
    "revision": "b56361f14dd79922937525e6eb6e55b9"
  },
  {
    "url": "fe-skills/0013.png",
    "revision": "0b7a0e095d1d2e7de70eaf7e090ce528"
  },
  {
    "url": "fe-skills/0014.png",
    "revision": "8d35a836f5b025ff6a034b30da602c54"
  },
  {
    "url": "fe-skills/0015.png",
    "revision": "ecadf773d49d65c22716b7c511f4c13d"
  },
  {
    "url": "fe-skills/0016.png",
    "revision": "4287567599933a89cc3d0165445aa44c"
  },
  {
    "url": "fe-skills/0017.png",
    "revision": "70d353ef07fff36dbbbebf4188b9a0fb"
  },
  {
    "url": "fe-skills/0018.png",
    "revision": "faf98f7185fada7da5d2bbeb7356b70e"
  },
  {
    "url": "fe-skills/0019.png",
    "revision": "3e16b9cbb9388d006420f284480df3af"
  },
  {
    "url": "fe-skills/0020.png",
    "revision": "a00f65e19b2de50b71b8c51f36ad832a"
  },
  {
    "url": "fe-skills/0021.png",
    "revision": "56c36f327dc5f9c37f0f36d43e920fd7"
  },
  {
    "url": "fe-skills/0022.png",
    "revision": "117543ca1c6e292ed07c3be6e57a64cc"
  },
  {
    "url": "fe-skills/0023.png",
    "revision": "588c349f64d744610f1af21767ecec04"
  },
  {
    "url": "fe-skills/0024.png",
    "revision": "a299254aaa2bea66fe9e49c38e47d706"
  },
  {
    "url": "fe-skills/0025.png",
    "revision": "3314ef9e2e569c98b5d902229a78ed64"
  },
  {
    "url": "fe-skills/0026.png",
    "revision": "c12a3a1864bd63d14afd4d7a649de59f"
  },
  {
    "url": "fe-skills/0027.png",
    "revision": "15131dd7ffca3b69c046543375914f4c"
  },
  {
    "url": "fe-skills/0028.png",
    "revision": "1c105287d18b81704e7ce7163f809338"
  },
  {
    "url": "fe-skills/0029.png",
    "revision": "7954573ab96545de056867abff755c4a"
  },
  {
    "url": "fe-skills/0030.png",
    "revision": "524976ba78065bdaa5627039c4d761a7"
  },
  {
    "url": "fe-skills/0031.png",
    "revision": "7515ff2d4ef0f53bda15b6c4b0683770"
  },
  {
    "url": "fe-skills/0032.png",
    "revision": "ec5ab60e73f7a0d67d3db4e06355f891"
  },
  {
    "url": "fe-skills/index.html",
    "revision": "b4e04ee52437b31a1dca9910bb4aa402"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "e3a729d5bea05f241afb2f9be15912e5"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "22f13e5114d7d3e24c5c8c5b464b8dbe"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "8189f7175a3902a593e56b7817cb863f"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "fb5b558a8050a2f5bf01a1924990c080"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "dd2b6a0e235dc6a9ced8ef8de42785d0"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "21cb8d64b62358b1c1d761b3a0f8e562"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "3afc3c0fc302355f56a83631bda259e0"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "11e2a52b241f72c0fbe8107e3d15154d"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "932a111691a538fe8ba138aee51e94f8"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "dbb4767ba65ed813bf4ebc8dc2643010"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "15f435110ed862cac3cfe710964f40a4"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "9f4717e5f36e273bab9540d10359ce01"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "f081ffaa4176870e1264ad5c358b00fc"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "e084b84cf537483d15928b6d9fdd1d24"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "ed3c75b5deba73a9efc9c4eb2984fa57"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "e5a050d583a1c5dcca9944873df4d207"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "41db82a7fca42b40084bc2ea8ade1dfd"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "9eeb42ec06e69b7f09c4f4e00bd0f997"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "aa6e97f42fb3268ee4aa062d8fb8d9e0"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "2ff5d309aaecedc33a02d160ee605dea"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "609bfb68f77e85c8b8d09895fc5348ff"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "ea40ae3a9f81d78a136f5fa51a24484c"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "f14aef44031048fbf33cf8daef939f94"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "20193f54c5effc69958a69a9e41ffe32"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "d60cd349e345307303623aa47a4737a9"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "c34fa7d7363b7142240aaa410754d211"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "0953acced681190840ad7d28bccbd6f6"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "578fd048cfd30e29c78e560a16c64aad"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "67959eb36a4caba509e4fc0e0c8ffe16"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "52b76468e9961f1ca9bcc3ab8e20570f"
  },
  {
    "url": "index.html",
    "revision": "07543112438620cfa9596b0a53e5f26c"
  },
  {
    "url": "logo.jpg",
    "revision": "bd4366d3ff12475f7b11cb15da5e8e3b"
  },
  {
    "url": "qrcode_wechat.jpg",
    "revision": "bd4366d3ff12475f7b11cb15da5e8e3b"
  },
  {
    "url": "static/test.html",
    "revision": "a5aab7898998ba76c210155d9945a1b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

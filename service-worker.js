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
    "revision": "9129b6c7eef4a2d17214ab15b0d705c1"
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
    "url": "assets/js/10.9ffe99bf.js",
    "revision": "67e50037a2f1e4984bac921469939d9e"
  },
  {
    "url": "assets/js/11.6bf8e174.js",
    "revision": "eb55512d56d19fc59c6d26a1a24160e7"
  },
  {
    "url": "assets/js/12.98ec6adb.js",
    "revision": "2ac33e08d4b758d5c8c7bf3567a8fd94"
  },
  {
    "url": "assets/js/13.36d47495.js",
    "revision": "7df03192a6e1617d4b6f893e83efa1d0"
  },
  {
    "url": "assets/js/14.a6682600.js",
    "revision": "0791d78ac4c4df2a3c234e524f9da4fd"
  },
  {
    "url": "assets/js/15.1fed5859.js",
    "revision": "7180a0a987b56ded3af17892ca9ad837"
  },
  {
    "url": "assets/js/16.21b2dd3a.js",
    "revision": "bc5c4edeb5440829c0badb83e94b4c1c"
  },
  {
    "url": "assets/js/17.f223116a.js",
    "revision": "a65177e57aa96049a8a7c19f9be9cd32"
  },
  {
    "url": "assets/js/18.081d43e9.js",
    "revision": "407d28cededf5bb259d0f0a14873e9e2"
  },
  {
    "url": "assets/js/19.d714a9c1.js",
    "revision": "1ddb93a9060a25276d4a2a952b473488"
  },
  {
    "url": "assets/js/2.92e495bb.js",
    "revision": "a65bb32193960fe26142d83e13caf785"
  },
  {
    "url": "assets/js/20.53cb275b.js",
    "revision": "118dfc2f227782bd79688bfdf97a515a"
  },
  {
    "url": "assets/js/21.03f53dda.js",
    "revision": "58190e8aec96c89c1316226507b05f75"
  },
  {
    "url": "assets/js/22.0be68278.js",
    "revision": "96137415a686751416dbc0aea99fe456"
  },
  {
    "url": "assets/js/23.b92e53a5.js",
    "revision": "568451920f3be385e9166c7fa9b8d560"
  },
  {
    "url": "assets/js/24.87e08259.js",
    "revision": "a79915b85ad48a59d427cce858061e97"
  },
  {
    "url": "assets/js/25.d8967ec6.js",
    "revision": "65a07790dbb176aeac84ff0925a18c33"
  },
  {
    "url": "assets/js/26.e5539d4f.js",
    "revision": "892c011040d7544cd7d72c2863551c2c"
  },
  {
    "url": "assets/js/27.4786339f.js",
    "revision": "39c49678a06b620324164047b03e4e7c"
  },
  {
    "url": "assets/js/28.0ecb9ec6.js",
    "revision": "89d132df06a2548ec511bf36665daeef"
  },
  {
    "url": "assets/js/29.9f6a4c14.js",
    "revision": "191301feaced7225aced8fe1f7f67797"
  },
  {
    "url": "assets/js/3.6618f2ba.js",
    "revision": "9dc5c25622c0ee27b6a35bfa5a273ef2"
  },
  {
    "url": "assets/js/30.b2746630.js",
    "revision": "dd9bcb441c2ee48435fbc2cb702d6a40"
  },
  {
    "url": "assets/js/31.a585093e.js",
    "revision": "94ef21aca3ad7a92056fc044c03903a9"
  },
  {
    "url": "assets/js/32.456a14cd.js",
    "revision": "e4ae9d78e5dcdb5a7e42990d4a1f6655"
  },
  {
    "url": "assets/js/33.3fa482e1.js",
    "revision": "67db3880e7b0a6b16ec70313fa5e165e"
  },
  {
    "url": "assets/js/34.46fa732e.js",
    "revision": "430cded3a4c9be82c0076db612b1fda8"
  },
  {
    "url": "assets/js/35.8e0d0309.js",
    "revision": "67995704952af9b5bb859ddef7a4c383"
  },
  {
    "url": "assets/js/36.41898e8c.js",
    "revision": "ea7a95543143f37fe8ab260a9285dd9f"
  },
  {
    "url": "assets/js/37.a8cc2d59.js",
    "revision": "7e97a3e0c0cc6b76f02f5630bf9423dd"
  },
  {
    "url": "assets/js/38.838c6717.js",
    "revision": "0b5e58132a0627870cd859b7cecde4d3"
  },
  {
    "url": "assets/js/39.68caebe5.js",
    "revision": "b3a8c15c5b659c40377d299176efe02b"
  },
  {
    "url": "assets/js/4.24737158.js",
    "revision": "1f76b5fc32f52cabd16e960c008ee0a0"
  },
  {
    "url": "assets/js/40.8aacaaff.js",
    "revision": "8de417077a592919cf6a1caded538a29"
  },
  {
    "url": "assets/js/41.598dc435.js",
    "revision": "fb3ebd58a763a81f97a5e41d0b675d10"
  },
  {
    "url": "assets/js/42.6c6a73a8.js",
    "revision": "ca9f2d16070ebca61157f70a52ee577b"
  },
  {
    "url": "assets/js/43.1b3a2355.js",
    "revision": "147e0adf5ed6807a532059c9c9bf4608"
  },
  {
    "url": "assets/js/44.a56db069.js",
    "revision": "d9830ebccd18e1eafe57fffd0f193f11"
  },
  {
    "url": "assets/js/45.4b0ef52b.js",
    "revision": "7d1822d4c5922cfd655368b117b21e88"
  },
  {
    "url": "assets/js/46.99cc7c23.js",
    "revision": "ff42f20833712adfcbe6f0bd994e6ed0"
  },
  {
    "url": "assets/js/47.00657685.js",
    "revision": "d3c90aac0bc3a4177e35d6fcf12fc3ad"
  },
  {
    "url": "assets/js/48.8d95ad94.js",
    "revision": "f3cf3524a24abacefdd66a6718c656bb"
  },
  {
    "url": "assets/js/49.bca9e808.js",
    "revision": "3ce981783011f0a59c5e65a7f644be72"
  },
  {
    "url": "assets/js/5.0af014fd.js",
    "revision": "6794c566d852ed50171eb3ebdf4afcd4"
  },
  {
    "url": "assets/js/50.e2292df6.js",
    "revision": "cda542518b8b958733bbeca368d101e2"
  },
  {
    "url": "assets/js/51.452626ca.js",
    "revision": "e4557e311f87a60f54b7fc65dbd6d405"
  },
  {
    "url": "assets/js/52.b4bdd337.js",
    "revision": "a52bd21f5cbf373dd63bb9aa6107be68"
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
    "url": "assets/js/55.7a0c5e16.js",
    "revision": "fabfd2fbda82f0eb6286e7384cc4e47c"
  },
  {
    "url": "assets/js/56.0f724c0a.js",
    "revision": "bc22a7a35b7424b2d80d0ba773e70e0f"
  },
  {
    "url": "assets/js/57.25356111.js",
    "revision": "273d23979ae001d7659b2a9523aaf05e"
  },
  {
    "url": "assets/js/58.b3b6fb1a.js",
    "revision": "908a6af17af460ee0cd55edbe0168463"
  },
  {
    "url": "assets/js/6.2f88608f.js",
    "revision": "5daafa9322c1bb1989748d8035d0e6c8"
  },
  {
    "url": "assets/js/7.fc4a5172.js",
    "revision": "45f25b192f0164c9d8dfedafb0694f54"
  },
  {
    "url": "assets/js/8.f1d11870.js",
    "revision": "8b0ded38cca03988bfa0ceedcbea7df6"
  },
  {
    "url": "assets/js/9.22952a53.js",
    "revision": "56cb3095f9944c715e7fdb81a4a70bf8"
  },
  {
    "url": "assets/js/app.10889e8d.js",
    "revision": "cbc91bd799cae2ef9c61d6b4626c33b4"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "4387d7b8a9231410464181be0a7e63be"
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
    "revision": "79706073569874d50148ab48a9dbfe4f"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "209e5b07197080ea2bb8dbdc82b30b6f"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "3940461b10984a1b065c72232cd2ac8f"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "8ce17f282c35c0b5c3f093973d1b3f4e"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "3e5b8472c0fdd65decfb3a12f344e0bb"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "d82a88cc65b06cdc61cd5abf2b0998f0"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "a1352766ba58ade09583158c047c457e"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "5ad6fb514adbb5bcd6a1ae916c50652f"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "6027052f0abe9a0a0ed2417e6225d1b6"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "97fc0a5cfeb60370fc269a2913ca11a2"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "11749170a8a604a24462e1c0e6b730ed"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "65da1c62d3db75a4ed89c91fd66d7982"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "f6afaf3ff4cd311aa1024a72cb74b682"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "0b9ba4dd13cd10f56aca27f2c33cfc4f"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "f5e90dea985eaaa08c26ea669e625bd0"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "0927519e54f3efbbdf9799a99117f3bb"
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
    "revision": "3700bf35a44bd3079ce6f3ce11bc6a20"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "c26d6e85dc6fc0e7f6c0211c05414b34"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "09c694ce30f1f7995e1a4f2dfd623d5c"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "5b074b555644caff0bd0be661e18bd2b"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "82b6b20a8ce635f421c710af02794829"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "131793325c3192b70382241a148aafff"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "848954a09f68b4a77656319b22a6e8a7"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "b951e27707ae07f7f5e3fc94a6312867"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "138ad84effe0c12491edf8fb05c96a0f"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "a4d4d2e71f145168a5a272953098bf64"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "81658ffb00ee23a714ddf08f02a2582d"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "0bab59123004fb9559adc6875f348f0f"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "b4724b916982651a844a65b09878e291"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "b46ed9bf374cb1084b4574e6a3e9db21"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "72ade499ab9ad52fb1e42d31dbfc5ced"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "0a2f93a45f4706b8a9e02df8d0b05135"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "ac10b6cb155e19953025c3b8fdeaddfe"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "cb70128374240d6f0e0953e054cb047d"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "fde402d22c3ba7205624b4813e6e70db"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "d02b3c508470a5caa16bd448abdc111e"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "affad6e1daa2544555a07cbdaef2d4eb"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "09da2faeb445813fee9af01f128b9202"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "a0ffd958d323d3aab51e2df765f9e4cc"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "1cf2677a913903a3b80f132ed9e26944"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "ff28ae836f76f0e864854665da887890"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "24ad50ea99404c40cf7edfdca7365989"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "01e886d8c34e6608d3c89b62d7fb80b9"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "5ac568a295c0cb1f98a949ad091bef6c"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "995cc4e1e5d52a095e5ebf12de655f05"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "b8bdf406c118be9e6911b72c2a208ab2"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "f01352e60b9581932d30560eae6e1e8d"
  },
  {
    "url": "index.html",
    "revision": "106ef4fa272f2e271714ab47a92c0457"
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
    "revision": "4b8bb3dbbc1c602f77da9f16b31f3410"
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

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
    "revision": "bce292fcc79c95a46ad99e4df244237f"
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
    "url": "assets/js/11.9928cd32.js",
    "revision": "22eba25a9de4bbae946906bc68c637a9"
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
    "url": "assets/js/14.07e90131.js",
    "revision": "03d55fcbafe24008c8ca659a7a723fcb"
  },
  {
    "url": "assets/js/15.9d28c81e.js",
    "revision": "63b7b8ad614dfc0c23c096b4ae6a4c26"
  },
  {
    "url": "assets/js/16.21b2dd3a.js",
    "revision": "bc5c4edeb5440829c0badb83e94b4c1c"
  },
  {
    "url": "assets/js/17.cd4f95b1.js",
    "revision": "deec5da21aaddee0f4b49ce4062e0e96"
  },
  {
    "url": "assets/js/18.081d43e9.js",
    "revision": "407d28cededf5bb259d0f0a14873e9e2"
  },
  {
    "url": "assets/js/19.183b6438.js",
    "revision": "5c8387e515529c2af53c5f5a829185f8"
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
    "url": "assets/js/21.483bd20b.js",
    "revision": "7a1c5cf691e093116a2a5ea452a82a77"
  },
  {
    "url": "assets/js/22.b04ea3f3.js",
    "revision": "0395749849712a97d98b363dfdfa6bec"
  },
  {
    "url": "assets/js/23.cb6394db.js",
    "revision": "6c36ad0338de96136f0d43c9a101a953"
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
    "url": "assets/js/26.19829f45.js",
    "revision": "7bd94982fd350c047df44529bb8ae636"
  },
  {
    "url": "assets/js/27.4786339f.js",
    "revision": "39c49678a06b620324164047b03e4e7c"
  },
  {
    "url": "assets/js/28.6748674a.js",
    "revision": "7fd4426491ca1b49f9cf0eaa585fd21e"
  },
  {
    "url": "assets/js/29.dd26b75c.js",
    "revision": "34daf6c9398aab22e287fac8e59532e1"
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
    "url": "assets/js/34.6f7cf272.js",
    "revision": "cd500499fd17c41b5f10644a8975f5af"
  },
  {
    "url": "assets/js/35.72678e1f.js",
    "revision": "05314ce688add0c4520b36ae53558bfb"
  },
  {
    "url": "assets/js/36.e57b7018.js",
    "revision": "b0942dcbecc23f6e2973ac9dba9dec3e"
  },
  {
    "url": "assets/js/37.e74b511c.js",
    "revision": "a17e2127826a5adf4e106ebbc516cf94"
  },
  {
    "url": "assets/js/38.838c6717.js",
    "revision": "0b5e58132a0627870cd859b7cecde4d3"
  },
  {
    "url": "assets/js/39.c23bdb56.js",
    "revision": "f204e5ad58784d3f27c0a9f8dc528bf9"
  },
  {
    "url": "assets/js/4.24737158.js",
    "revision": "1f76b5fc32f52cabd16e960c008ee0a0"
  },
  {
    "url": "assets/js/40.aa355126.js",
    "revision": "ecafe314efb603d5ec7eb038df817acc"
  },
  {
    "url": "assets/js/41.b8da5d20.js",
    "revision": "4d4ef22dc281e71d7203498dd0dafc80"
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
    "url": "assets/js/44.e2176643.js",
    "revision": "4361034fc73c775aac0254bfa222f0ac"
  },
  {
    "url": "assets/js/45.2af6b1c1.js",
    "revision": "5f6a26fa69a47f6a57ee8dab8c0e63dd"
  },
  {
    "url": "assets/js/46.0afaff27.js",
    "revision": "aeb4f89b2442d81208e9bdd360fa1cb0"
  },
  {
    "url": "assets/js/47.732e2b2d.js",
    "revision": "86a7e1a985c9f39741a189c26d753957"
  },
  {
    "url": "assets/js/48.5b26bf47.js",
    "revision": "ac0fb39859f34a1828a6833670f243fd"
  },
  {
    "url": "assets/js/49.9cc47654.js",
    "revision": "5fbb78b6c61c565416af1245e48120b9"
  },
  {
    "url": "assets/js/5.21d74768.js",
    "revision": "e61935eb4eb9f593162ee9c657a6acd5"
  },
  {
    "url": "assets/js/50.e2292df6.js",
    "revision": "cda542518b8b958733bbeca368d101e2"
  },
  {
    "url": "assets/js/51.87d702ca.js",
    "revision": "8473e057e13453152a3805438311aa9f"
  },
  {
    "url": "assets/js/52.04019c3f.js",
    "revision": "d0ab134634206c29de099a5517f8423a"
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
    "url": "assets/js/55.119e1ff3.js",
    "revision": "7b646cf373c9b70d8934f2b4f6d42e99"
  },
  {
    "url": "assets/js/56.9aab18a8.js",
    "revision": "e5537a722a98dcdf219f6f8e75895709"
  },
  {
    "url": "assets/js/57.14272597.js",
    "revision": "e62ef9448b02d959b98b9707eaf65b12"
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
    "url": "assets/js/8.74b65a38.js",
    "revision": "b7a278052c12498f786bd3e62ba5f6a4"
  },
  {
    "url": "assets/js/9.22952a53.js",
    "revision": "56cb3095f9944c715e7fdb81a4a70bf8"
  },
  {
    "url": "assets/js/app.91b23711.js",
    "revision": "b0cbb7e2d99fbd49dd701f57e71cf450"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "d8d1a08da7a46788339c56fe09812a40"
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
    "revision": "a9527989984ddbaec4fbb26e6edc0af8"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "56b3397c4f07a90ecd60dcfee0bd50a7"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "81cb9ed7daddce5a79e2a79e051415be"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "d679dc0750e690bef76efc615d48c09e"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "5456519716f1051706595bc832218696"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "52bf8f71203e9a984fe64501131c65f7"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "415468e2f5f7855957435144eae987f5"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "87a599e5f89c0ea0f1fab6c80dd4b77a"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "039e4bcb4653b204c04a01dd2b2ab8a7"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "be4019f3cc35ac6393db7696873897f3"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "6c4f033715fe01752c3afde9d165505e"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "31e24ebe5c179688c596d6d5a372322b"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "e80eb83fea33a64e649e52f4eb2969bc"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "a7592aea285791a14dbb70ce2ccfb122"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "0336b01af87bc7573418bcd260d90fa5"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "71f0f32a3f30feb138eb72511dd23e3e"
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
    "revision": "11dee5ce0127bc9bf99b105a198a8584"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "4d94b52e0d352f275e091eaee215c187"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "49a5cb2bf92d800a3fbcbc7318cb1b2d"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "1a467aff40de496efa8dbe906ac63620"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "b50d2aaa4ebb920e61456275a335d213"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "8b2c7d1fe84f9fb299b3167ec69ec2b6"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "8ead205d41dc3473cadbbad7ac4591d4"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "dcf4802e1f2acb9b8debf74c8c6ae8f4"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "b6d62455c6f5d01424843ed6baad6fc8"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "6bae12f4ed17c382a37649077cd84cb0"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "60bca75904a832bb0c1309ea45e2a1de"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "d73aea84d90e25937ac7e06364fed74d"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "63d944a2cc04576495f78b36cf349653"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "e5ca06f80daae34d135082274da7f459"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "867717f952b7188da8be9de1ac29730d"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "124f0731c9bd2c7273d7b05693ddf0ce"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "c02641c78c31ddadd8024c3d1f2de20d"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "abf8362d19704c50227e85c309cd1a54"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "b2d662fc44b3a85794b4ff74c7b72cb7"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "a34a5aef7858c1c5bba359c53d96ac75"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "f89096b24f51578c3e65fcd7c66fb65d"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "5728dfc53bf897994f42712fcd3e0499"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "107d7c621006f853d61297838ff15656"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "c00e92a5090426df79d420f7278b6a45"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "063cb284d8d92d0b13db6e6f5260ab8e"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "e6ee30754a583ac0d63eb9ba6d7ab573"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "8cc9eb94e067e0186e6bcea68b50f1f7"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "a8081fd4999fe14430df989ffd492cb7"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "ec2cce29403e206e044f998cbcb359f3"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "1dbbeb54ba6ea8a63657e5f9dea79c67"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "0b926752039bf48407b151d4f8787cde"
  },
  {
    "url": "index.html",
    "revision": "4241908631177df11fba26307446041c"
  },
  {
    "url": "logo.jpg",
    "revision": "bd4366d3ff12475f7b11cb15da5e8e3b"
  },
  {
    "url": "qrcode_wechat.jpg",
    "revision": "bd4366d3ff12475f7b11cb15da5e8e3b"
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

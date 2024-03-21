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
    "revision": "4697368dec1a816eef35588176a9d64d"
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
    "url": "assets/js/14.ab654b35.js",
    "revision": "55c9c7bf06b79b49ec31eebf1716d87e"
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
    "url": "assets/js/17.96dd08cb.js",
    "revision": "5a9179a7b99c4205d46bf26878aca976"
  },
  {
    "url": "assets/js/18.dbbb2980.js",
    "revision": "30b867365c55b13d0047d59029c674b6"
  },
  {
    "url": "assets/js/19.eeb605c9.js",
    "revision": "d8023406d9f3f76d9415c99ca9e9610e"
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
    "url": "assets/js/22.83d697a3.js",
    "revision": "1321aff430a5934c2aa4e057c330b278"
  },
  {
    "url": "assets/js/23.cb6394db.js",
    "revision": "6c36ad0338de96136f0d43c9a101a953"
  },
  {
    "url": "assets/js/24.cbb908eb.js",
    "revision": "09d266425be85f8fd35c1e8400c70091"
  },
  {
    "url": "assets/js/25.07ee40cb.js",
    "revision": "59e39b49115ec21e74faaac3c9fc1c98"
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
    "url": "assets/js/33.97d004ed.js",
    "revision": "3e75d6e1d6c42281dd4032e65683dc72"
  },
  {
    "url": "assets/js/34.e961349e.js",
    "revision": "c29cce9d4a988a2c782e4af939afd5b6"
  },
  {
    "url": "assets/js/35.7f9743f5.js",
    "revision": "70b23abc031a547799a986bae57c52a6"
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
    "url": "assets/js/44.a56db069.js",
    "revision": "d9830ebccd18e1eafe57fffd0f193f11"
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
    "url": "assets/js/47.b12956d2.js",
    "revision": "f534cf45db427a3a47232f0be4e6ebf9"
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
    "url": "assets/js/5.0af014fd.js",
    "revision": "6794c566d852ed50171eb3ebdf4afcd4"
  },
  {
    "url": "assets/js/50.e2292df6.js",
    "revision": "cda542518b8b958733bbeca368d101e2"
  },
  {
    "url": "assets/js/51.e7f6a165.js",
    "revision": "4e8e3c42f4bc8da69a773ea7f3d4ee61"
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
    "url": "assets/js/54.52adcbff.js",
    "revision": "4d1f3a3e35077194cfebe4e2255376c8"
  },
  {
    "url": "assets/js/55.9cc4b002.js",
    "revision": "87a2197b2dca05802691cc383e217930"
  },
  {
    "url": "assets/js/56.0f724c0a.js",
    "revision": "bc22a7a35b7424b2d80d0ba773e70e0f"
  },
  {
    "url": "assets/js/57.4a6a5971.js",
    "revision": "2a835868c98d389a307785b6e4afb185"
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
    "url": "assets/js/app.9debf460.js",
    "revision": "461a078d9d7d9dc3c9c3348006a301f7"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "970eeb34b169fea26bd27a94ebff428f"
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
    "revision": "1727d4ff97abad1d2cc07d3e3556f101"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "d787a073cec1360ee1f371279360816a"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "7b3096187aafd00209f6600b818d81a9"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "8db91de26a6b7aeab907c99615fcc7f4"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "95d1ab1f583b3b4cf483444fe862fad3"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "eedd64106edc634f625e7ea368886c7c"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "7c043570afeca53f1c0c2ceccce2900e"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "acbfa0ff5a7809cbfab189fa5f384753"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "c7d3294b71c42b72acf5c4b9873c5862"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "71613d879f95cd3d0bca24674eb4978a"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "44d6d928b4d3bae3b9048d2943f1224a"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "3be41916af64b25dc48a480e12335538"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "d0873515ba3043540302e022e5457bcd"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "67c221f8ce9c936232226d1fc08db3b7"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "649d7d9238f50f33dbdcd3240ad044d3"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "9d281f7f6a637b1c2118d8394e74db38"
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
    "revision": "df3fa07bbf7dd68f1a6b247eeb1a51ba"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "325f47196da11857f9fd42707f3de367"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "aad4e701ed328074846b05174ad62550"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "80c65af8c2f4e7ed5f6427f93ecfb928"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "fefa4459de45633c33b3730c187bb5bb"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "9fbf3cfc02ea361d6aa74082c9c98988"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "4f604e3dfc0f17b1350cc386cf3eaee2"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "00d0a52305e5ad23e92063b105cf9cb5"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "b074648e483162f6676f42722dae521d"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "9bc972b98a1414fe8da35e498d6e4f8b"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "d397eb5cc768cd7c7a711d435ff03196"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "d621bfcdffdb4b2025127a54cc3ef06f"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "20b08f365306a08d5cfb7d19fcc1297a"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "fa0d1b45f127d9af4d57fa24c1e2bb9f"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "4a6d4b03de8b79bb2f64c9c1fb86311f"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "0336009a25f78d117c86dade259b9a06"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "848879071b5568fcd824fde9d838a5aa"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "a9adc1c900b0c22469cba212baa9cd0e"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "6aa7d09870ae0c948ed44abae192b8ab"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "fb5187bc47d5137c2f11b11e0e8b8e7a"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "c0c2b2d50134d180848505f2eaaf9cfc"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "9b1f83cd452fcd7d5c60bb37131a7a7f"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "eef6507bd5c0df5057ae41497cf181ef"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "04f95faa0da26562c8fbb43160ce5508"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "c3b82333f7364a8ce8f119d774156a78"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "f00353c28cee53f61e0fda29d6ac989d"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "c08c4f443d10c6d16fb86bb46c96cd94"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "2fdd3158ad2e2ea5eba451c8265ac2ee"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "5c0058d52a799f740037f326fa3f3a70"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "15a0eb1b31eeeb27d3f1b99590d6776c"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "7226e742c116e4e6604b78b3d707cbf5"
  },
  {
    "url": "index.html",
    "revision": "3280def0186bbfbc46d072fa0b6114f6"
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
    "revision": "dbdaf58644d4d45716e33118ed43f892"
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

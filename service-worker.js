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
    "revision": "70b982cbb2cc6b8d2a2cd9833f14cc3d"
  },
  {
    "url": "assets/css/0.styles.58a00962.css",
    "revision": "0cd21ceb063ecb4e8f0370808031f975"
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
    "url": "assets/js/10.f3bc6abb.js",
    "revision": "f3ef81cd4722ea67aff208475327186d"
  },
  {
    "url": "assets/js/11.8d84c2fa.js",
    "revision": "9db55ac06b99bbce5a25bf44a499c52f"
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
    "url": "assets/js/14.ab654b35.js",
    "revision": "55c9c7bf06b79b49ec31eebf1716d87e"
  },
  {
    "url": "assets/js/15.454e6662.js",
    "revision": "981ca0d54a5adedf6622c81dc480f1ee"
  },
  {
    "url": "assets/js/16.8683ec2c.js",
    "revision": "117592d661de1badc95d5de85cfbe1f9"
  },
  {
    "url": "assets/js/17.dcb66e6b.js",
    "revision": "409d94309a72a7db6325c2da61641594"
  },
  {
    "url": "assets/js/18.cec8cf0d.js",
    "revision": "983e92ffeabc8dd58e9d119cc6f66a11"
  },
  {
    "url": "assets/js/19.4a444833.js",
    "revision": "01fa0a0ee91fe29e7ef061347978d32d"
  },
  {
    "url": "assets/js/2.fea80727.js",
    "revision": "c8364c734c95135ff916e696d747cd76"
  },
  {
    "url": "assets/js/20.27f97921.js",
    "revision": "8eba53edfa057f8c1d89c9e64d850952"
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
    "url": "assets/js/23.bb188fa4.js",
    "revision": "62760e410895e3aad3ef4f2ae1ebe7a9"
  },
  {
    "url": "assets/js/24.0b23ff65.js",
    "revision": "59c5189034aeaeab2b49548ae34fb0bc"
  },
  {
    "url": "assets/js/25.c695dcbd.js",
    "revision": "f8a157d3da9cb5bcea0f27900fb76dff"
  },
  {
    "url": "assets/js/26.de166a9d.js",
    "revision": "9f4a5d55453f84c9be005fc3848a0a4a"
  },
  {
    "url": "assets/js/27.0acbe604.js",
    "revision": "141d1063861a44ce8ac5dfe165a0f54e"
  },
  {
    "url": "assets/js/28.1617954f.js",
    "revision": "9975d90a72601d282be841989c6c542d"
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
    "url": "assets/js/30.3e204daa.js",
    "revision": "adcaf067b8b252c03d22c28eaa915b8a"
  },
  {
    "url": "assets/js/31.4a039aca.js",
    "revision": "da38e1f4c63a8c245f18b355376c2b3c"
  },
  {
    "url": "assets/js/32.4775f3b6.js",
    "revision": "039d383681e964ca7edc784972b380b1"
  },
  {
    "url": "assets/js/33.9135a239.js",
    "revision": "653725dc50e884310a9d7932a6cdffcb"
  },
  {
    "url": "assets/js/34.740ee14a.js",
    "revision": "b3b92e2ca2c2bb20e0e55ee2993fdee5"
  },
  {
    "url": "assets/js/35.1b2c0aa4.js",
    "revision": "ac62151d36220029bdf073892e0ed885"
  },
  {
    "url": "assets/js/36.41898e8c.js",
    "revision": "ea7a95543143f37fe8ab260a9285dd9f"
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
    "url": "assets/js/4.f9c87170.js",
    "revision": "4b62511080a73511f9216bcb7ea57e03"
  },
  {
    "url": "assets/js/40.4fc49ba0.js",
    "revision": "ffc1fc22c243b414165a7b859a72ce87"
  },
  {
    "url": "assets/js/41.ccdb00e6.js",
    "revision": "891105a5ffe98d822ae4297b08f5e095"
  },
  {
    "url": "assets/js/42.6c6a73a8.js",
    "revision": "ca9f2d16070ebca61157f70a52ee577b"
  },
  {
    "url": "assets/js/43.d23bd400.js",
    "revision": "73dac5a26aa5c65c33b5078c980dc7c7"
  },
  {
    "url": "assets/js/44.401ecf24.js",
    "revision": "506f58a4d98c1af45c9d75e6182a6631"
  },
  {
    "url": "assets/js/45.4b0ef52b.js",
    "revision": "7d1822d4c5922cfd655368b117b21e88"
  },
  {
    "url": "assets/js/46.af80035f.js",
    "revision": "76085305521a50210100080dc45d89e5"
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
    "url": "assets/js/50.96c4809b.js",
    "revision": "583f0c1b7de3b69fd701574b78f64524"
  },
  {
    "url": "assets/js/51.b8e19760.js",
    "revision": "9ee8ef4923338448be759d233b2dc727"
  },
  {
    "url": "assets/js/52.b4bdd337.js",
    "revision": "a52bd21f5cbf373dd63bb9aa6107be68"
  },
  {
    "url": "assets/js/53.52a3b737.js",
    "revision": "f4068915ae58ec3be7ab32890c960b70"
  },
  {
    "url": "assets/js/54.854d388b.js",
    "revision": "8558db5819ffceabac526d747a40bb17"
  },
  {
    "url": "assets/js/55.119e1ff3.js",
    "revision": "7b646cf373c9b70d8934f2b4f6d42e99"
  },
  {
    "url": "assets/js/56.97278c88.js",
    "revision": "eb8228e297e5e3f5178488e638a98e58"
  },
  {
    "url": "assets/js/57.ed6170d5.js",
    "revision": "77c4cd7d5cde5bd8820bfbbbd6ecb5d4"
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
    "url": "assets/js/9.dbd703ba.js",
    "revision": "c3faba5eb203214336fc6b9e48b46ce7"
  },
  {
    "url": "assets/js/app.20002db2.js",
    "revision": "6e5d925f1c619978cd6785a709511eec"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "ca350f77283bfa8742b7e704ef334beb"
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
    "revision": "a82e4507c25cf4abae804af395ed5b21"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "df04af7d94e1aa6e1816261965a15966"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "70151931f7783610d5fd7932e240a3d1"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "20269e84c932df3de3c97bb692464ece"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "6654b2a49e061ff3f23ea5243f7178d8"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "3f0597c21ea91e0a59b95817f4c5771c"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "b092a6e55eed2c3327828056e94271a4"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "94f0fe7f84b94d7fcc1a40eec694f2f9"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "54892706e3fb8bab65efbe4d55ff82aa"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "bf366a387aca14f9ab3627da0d7cfdfa"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "65a681e5679a539932ef838564a72713"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "95e3aa4a6c2fd0f5163975ea575e09ce"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "9872cdcb2f340accacfc3a962e1931b5"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "5bafdfc95814b1f0b6aa4cb09ceae16c"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "17ef0a898a634a9124ed415fd24a8697"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "18797afa4ec11a9017a9ff27bcf0a4de"
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
    "revision": "21d31234d98b4c888235666175f836b6"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "d80d5b73e276afd4c55549f86316432b"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "cbeae46ddb35071fbeca573d412f17b8"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "d2f9b31b2ce7095d4cd30ced66879ea5"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "19e5d575640a600551da072f785fe348"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "01442bec994807c47c4b933f08d33336"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "5b277084f6e3036fbe9afb5b48216913"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "26728888dcb65755ea8e58ff129fcbc7"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "6902563b73248b3ca39540e7b247d720"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "041f23e7b1dd8e831818b6f1ccc894ec"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "99beafe3672a1504e75ae89fdc79ddc2"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "f0f2a7739a0f824d51b3c3fa05356864"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "83be05317d1c12008f5d9790f5727583"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "286c37b7cfccdc356fd47f83cb2bc97d"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "887c03b422ffe2205b71845668c8ceac"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "6416b5fd65db45144388d9b82a49977c"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "53604aa72824df5106a7b8fb853a33a4"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "05ef6e8a2e31f218c1254a81cb821080"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "9ee7f493173cc47ae81d26d1d8160604"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "97bd8d7cc01692ea4f5e644ba60b51ee"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "6634ac84b5d57f279ce5cbff6fe6dd80"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "06bdbf3a836e71564d59c24b78d8c072"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "aca92e6b716b3f0d9c06a89e0d2b8257"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "c04b39824b2c38cdae3e5bc40705946a"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "9b5c90f86fc58e01280350c5278e2c10"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "13649f6143e7c910c585a99e0977d102"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "9014691991e228d669d792454faef910"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "8db63dfefb275b6b9e38094deacc881d"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "fa5709c04249b5152e905ca929407167"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "a82c0f756a8bb0b2f1f848691897e05a"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "2572ac2c446fe86d375a25789847fbaa"
  },
  {
    "url": "index.html",
    "revision": "de1ced4ab04d767a74825550fe3eef1b"
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
    "revision": "758c6829cc1d96747cb3145e4a43744c"
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

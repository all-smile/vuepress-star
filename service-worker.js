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
    "revision": "0f7b3a3bdf45c85d70d231ca8e232080"
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
    "url": "assets/js/14.ab654b35.js",
    "revision": "55c9c7bf06b79b49ec31eebf1716d87e"
  },
  {
    "url": "assets/js/15.60618466.js",
    "revision": "021151daa0c982aa33746b9d8f9303fa"
  },
  {
    "url": "assets/js/16.bb4cfaa6.js",
    "revision": "18b22d4b9863cd8c63c3c9f933ea8a5c"
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
    "url": "assets/js/19.d6319836.js",
    "revision": "14bd914ecc378f6343de75a8304820b6"
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
    "url": "assets/js/23.bde39f2c.js",
    "revision": "8910951120b05d2ad2878b0b4e5135f6"
  },
  {
    "url": "assets/js/24.e6dd1fc9.js",
    "revision": "57301b2437ee9ff6bbc32ad962226b25"
  },
  {
    "url": "assets/js/25.a14f66ae.js",
    "revision": "5afa0ffc768833c862e4db7e28e4b568"
  },
  {
    "url": "assets/js/26.7363b852.js",
    "revision": "47bf87ea5b9117024eb978ef0f69de11"
  },
  {
    "url": "assets/js/27.5bd1245a.js",
    "revision": "d42fc44514a4962b8955b845da80d670"
  },
  {
    "url": "assets/js/28.a2a5c618.js",
    "revision": "829929940fa35ea64e3b4ea8ec887f27"
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
    "url": "assets/js/34.7831c073.js",
    "revision": "068ca6e637882c28f6a895366bee3b03"
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
    "url": "assets/js/38.7bd32ba3.js",
    "revision": "c61f81cbb018d980328454130f707364"
  },
  {
    "url": "assets/js/39.1bd11ef6.js",
    "revision": "8512a9562002ea5174354dd7ff63a821"
  },
  {
    "url": "assets/js/4.148d9ce2.js",
    "revision": "0954b0c8fda88829646e3cf6680634cd"
  },
  {
    "url": "assets/js/40.4fc49ba0.js",
    "revision": "ffc1fc22c243b414165a7b859a72ce87"
  },
  {
    "url": "assets/js/41.87aabdc8.js",
    "revision": "e6b0723424f49957b49ea06f6769c1f1"
  },
  {
    "url": "assets/js/42.0a45e568.js",
    "revision": "6a4a29452cb075e76ef2a2d3a9175f4a"
  },
  {
    "url": "assets/js/43.438b1bc5.js",
    "revision": "0a57da84c99e59261becc88a65287aac"
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
    "url": "assets/js/49.cff57964.js",
    "revision": "cec852ba70446a24c5019120f4ddbd25"
  },
  {
    "url": "assets/js/5.26e5bb1e.js",
    "revision": "b0148296abc07fb85dadd86bb3907c7f"
  },
  {
    "url": "assets/js/50.6f91c399.js",
    "revision": "e2749818da088bef5a8f1804b0d88b62"
  },
  {
    "url": "assets/js/51.b8e19760.js",
    "revision": "9ee8ef4923338448be759d233b2dc727"
  },
  {
    "url": "assets/js/52.15044b1d.js",
    "revision": "be81f4cfe802a27da148c8fc5e8624c2"
  },
  {
    "url": "assets/js/53.e4d85d0d.js",
    "revision": "af0666caab429a8f7dbd508ecf2a86b6"
  },
  {
    "url": "assets/js/54.1601b21d.js",
    "revision": "0b0b1385e479dfcdc88f179ee7389553"
  },
  {
    "url": "assets/js/55.7a0c5e16.js",
    "revision": "fabfd2fbda82f0eb6286e7384cc4e47c"
  },
  {
    "url": "assets/js/56.587def02.js",
    "revision": "b98cbfcc13a5bac640b7d282aa969995"
  },
  {
    "url": "assets/js/57.25356111.js",
    "revision": "273d23979ae001d7659b2a9523aaf05e"
  },
  {
    "url": "assets/js/58.88a1b201.js",
    "revision": "0505e6e4da4770810bcaab540fb4a324"
  },
  {
    "url": "assets/js/6.7be817e2.js",
    "revision": "f6477c300ea9ee187e07ccfed0c07b9a"
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
    "url": "assets/js/app.67ee50ab.js",
    "revision": "7790d8d481823125b22c53a3b58d8276"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "23987961cc47e06611f48306e40374df"
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
    "revision": "6ff7528c221b2ca37851f26bf001ad51"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "a662bbeab9f46de7c105c92ff87ce879"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "6eb43e720b6b62bd093afaa7768ad65a"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "06c5d56082b20be0c2684b1f9cbb4c1d"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "bdbc48056abecc48458ffb8df5e3c067"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "7d49e2b141bc93a6e38a7e294075d0aa"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "cc3fc4dbd5860d5e3d696c8a9d257d21"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "78f26dc5178362cba8132172f708eed4"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "aad58d590f8898aebe10d2fc2b5886d7"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "f4c14c9b44af4e7bca4d993179b840b9"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "44ccf9c025f5015dd4f7987129dc4b2f"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "073a2cfbebb128fbb2be93f5034e2581"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "32ab541052346be0ee1bd6b6ad49637c"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "ba4d6a49cfa0e54d15f74f4a276145a4"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "98c4292a023291837392cf7a6d40d8c1"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "67a300294a57ee9bbb5dd8939c96c058"
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
    "revision": "de534c540b9bc94d9fe2c1d47cfad443"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "d983b579f0e5124c8626b18ae544cbde"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "c8f30da34f279e6faf61830230578f0f"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "35bdb618da4ac00103c45f7bd4501638"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "1fe7680125da3d966a39f387fb62f2f5"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "689acce0a63bfe18b67a8d8cea6ed617"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "bca9ffc25dec49660570e1df6885fa44"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "8919b4fc86da411a058d22f006718d02"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "c71717847e90fb6a6cac603a23945f1b"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "ddca232139c07e8e4ec49b518f7c80b1"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "f01febfbd296c29a1806718185032bc0"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "208fd6e51191b9b808d882c6feac17ae"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "b28eb20a03c972b771c718a57b560acd"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "3f29cae329c02add329b9af14ca36096"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "5831ab4ae13a59f9cb1ea311ae156220"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "76fa146ed82d5e10540fdaba25f2cc0b"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "d41ad63dee54d29de4dcad4d5e8897a8"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "8b8a564ad461ba56dce1b7ee314b1386"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "76bff563168092a5c6015bdd8504ea0c"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "5d9a6c3b4aaa0a89139f936aecd8aab1"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "9d6356f0aac10206c293f43cf07b322c"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "4c32c348399dff0f19bbe4f40192cd0a"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "18b69154898bd16ef9339b1d6ee30b06"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "2e81aadff64ec5f74242f31419848a8c"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "ea636d48d9efd5e05b0dd7839bdd7fff"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "99e53165fbabe80d110fb64151b2a123"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "83d93baa8eba52f1d9cfb5c78b2736bc"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "e377174c34cc6ce529cd940af0b5c49a"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "1684beaf71cd407fbefb54c13ff188ba"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "9e705522dfe1e2c8ecead4fd57409def"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "338aa3fb8bce82195a86f372c04efb9a"
  },
  {
    "url": "index.html",
    "revision": "a4e6d1fed0fb97ce633ced3715defc4a"
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
    "revision": "7282258f944180149f46f43f9359de98"
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

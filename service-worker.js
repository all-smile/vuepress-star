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
    "revision": "d03645c04c90ba41b55c45cbc00676f3"
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
    "url": "assets/js/11.4a0e8626.js",
    "revision": "d8715b195ab6b2774d4f9c0072c40648"
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
    "url": "assets/js/15.b885c78d.js",
    "revision": "83f01992f123500125d301395f3ee351"
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
    "url": "assets/js/23.bb188fa4.js",
    "revision": "62760e410895e3aad3ef4f2ae1ebe7a9"
  },
  {
    "url": "assets/js/24.e6dd1fc9.js",
    "revision": "57301b2437ee9ff6bbc32ad962226b25"
  },
  {
    "url": "assets/js/25.766eb38f.js",
    "revision": "78142140fb17b69961ee721c5165be46"
  },
  {
    "url": "assets/js/26.fce4f12f.js",
    "revision": "e15bfd5a45ab678df259d10045feaa80"
  },
  {
    "url": "assets/js/27.5bd1245a.js",
    "revision": "d42fc44514a4962b8955b845da80d670"
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
    "url": "assets/js/30.0eba80e9.js",
    "revision": "d40e9da37ee5ebc7c67d55b5b3ca335f"
  },
  {
    "url": "assets/js/31.4f1d8a76.js",
    "revision": "2f0ac11843d571c3723ba473078d077e"
  },
  {
    "url": "assets/js/32.5293588d.js",
    "revision": "1894b3bebfacbc4125555df14b267659"
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
    "url": "assets/js/4.2fa42de4.js",
    "revision": "3b19df8f23a5e4b22dbb6c53f4b4be8d"
  },
  {
    "url": "assets/js/40.4fc49ba0.js",
    "revision": "ffc1fc22c243b414165a7b859a72ce87"
  },
  {
    "url": "assets/js/41.6b813172.js",
    "revision": "86f4b3256a61ba2941fa5e4d4799cb90"
  },
  {
    "url": "assets/js/42.140a70f7.js",
    "revision": "6cae113dbf11295ac0274fd469840841"
  },
  {
    "url": "assets/js/43.79db9fba.js",
    "revision": "b4808c9776e3d6129a3f545d386f3d37"
  },
  {
    "url": "assets/js/44.149cb1ec.js",
    "revision": "8550db489b8e7dbe2c59737fb2aa8f29"
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
    "url": "assets/js/47.c1e675a6.js",
    "revision": "5da212f83bd63cdfbcad91ed9e2d419b"
  },
  {
    "url": "assets/js/48.6b84d76d.js",
    "revision": "c85b52ff28945bdadff0ae4a7ba81895"
  },
  {
    "url": "assets/js/49.e66a7886.js",
    "revision": "314d72bc4bfb837aea0b1f4b723358a0"
  },
  {
    "url": "assets/js/5.2c953895.js",
    "revision": "2f7655b43ba5454200649d198c941feb"
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
    "url": "assets/js/52.1ce3f603.js",
    "revision": "db5cf1b00eb1bac172478daf62da510a"
  },
  {
    "url": "assets/js/53.52a3b737.js",
    "revision": "f4068915ae58ec3be7ab32890c960b70"
  },
  {
    "url": "assets/js/54.1601b21d.js",
    "revision": "0b0b1385e479dfcdc88f179ee7389553"
  },
  {
    "url": "assets/js/55.0c3f52ee.js",
    "revision": "6e2750db29bb1e85fbe066c636aca8b1"
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
    "url": "assets/js/9.c1bd2f79.js",
    "revision": "01f3cec7154a1e62ef9e8b2f2a79fb18"
  },
  {
    "url": "assets/js/app.9ec09d8a.js",
    "revision": "217b9797f79a18c7395a5ce4dd4793ac"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "f52a3311f3757e006513d286f6f793b0"
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
    "revision": "84e00f8a642c5654989cc44f616cf4f7"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "8ce12249bccad0da83e50b4df1412f6e"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "5cbedf7503ffd81bb41da46a230daeb2"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "8f3e82ea8cb4e67871eaa6551821ed14"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "38c5805ff28c338262a0f3c47218a7a9"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "82f915e78d15521e1d8c05132306a674"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "940cbcaf43a04f2bcb5efc3993883c14"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "1db9b6599309bec644a6a1c13bd64678"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "5d0b95a985de55d91dbdc7023677b226"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "ed38a538da34b24cbfdb305d609cad39"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "b9745a30e6f9175c8127094141899203"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "720f6bb0b83795a49157b735b36f8301"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "5cee729dcf245ee3e52d02be8d71c36f"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "63afaa7d5735266fa705d98b661f71eb"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "a885a7e9b8ec4cd46a52e67708426a79"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "9baffde9c35176dcbd8625c83d72f52c"
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
    "revision": "06446922da44110ee6045c365ba403c5"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "a73b61db831b0a90254bf16fbcc6fc42"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "c55f04c09241a596831a19ab586142ed"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "466a534af800f1e4873ad04763fde0b1"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "93f855ef7e47d60fd44126a86489eec5"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "7e429d2ff0450448daeb8c2cd39413d2"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "abadb77b6a1b9f1402bfe70d335e3233"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "96561f79a4b6ea90315159db28d33371"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "895bcecea514a8eb26a893940354ec5f"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "1edf7440c38a2b83b52ec75d83f82b17"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "4cc813cfcd1938b6fc4c3088cbdc2380"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "2ebcf2301f28e9d479c52fac0b6f24eb"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "70fc7b21fe50f1f491deaef5ab02a801"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "98975cbc9ed51efe8bda3490cf7e052b"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "ed1bbbdc5ea73eef3bd96ba1de1744f2"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "9a03a93bfb336a336c40a59c62ffb62d"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "f13b850a426d3bbba3b3673f8f51dea6"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "9533a0603c6d076aed98bbb53be52bed"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "8a7f4d17797a57947c2f9fdddb69b238"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "1698f2cad1c9f55d60b690b78ded5cbe"
  },
  {
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "29823ec2e01e4846ab8933a8bf17f232"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "f3f9db5a9661d6e985520b82642c61aa"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "698004396dc22f203c26b71d1cbe04d5"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "15c7827bcc9edc35bfbff55bbad084ab"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "e1475ffbf2e9368a5e7c1caa9287fd07"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "d3f9dcbc014ba542b59805ea212901ae"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "fcf4d5596bccc3f74f38f2d2cd968614"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "8cad3317ba8f5747855ecffebcf25add"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "e0688dbc2b98181823d1db0b42397765"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "3e48a809389799cdc90e4e43893c9576"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "1548dd11447ee200722a2bab095014bd"
  },
  {
    "url": "index.html",
    "revision": "eaaa2633d415532131ebf7ea42c672d3"
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
    "revision": "af34950795f4c2240f841536a2d98d3f"
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

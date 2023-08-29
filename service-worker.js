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
    "revision": "60f1a9b961d85d1503ae1a42ae0580ca"
  },
  {
    "url": "assets/css/0.styles.9874ee83.css",
    "revision": "bb26c2ba186ec5fea57b72b2f26c936c"
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
    "url": "assets/js/10.9aabcbcb.js",
    "revision": "4d82dc89d37ebb6bcc219c9a828bbcee"
  },
  {
    "url": "assets/js/11.d1366030.js",
    "revision": "605978fcd8afbf423196eaed1e13c43d"
  },
  {
    "url": "assets/js/12.c52bcf42.js",
    "revision": "eab7b6a1fa11b5d9df9598b7834fbda1"
  },
  {
    "url": "assets/js/13.9c4b70ca.js",
    "revision": "d39adf342daf1ecab9c2dc94f31224d7"
  },
  {
    "url": "assets/js/14.e1eb2d4d.js",
    "revision": "a6d6dc8294858548ead0155e2a18c332"
  },
  {
    "url": "assets/js/15.feb02857.js",
    "revision": "d92614bc93290f10e7d4eb6bc21b906d"
  },
  {
    "url": "assets/js/16.5f8fd504.js",
    "revision": "ea87a0d90279c95365f887207dbe0766"
  },
  {
    "url": "assets/js/17.0fb39e35.js",
    "revision": "c337b5e3d591902e0b4630119709892d"
  },
  {
    "url": "assets/js/18.b729fa5a.js",
    "revision": "66c79a9610a85718c21c0e2c30d66af5"
  },
  {
    "url": "assets/js/19.42c0d955.js",
    "revision": "cb9963cd14fd2ca03b590a45de1e5673"
  },
  {
    "url": "assets/js/2.3805375f.js",
    "revision": "0b1561449ba0783447b111ab977afdd0"
  },
  {
    "url": "assets/js/20.d9021510.js",
    "revision": "8046dafec47065acca626bcd52dd41dd"
  },
  {
    "url": "assets/js/21.08719b38.js",
    "revision": "727d2ae0e6e74db3960e213c2ae12371"
  },
  {
    "url": "assets/js/22.d0223cf8.js",
    "revision": "d4f80e035fd714ed96984f375c367770"
  },
  {
    "url": "assets/js/23.44368fbd.js",
    "revision": "1b1f51d2bb0da206ec830aa4868345f1"
  },
  {
    "url": "assets/js/24.b1ff925c.js",
    "revision": "428361279549ce38df799b0fd39dea79"
  },
  {
    "url": "assets/js/25.33967bd7.js",
    "revision": "132ac68537fbfdd7d6b560fde95620c0"
  },
  {
    "url": "assets/js/26.3953270e.js",
    "revision": "46e3a633b1265a62254a3e63ed909b56"
  },
  {
    "url": "assets/js/27.879e005b.js",
    "revision": "1b5e0a94fa975b820d47d076fa42fda3"
  },
  {
    "url": "assets/js/28.ad0ab75f.js",
    "revision": "97eedc9b87ff147d490e11eb67ee9162"
  },
  {
    "url": "assets/js/29.3357b52b.js",
    "revision": "cbae7bcc1c52f762e50d53bc3c319f75"
  },
  {
    "url": "assets/js/3.bf587fc7.js",
    "revision": "f81fe9e6ab6e11897d31b6b76d574361"
  },
  {
    "url": "assets/js/30.27f7cb0a.js",
    "revision": "785a30cc9220de1cee88b08f35f19a57"
  },
  {
    "url": "assets/js/31.3b98b70b.js",
    "revision": "7d587bef5d6135e5f1f544a02d484769"
  },
  {
    "url": "assets/js/32.7b66141c.js",
    "revision": "408987ca84676e941a6d96e3e02eb94e"
  },
  {
    "url": "assets/js/33.c95a7b64.js",
    "revision": "cd57aa194000982920ee4e4e1aeb5d86"
  },
  {
    "url": "assets/js/34.ad94a9d7.js",
    "revision": "81c00e12dab2c2a3c55da2ee0dc4ba2a"
  },
  {
    "url": "assets/js/35.5487a07b.js",
    "revision": "5ba87cff02a874ac03d540e0c870c852"
  },
  {
    "url": "assets/js/36.4739b732.js",
    "revision": "a75f51d18cf1e205a8d91c9d288e1e1b"
  },
  {
    "url": "assets/js/37.6bf404a5.js",
    "revision": "e7a09e4f79e2cbcf915e51d3a920bcb6"
  },
  {
    "url": "assets/js/38.5a3ccaa5.js",
    "revision": "882b62424b51bb6805e89f5606933afd"
  },
  {
    "url": "assets/js/39.cfc27f50.js",
    "revision": "8c712dceabd051a7b663979c1128ed8e"
  },
  {
    "url": "assets/js/4.c1e65613.js",
    "revision": "301a34f1a0c6b1236e78cec172fea5aa"
  },
  {
    "url": "assets/js/40.6dedcac7.js",
    "revision": "ac3045c0e307555d08be300643b2db79"
  },
  {
    "url": "assets/js/41.b1cfe90c.js",
    "revision": "2836157aeb41ceda09ff598c0a2ae583"
  },
  {
    "url": "assets/js/42.b73d600d.js",
    "revision": "4e493dc29d2b153adc5a1707a5066231"
  },
  {
    "url": "assets/js/43.d77669fd.js",
    "revision": "5f107dd661282063171599c50d9c324d"
  },
  {
    "url": "assets/js/44.265a9208.js",
    "revision": "7bb22e790babca7cb27639e07827d191"
  },
  {
    "url": "assets/js/45.67b39458.js",
    "revision": "70df625907bfbb938cf7d30408cd8df2"
  },
  {
    "url": "assets/js/46.6a7d5edc.js",
    "revision": "0a658e36f69d28afebb003cef1d314a4"
  },
  {
    "url": "assets/js/47.b87d481f.js",
    "revision": "15056e875486a1d8725d9357e9c06719"
  },
  {
    "url": "assets/js/48.29c49639.js",
    "revision": "d798ab38ab282560301622b8b91e3141"
  },
  {
    "url": "assets/js/49.a5130ef6.js",
    "revision": "d07c1252a97f983d43a27a4c48b8c39e"
  },
  {
    "url": "assets/js/5.d7e70436.js",
    "revision": "0946fa03de47d73d702c333a22d34c24"
  },
  {
    "url": "assets/js/50.f64153b5.js",
    "revision": "70bd5962d47a95d5a1a2342ec590d104"
  },
  {
    "url": "assets/js/51.9f4e429d.js",
    "revision": "39d04053bebe9993dfeece344b7ea03f"
  },
  {
    "url": "assets/js/52.6b7e984f.js",
    "revision": "10129bd6b72f795084f770b7bb731334"
  },
  {
    "url": "assets/js/53.dde7094a.js",
    "revision": "82fc41fb4405763c8581ac331af40c58"
  },
  {
    "url": "assets/js/54.919feadd.js",
    "revision": "9490fb7a9820137031da487c524c8180"
  },
  {
    "url": "assets/js/55.605f04ee.js",
    "revision": "76ce12681ddfe0f4ba53e3a7acc0e624"
  },
  {
    "url": "assets/js/56.0f0fa214.js",
    "revision": "68e0b564ffd352cd046c6e973cdc4958"
  },
  {
    "url": "assets/js/57.3d933fca.js",
    "revision": "f56eb661a02d18336d6c43e9c9a649d9"
  },
  {
    "url": "assets/js/6.61af42b2.js",
    "revision": "90eda23d9821375df1d38b4419d2eaab"
  },
  {
    "url": "assets/js/7.958103d3.js",
    "revision": "0a0822d44f732a37c787317625d62445"
  },
  {
    "url": "assets/js/8.b4d55e06.js",
    "revision": "801c076e87345001369f611d9db69011"
  },
  {
    "url": "assets/js/9.a9010ff5.js",
    "revision": "d5a2073d4c4fe95d38fd9bd6a9dbb643"
  },
  {
    "url": "assets/js/app.1ffa0fab.js",
    "revision": "5da8a03ba56a4283af4b697fce38ffb5"
  },
  {
    "url": "base/foo_bar_dir.png",
    "revision": "1075e79dde9c8361f2fb773c559147c5"
  },
  {
    "url": "fe-framework/架构能力/✨架构工作✔.html",
    "revision": "b2cada041d247a870ebfb92a8819520a"
  },
  {
    "url": "fe-framework/架构能力/框架中的规范.html",
    "revision": "6f60a005c77ce0170eb449c33fe44dae"
  },
  {
    "url": "fe-framework/架构能力/前端架构.html",
    "revision": "189455acbf5d47661d6059636d687563"
  },
  {
    "url": "fe-framework/架构能力/设计模式.html",
    "revision": "b727b5b5056e828604fd21f6e13a9da7"
  },
  {
    "url": "fe-framework/架构能力/算法&框架算法.html",
    "revision": "b115bcf560844402ffb670c77fafb33e"
  },
  {
    "url": "fe-framework/架构能力/网络协议.html",
    "revision": "88fa047d31281aeef5c61aabae77dc33"
  },
  {
    "url": "fe-framework/架构能力/移动端css适配布局.html",
    "revision": "2db458b15fac8eb381eb68cc2134a9c7"
  },
  {
    "url": "fe-framework/架构能力/MVP原则.html",
    "revision": "0eafa0fa094dc25184d457d0a099a379"
  },
  {
    "url": "fe-framework/可配置化架构/表单字段处理.html",
    "revision": "b59c2f00e042a55da2c9cfbc2c857b25"
  },
  {
    "url": "fe-framework/可配置化架构/单据架构+业务字典.html",
    "revision": "bb59338bb53544ac5d483eea35db48e1"
  },
  {
    "url": "fe-framework/可配置化架构/数据字典.html",
    "revision": "5c944a8009be60de60fabc8339663d30"
  },
  {
    "url": "fe-framework/团队建设/前端的详细设计文档模版.html",
    "revision": "ac5a5225b705985611a416451721b3b6"
  },
  {
    "url": "fe-framework/团队建设/如何打造一个超能团队.html",
    "revision": "143f266f9f52f136cbd9d88e1d0ae88c"
  },
  {
    "url": "fe-framework/网络&网关&协议/为什么微服务一定要有API网关.html",
    "revision": "d6e0abcfe1811efada7e2f2cdf9cddab"
  },
  {
    "url": "fe-framework/网络&网关&协议/SSL.html",
    "revision": "2b19db8de15dc26671527076266c5bb9"
  },
  {
    "url": "fe-framework/Bridge桥技术应用研究/uni-app 小程序开发.html",
    "revision": "c7d304c46934e9e52b34d84df6eaa0ea"
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
    "revision": "874318f01ae7ef762a245922e952bb12"
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
    "url": "fe-skills/代码规范控制/团队代码规范.html",
    "revision": "10495e855cb8e8b6b22e8a4e48ca4f98"
  },
  {
    "url": "fe-skills/代码规范控制/BEM规范.html",
    "revision": "4f3596277448223461165fa73833d5b4"
  },
  {
    "url": "fe-skills/代码规范控制/commitlint配置.html",
    "revision": "9e1aaa20af6f09b56374284cde97aa2b"
  },
  {
    "url": "fe-skills/代码规范控制/eslint介绍.html",
    "revision": "d21620a9e21ba8fb8ad6f6f6cd0679e5"
  },
  {
    "url": "fe-skills/代码规范控制/gitattributes文件作用详细讲解.html",
    "revision": "810d857f596dc43958e993007e5d3434"
  },
  {
    "url": "fe-skills/代码规范控制/perttier+eslint+husky的使用.html",
    "revision": "e5a7e25a5a0401bf1075040e21288175"
  },
  {
    "url": "fe-skills/代码规范控制/vscode导入导出配置（gist）.html",
    "revision": "ebb352d99ce81636937ab063f6fbc37c"
  },
  {
    "url": "fe-skills/代码规范控制/vscode开发中格式化问题解决.html",
    "revision": "2807ed8001870182d88bac9d98115e36"
  },
  {
    "url": "fe-skills/个人网站汇总导航.html",
    "revision": "3990651ecba74ff01f3e627a93430acb"
  },
  {
    "url": "fe-skills/基础框架优化项/捕获404页面，并重定向页面.html",
    "revision": "48771cf5a6af432e65d1cca2c2d49a45"
  },
  {
    "url": "fe-skills/基础框架优化项/打开、关闭当前网页.html",
    "revision": "6c91e757a8884921414a6ef1fe5fad94"
  },
  {
    "url": "fe-skills/基础框架优化项/封装sessionStorage.html",
    "revision": "467a8e9a92bfcb18cf82490c2b3635d2"
  },
  {
    "url": "fe-skills/基础框架优化项/滚动条样式修改.html",
    "revision": "26217d4c244a976f10c7351ced9e1bb4"
  },
  {
    "url": "fe-skills/基础框架优化项/浏览器识别，以及版本号.html",
    "revision": "a3ee9a4be4968cbcb2ebe476a06d4ed6"
  },
  {
    "url": "fe-skills/基础框架优化项/页面文字禁止被选中复制.html",
    "revision": "86fbb25c93c01549cf962b917def2548"
  },
  {
    "url": "fe-skills/基础框架优化项/JS复制文本.html",
    "revision": "8b8c9d03ff11cca1144d1eb1f4f791ed"
  },
  {
    "url": "fe-skills/基础框架优化项/less全局变量使用方式.html",
    "revision": "2581f69df907c300e0cc87b178073ade"
  },
  {
    "url": "fe-skills/基础框架优化项/marginTop塌陷最好的处理方式.html",
    "revision": "035dcdbc93af51cdc08de8ad0e7e900e"
  },
  {
    "url": "fe-skills/基础框架优化项/socket消息接收.html",
    "revision": "52e83cda154def28781c3144bcac3765"
  },
  {
    "url": "fe-skills/index.html",
    "revision": "797382dca92b88cbf1ac1e2aa43435af"
  },
  {
    "url": "fe-skills/nav.png",
    "revision": "c76f6e76c600451dac21de33bb5d7525"
  },
  {
    "url": "fe-skills/Vue/🎀Vue自定义指令.html",
    "revision": "72be1c5b34d2648d0297ee834f3d2ddf"
  },
  {
    "url": "fe-skills/Vue/$emit,$on实现原理剖析.html",
    "revision": "ecafa53b3b0aa63022ab3577f5ad1340"
  },
  {
    "url": "fe-skills/Vue/控制点菜单管理.html",
    "revision": "d77d23ec6e42212d33f50cab7fbf48fb"
  },
  {
    "url": "fe-skills/Vue/diff算法.html",
    "revision": "2db661a32fd55cad2807d3ea0d0bd043"
  },
  {
    "url": "fe-skills/Vue/env[mode]文件中如何添加注释.html",
    "revision": "cf0dabd39d04f326c4dd1eff53383532"
  },
  {
    "url": "fe-skills/Vue/keep-alive实现原理探究.html",
    "revision": "961a4b687c2d9587e08b9b17d1ec1557"
  },
  {
    "url": "fe-skills/Vue/vue-router之hash与history.html",
    "revision": "d1b3534d8f4fbf0d520807ce6e1490d9"
  },
  {
    "url": "fe-skills/Vue/vue扩展插件，自定义原型方法挂载.html",
    "revision": "92bd45261f112ddd46c4c9c321cf32e4"
  },
  {
    "url": "fe-skills/Vue/vue实用技巧.html",
    "revision": "bea8ab34e42d9cdd9f59fffb75f3157a"
  },
  {
    "url": "fe-skills/Vue/vue组件通信的方式.html",
    "revision": "eaed57afee3f573d54d8b942114c6f2b"
  },
  {
    "url": "fe-skills/Vue/vuecli4创建项目.html",
    "revision": "f840e982fc3b5efc19aeda37850d8eef"
  },
  {
    "url": "index.html",
    "revision": "cc1e137d0e3376c9c66ca6315fb6f54f"
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

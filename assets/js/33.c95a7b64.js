(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{433:function(v,_,t){"use strict";t.r(_);var s=t(27),l=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"ssl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl"}},[v._v("#")]),v._v(" SSL")]),v._v(" "),t("h2",{attrs:{id:"加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[v._v("#")]),v._v(" 加密")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("对称加密，比较有代表性的就是 AES 加密算法；")])]),v._v(" "),t("li",[t("p",[v._v("非对称加密，经常使用到的 RSA 加密算法就是非对称加密的；")])])]),v._v(" "),t("p",[v._v("对称加密的意思就是说双方都有一个共同的密钥，然后通过这个密钥完成加密和解密，这种加密方式速度快，但是安全性不如非对称加密好。")]),v._v(" "),t("p",[t("strong",[v._v("举个例子")]),v._v("，现在学霸小明这里有一道数学题的答案：123 。他想把答案传给自己一直暗恋的小红。所以他们双方在考试开考前，约定了一把密钥：456 。那么小明就把答案内容经过密钥加密，即 123 + 456 = 579 ，将 579 写在小纸条上扔给小红。如果此时别人捡到了小纸条，不知道他们是加密传输的，看到上面的 579 ，会误以为答案就是 579 ；如果是小红捡到了，她拿出密钥解密，579 - 456 = 123 ，得到了正确的答案。")]),v._v(" "),t("p",[v._v("这就是所谓的"),t("strong",[v._v("对称加密")]),v._v("，加解密效率高，速度快，但是双方任何一方不小心泄露了密钥，那么任何人都可以知道传输内容了。")]),v._v(" "),t("p",[t("strong",[v._v("非对称加密")]),v._v("就是有两把密钥，公钥和私钥。私钥自己藏着，不告诉任何人；而公钥可以公开给别人。")]),v._v(" "),t("p",[v._v("经过了上次作弊后，小红发现了对称加密如果密钥泄露是一件可怕的事情。所以她和小明决定使用非对称加密。小红生成了一对公钥和私钥，然后把公钥公开，小明就得到了公钥。小明拿到公钥后，把答案经过公钥加密，然后传输给小红，小红再利用自己的私钥进行解密，得到答案结果。如果在这个过程中，其他人得到传输的内容，而他们只有小红公钥，是没有办法进行解密的，所以也就得不到答案，只有小红一个人可以解密。")]),v._v(" "),t("p",[t("strong",[v._v("非对称加密有两个秘钥，一个是公钥，一个是私钥")]),v._v("。公钥加密的内容只有私钥可以解密，私钥加密的内容只有公钥可以解密。一般我们把服务器自己留着，不对外公布的密钥称为私钥，所有人都可以获取的称为公钥。")]),v._v(" "),t("p",[v._v("非对称加密的特性决定了服务器用私钥加密的内容并不是真正的加密，因为公钥所有人都有，所以服务器的密文能被所有人解析。但私钥只掌握在服务器手上，这就带来了两个巨大的优势:")]),v._v(" "),t("p",[v._v("服务器下发的内容不可能被伪造，因为别人都没有私钥，所以无法加密。强行加密的后果是客户端用公钥无法解开。"),t("br"),v._v("\n任何人用公钥加密的内容都是绝对安全的，因为私钥只有服务器有，也就是只有真正的服务器可以看到被加密的原文。"),t("br"),v._v("\n所以当引入非对称加密后，HTTPS 的握手流程依然是两步，不过细节略有变化:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("客户端: 你好，我需要发起一个 HTTPS 请求，这是我的 (用公钥加密后的) 秘钥。")])]),v._v(" "),t("li",[t("p",[v._v("服务器: 好的，我知道你的秘钥了，后续就用它传输。")])])]),v._v(" "),t("p",[v._v("现在 HTTPS 协议的握手阶段变成了四步:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("客户端: 你好，我要发起一个 HTTPS 请求，请给我公钥")])]),v._v(" "),t("li",[t("p",[v._v("服务器: 好的，这是我的证书，里面有加密后的公钥")])]),v._v(" "),t("li",[t("p",[v._v("客户端: 解密成功以后告诉服务器: 这是我的 (用公钥加密后的) 对称秘钥。")])]),v._v(" "),t("li",[t("p",[v._v("服务器: 好的，我知道你的秘钥了，后续就用它传输。")])])]),v._v(" "),t("p",[v._v("因此，相比较对称加密而言，非对称加密安全性更高，但是加解密耗费的时间更长，速度慢。")]),v._v(" "),t("h2",{attrs:{id:"ca-证书内一般会包含以下内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ca-证书内一般会包含以下内容"}},[v._v("#")]),v._v(" CA 证书内一般会包含以下内容")]),v._v(" "),t("ol",[t("li",[v._v("证书的颁发机构、版本")]),v._v(" "),t("li",[v._v("证书的使用者")]),v._v(" "),t("li",[v._v("证书的公钥")]),v._v(" "),t("li",[v._v("证书的有效时间")]),v._v(" "),t("li",[v._v("证书的数字签名 Hash 值和签名 Hash 算法")]),v._v(" "),t("li",[v._v("...")])]),v._v(" "),t("h2",{attrs:{id:"ssl-握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssl-握手过程"}},[v._v("#")]),v._v(" SSL 握手过程")]),v._v(" "),t("p",[v._v("简单地来讲:")]),v._v(" "),t("ol",[t("li",[v._v("客户端和服务端建立 SSL 握手，客户端通过 CA 证书来确认服务端的身份；")]),v._v(" "),t("li",[v._v("互相传递三个随机数，之后通过这随机数来生成一个密钥；")]),v._v(" "),t("li",[v._v("互相确认密钥，然后握手结束；")]),v._v(" "),t("li",[v._v("数据通讯开始，都使用同一个对话密钥来加解密；")])])])}),[],!1,null,null,null);_.default=l.exports}}]);
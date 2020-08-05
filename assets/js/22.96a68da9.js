(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{380:function(t,e,s){"use strict";s.r(e);var a=s(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mux-多路复用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mux-多路复用"}},[t._v("#")]),t._v(" Mux 多路复用")]),t._v(" "),s("p",[t._v("Mux 功能是在一条 TCP 连接上分发多个 TCP 连接的数据。实现细节详见 "),s("RouterLink",{attrs:{to:"/developer/protocols/muxcool.html"}},[t._v("Mux.Cool")]),t._v("。Mux 是为了减少 TCP 的握手延迟而设计，而非提高连接的吞吐量。使用 Mux 看视频、下载或者测速通常都有反效果。Mux 只需要在客户端启用，服务器端自动适配。")],1),t._v(" "),s("h2",{attrs:{id:"muxobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#muxobject"}},[t._v("#")]),t._v(" MuxObject")]),t._v(" "),s("p",[s("code",[t._v("MuxObject")]),t._v(" 对应 "),s("code",[t._v("OutboundObject")]),t._v(" 中的 "),s("code",[t._v("mux")]),t._v(" 项。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"concurrency"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("enabled")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("是否启用 Mux 转发请求")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("concurrency")]),t._v(": number")])]),t._v(" "),s("p",[t._v("最大并发连接数。最小值 "),s("code",[t._v("1")]),t._v("，最大值 "),s("code",[t._v("1024")]),t._v("，缺省默认值 "),s("code",[t._v("8")]),t._v("。")]),t._v(" "),s("p",[t._v("特殊值 "),s("code",[t._v("-1")]),t._v("，不加载 mux 模块。(4.22.0+)")]),t._v(" "),s("p",[t._v("这个数值表示了一个 TCP 连接上最多承载的 Mux 连接数量。当客户端发出了 8 个 TCP 请求，而 "),s("code",[t._v("concurrency=8")]),t._v(" 时，V2Ray 只会发出一条实际的 TCP 连接，客户端的 8 个请求全部由这个 TCP 连接传输。")])])}),[],!1,null,null,null);e.default=o.exports}}]);
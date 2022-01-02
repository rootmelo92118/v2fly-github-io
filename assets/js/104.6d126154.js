(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{490:function(t,s,e){"use strict";e.r(s);var a=e(11),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"inbounds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inbounds"}},[t._v("#")]),t._v(" Inbounds")]),t._v(" "),e("p",[t._v("inbound")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[e("code",[t._v("protocol")]),t._v(": name of "),e("code",[t._v("[inbound]")])])]),t._v(" "),e("p",[t._v("入站协议名称。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("settings")]),t._v(": settings of "),e("code",[t._v("[inbound]")])])]),t._v(" "),e("p",[t._v("入站协议设置。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("port")]),t._v(": string")])]),t._v(" "),e("p",[t._v("接受的格式如下:")]),t._v(" "),e("ul",[e("li",[t._v("整型数值：实际的端口号。")]),t._v(" "),e("li",[t._v("字符串：可以是一个数值类型的字符串，如 "),e("code",[t._v('"1234"')]),t._v("；或者一个数值范围，如 "),e("code",[t._v('"5-10"')]),t._v(" 表示端口 5 到端口 10，这 6 个端口。")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("listen")]),t._v(": string")])]),t._v(" "),e("p",[t._v("监听地址，只允许 IP 地址，默认值为 "),e("code",[t._v('"0.0.0.0"')]),t._v("，表示接收所有网卡上的连接。除此之外，必须指定一个现有网卡的地址。")]),t._v(" "),e("p",[t._v("v4.32.0+，支持填写 Unix domain socket，格式为绝对路径，形如 "),e("code",[t._v('"/dev/shm/domain.socket"')]),t._v("，可在开头加 "),e("code",[t._v('"@"')]),t._v(" 代表 "),e("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man7/unix.7.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("abstract"),e("OutboundLink")],1),t._v("，"),e("code",[t._v('"@@"')]),t._v(" 则代表带 padding 的 abstract。")]),t._v(" "),e("p",[t._v("填写 Unix domain socket 时，"),e("code",[t._v("port")]),t._v(" 将被忽略，协议暂时可选 VLESS、VMess、Trojan，传输方式可选 TCP、WebSocket、HTTP/2。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),e("p",[t._v("此入站连接的标识，用于在其它的配置中定位此连接。当其不为空时，其值必须在所有 "),e("code",[t._v("tag")]),t._v(" 中唯一。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("sniffing")]),t._v(": "),e("a",{attrs:{href:"#SniffingObject"}},[t._v("SniffingObject")])])]),t._v(" "),e("p",[t._v("入站连接的流量探测设置。流量探测允许路由根据连接的内容和元数据转发连接。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("streamSettings")]),t._v(": "),e("RouterLink",{attrs:{to:"/v5/config/stream.html"}},[t._v("StreamObject")])],1)]),t._v(" "),e("p",[t._v("底层传输配置。")]),t._v(" "),e("h2",{attrs:{id:"支持的代理协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的代理协议"}},[t._v("#")]),t._v(" 支持的代理协议")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/socks.html"}},[t._v("SOCKS")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/vmess.html"}},[t._v("VMess")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/shadowsocks.html"}},[t._v("Shadowsocks")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/http.html"}},[t._v("HTTP")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/dokodemo.html"}},[t._v("Dokodemo")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/torjan.html"}},[t._v("Torjan")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/v5/config/proxy/vless.html"}},[t._v("VLESS")])],1)]),t._v(" "),e("h2",{attrs:{id:"sniffingobject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sniffingobject"}},[t._v("#")]),t._v(" SniffingObject")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("enabled")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("是否开启流量探测。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("destOverride")]),t._v(': ["http" | "tls" | "quic" | "fakedns" | "fakedns+others"]')])]),t._v(" "),e("p",[t._v("当流量为指定类型时，按其中包括的目标地址重置当前连接的目标。")]),t._v(" "),e("p",[e("code",[t._v("fakedns+others")]),t._v(" 选项会优先进行 FakeDNS 虚拟 DNS 服务器匹配。如果 IP 地址处于虚拟 DNS 服务器的 IP 地址区间内，但是没有找到相应的域名记录时，使用 "),e("code",[t._v("http")]),t._v("、"),e("code",[t._v("tls")]),t._v(" 的匹配结果。此选项仅在 "),e("code",[t._v("metadataOnly")]),t._v(" 为 "),e("code",[t._v("false")]),t._v(" 时有效。")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("metadataOnly")]),t._v(": true | false")])]),t._v(" "),e("p",[t._v("是否仅使用元数据推断目标地址而不截取流量内容。只有元数据流量目标侦测模块会被激活。")]),t._v(" "),e("p",[t._v("如果关闭仅使用元数据推断目标地址，客户端必须先发送数据，代理服务器才会实际建立连接。此行为与需要服务器首先发起第一个消息的协议如 SMTP 协议不兼容。")])])}),[],!1,null,null,null);s.default=o.exports}}]);
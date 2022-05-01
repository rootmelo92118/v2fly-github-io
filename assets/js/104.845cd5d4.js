(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{306:function(o,e,v){"use strict";v.r(e);var _=v(0),t=Object(_.a)({},(function(){var o=this,e=o.$createElement,v=o._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[v("h1",{attrs:{id:"geo"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#geo"}},[o._v("#")]),o._v(" Geo")]),o._v(" "),v("h2",{attrs:{id:"geoip"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#geoip"}},[o._v("#")]),o._v(" GeoIP")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("cidr")]),o._v(" : "),v("a",{attrs:{href:"#CIDRObject"}},[o._v("CIDRObject")])])]),o._v(" "),v("p",[o._v("一个数组，数组中每一项是一个 "),v("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E6%97%A0%E7%B1%BB%E5%88%AB%E5%9F%9F%E9%97%B4%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[o._v("CIDR"),v("OutboundLink")],1),o._v(" 地址块")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("inverseMatch")]),o._v(" : true | false")])]),o._v(" "),v("p",[o._v("反向匹配，当此项为 "),v("code",[o._v("true")]),o._v(" 时，如果匹配则返回 "),v("code",[o._v("false")]),o._v("，否则返回 "),v("code",[o._v("true")]),o._v("。")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("code")]),o._v(": string")])]),o._v(" "),v("p",[o._v("GeoIP 的双字符"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%8B%E5%AE%B6%E5%9C%B0%E5%8D%80%E4%BB%A3%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[o._v("国家或地区代码"),v("OutboundLink")],1),o._v("，支持所有可以上网的国家和地区。")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("filePath")]),o._v(": string")])]),o._v(" "),v("p",[o._v("GeoIP 文件路径。")]),o._v(" "),v("h3",{attrs:{id:"cidrobject"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cidrobject"}},[o._v("#")]),o._v(" CIDRObject")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("ipAddr")]),o._v(": string")])]),o._v(" "),v("p",[o._v("IP 地址。")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("prefix")]),o._v(": number")])]),o._v(" "),v("p",[o._v("CIDR 地址前缀。")]),o._v(" "),v("h2",{attrs:{id:"geodomain"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#geodomain"}},[o._v("#")]),o._v(" GeoDomain")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("domain")]),o._v(" : "),v("a",{attrs:{href:"#DomainObject"}},[o._v("DomainObject")])])]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("code")]),o._v(": string")])]),o._v(" "),v("p",[o._v("GeoDomain 的双字符"),v("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%9C%8B%E5%AE%B6%E5%9C%B0%E5%8D%80%E4%BB%A3%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[o._v("国家或地区代码"),v("OutboundLink")],1),o._v("，支持所有可以上网的国家和地区。")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("filePath")]),o._v(": string")])]),o._v(" "),v("p",[o._v("GeoDomain 文件路径。")]),o._v(" "),v("h3",{attrs:{id:"domainobject"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#domainobject"}},[o._v("#")]),o._v(" DomainObject")]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("type")]),o._v(' : "Plain" | "Regex" | "RootDomain" | "Full"')])]),o._v(" "),v("p",[o._v("域名匹配模式，可选值为：")]),o._v(" "),v("ul",[v("li",[v("strong",[o._v("Plain")]),o._v("：纯字符串匹配模式，当匹配目标域名中任意部分时，该规则生效。比如 "),v("code",[o._v("sina.com")]),o._v(" 可以匹配 "),v("code",[o._v("sina.com")]),o._v("、"),v("code",[o._v("sina.com.cn")]),o._v("、"),v("code",[o._v("sina.company")]),o._v(" 和 "),v("code",[o._v("www.sina.com")]),o._v("，但不匹配 "),v("code",[o._v("sina.cn")]),o._v("。")]),o._v(" "),v("li",[v("strong",[o._v("Regex")]),o._v("：正则表达式匹配模式，当正则表达式匹配目标域名时，该规则生效。例如 "),v("code",[o._v("\\.goo.*\\.com$")]),o._v(" 匹配 "),v("code",[o._v("www.google.com")]),o._v("、"),v("code",[o._v("fonts.googleapis.com")]),o._v("，但不匹配 "),v("code",[o._v("google.com")]),o._v("。")]),o._v(" "),v("li",[v("strong",[o._v("RootDomain")]),o._v("：根域名匹配模式，当域名是目标域名或其子域名时，该规则生效。例如 "),v("code",[o._v("v2ray.com")]),o._v(" 匹配 "),v("code",[o._v("www.v2ray.com")]),o._v("、"),v("code",[o._v("v2ray.com")]),o._v("，但不匹配 "),v("code",[o._v("xv2ray.com")]),o._v("。")]),o._v(" "),v("li",[v("strong",[o._v("Full")]),o._v("：完整匹配模式，当域名完整匹配目标域名时，该规则生效。例如 "),v("code",[o._v("v2ray.com")]),o._v(" 匹配 "),v("code",[o._v("v2ray.com")]),o._v(" 但不匹配 "),v("code",[o._v("www.v2ray.com")]),o._v("。")])]),o._v(" "),v("blockquote",[v("p",[v("code",[o._v("value")]),o._v(": string")])]),o._v(" "),v("p",[o._v("匹配域名的值。")])])}),[],!1,null,null,null);e.default=t.exports}}]);
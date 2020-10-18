(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{440:function(a,s,e){"use strict";e.r(s);var t=e(11),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"the-first-step-learn-to-compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-first-step-learn-to-compile"}},[a._v("#")]),a._v(" The first step: learn to compile")]),a._v(" "),e("h2",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),e("p",[a._v("If you are using Windows, just refer to this article: "),e("a",{attrs:{href:"https://github.com/v2ray/discussion/issues/756",target:"_blank",rel:"noopener noreferrer"}},[a._v("[Tutorial] Detailed methods for manual compilation and cross-compilation of V2Ray under Windows"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"pre-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-work"}},[a._v("#")]),a._v(" Pre-work")]),a._v(" "),e("p",[a._v("V2Ray uses "),e("a",{attrs:{href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Golang"),e("OutboundLink")],1),a._v(" as the main programming language. "),e("a",{attrs:{href:"https://bazel.build/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Bazel"),e("OutboundLink")],1),a._v(" is used as the build tool in the team release process. It is recommended to use macOS or Linux for development. A small amount of scripts may not run properly on Windows.")]),a._v(" "),e("ul",[e("li",[a._v("Install Golang: "),e("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("golang.org/doc/install"),e("OutboundLink")],1)]),a._v(" "),e("li",[a._v("Install Bazel: "),e("a",{attrs:{href:"https://docs.bazel.build/versions/master/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("docs.bazel.build/install"),e("OutboundLink")],1),a._v(" (No need for manual/script compilation)")])]),a._v(" "),e("h2",{attrs:{id:"pull-v2ray-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pull-v2ray-source-code"}},[a._v("#")]),a._v(" Pull V2Ray source code")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("go get -u -v v2ray.com/core/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),e("p",[a._v("Note that this command cannot be completed normally if Google’s network environment cannot be accessed normally. In case of situation, you need to configure a local HTTP proxy server first, and configure local environment variables, such as")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("http_proxy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:1080\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("https_proxy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://localhost:1080\n")])])]),e("p",[a._v("go will use the local HTTP proxy on port 1080 to pull the source code.")]),a._v(" "),e("h2",{attrs:{id:"manual-construction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manual-construction"}},[a._v("#")]),a._v(" Manual construction")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/src/v2ray.com/core/main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ray -ldflags "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w"')]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/src/v2ray.com/core/infra/control/main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CGO_ENABLED")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" go build -o "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$HOME")]),a._v("/v2ctl -tags confonly -ldflags "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-s -w"')]),a._v("\n")])])]),e("p",[a._v("The above command generates the newly-built "),e("code",[a._v("v2ray")]),a._v(" and "),e("code",[a._v("v2ctl")]),a._v(" executable files in the current user's "),e("code",[a._v("$HOME")]),a._v(" directory, and it can be used normally.")]),a._v(" "),e("p",[a._v("The process of building other CPU architectures and other systems (Windows/macOS) belongs to the cross-compilation process of golang. It mainly controls the two variables of "),e("code",[a._v("GOOS")]),a._v(" / "),e("code",[a._v("GOARCH")]),a._v(". Please refer to the relevant golang documents, and I will not repeat them here.")]),a._v(" "),e("h2",{attrs:{id:"script-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#script-build"}},[a._v("#")]),a._v(" Script build")]),a._v(" "),e("p",[a._v("The above manual construction is only the v2ray executable program itself, the distribution package zip also contains other files such as the address library. The release package can be easily produced by using the packaging script.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://raw.githubusercontent.com/v2ray/v2ray-core/master/release/user-package.sh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("755")]),a._v(" user-package.sh\n./user-package.sh\n")])])]),e("p",[a._v("Execute the above script directly to generate a file similar to "),e("code",[a._v("v2ray-custom-linux-amd64-20190710-000000.zip")]),a._v(" in the current directory, which is the release package.")]),a._v(" "),e("p",[a._v("You can use some personalized parameters to customize the release package:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("windows")]),a._v(" build a release package for the Windows version")]),a._v(" "),e("li",[e("code",[a._v("darwin")]),a._v(" build the release package of darwin (macOS) version")]),a._v(" "),e("li",[e("code",[a._v("tgz")]),a._v(" is packaged as "),e("code",[a._v("tar.gz")])]),a._v(" "),e("li",[e("code",[a._v("386")]),a._v(" is built as a 32-bit program")]),a._v(" "),e("li",[e("code",[a._v("arm")]),a._v(" builds release for ARM architecture CPU，arm arm64")]),a._v(" "),e("li",[e("code",[a._v("mips")]),a._v(" Same as above, please refer to the cross-compilation document of golang")]),a._v(" "),e("li",[e("code",[a._v("nodat")]),a._v(" does not include domain name/IP database "),e("code",[a._v("geoip.dat")]),a._v(" and "),e("code",[a._v("geosite.dat")]),a._v(", which can reduce the size of the release package")]),a._v(" "),e("li",[e("code",[a._v("noconf")]),a._v(" does not contain example json, systemd/systemv and other configuration files")]),a._v(" "),e("li",[e("code",[a._v("nosource")]),a._v(" Don't execute "),e("code",[a._v("go get ...")]),a._v(" to avoid overwriting the v2ray source code that has been pulled locally")])]),a._v(" "),e("p",[a._v("The above parameters have no order requirements, only need to be passed to the script as needed. Take building a distribution package suitable for Windows 32-bit without address library and sample configuration as an example:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./user-package.sh windows "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("386")]),a._v(" nodat noconf\n")])])]),e("p",[a._v("For v2ray compiled by the script, its startup information will become the time when the user was compiled to distinguish:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("V2Ray "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.20")]),a._v(".0 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20190710")]),a._v("-010000\nA unified platform "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" anti-censorship.\n")])])]),e("p",[a._v("Users can also modify the information in the script and customize their own version.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CODENAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BUILDNAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NOW")]),a._v("\n")])])]),e("h2",{attrs:{id:"automatic-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatic-build"}},[a._v("#")]),a._v(" Automatic build")]),a._v(" "),e("p",[a._v("The bazel build tool is mainly used by the release team.")]),a._v(" "),e("p",[a._v("If you only need to build an installation package for a specific platform, such as Linux / AMD64:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/src/v2ray.com/core\nbazel build --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SPWD"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(" --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOPATH"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOCACHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOCACHE"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --spawn_strategy "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" //release: v2ray_linux_amd64_package\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Output: bazel-bin/release/v2ray-linux-64.zip")]),a._v("\n")])])]),e("p",[a._v("Build all installation packages:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/src/v2ray.com/core\nbazel build --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v(" --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("SPWD"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PWD")]),a._v(" --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOPATH"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOPATH"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --action_env"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GOCACHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("go "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("env")]),a._v(" GOCACHE"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" --spawn_strategy "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("local")]),a._v(" //release: all\n")])])]),e("h2",{attrs:{id:"install-the-completed-installation-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-the-completed-installation-package"}},[a._v("#")]),a._v(" Install the completed installation package")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/v2ray.com/core/release/install-release.sh --local "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/zip/file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);
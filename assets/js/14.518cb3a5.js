(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{404:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("之前的部落格是用 Hexo 建置，呈現的方式個人覺得不太適合拿來當筆記，剛好朋友推薦下就用 VuePress 來客製化搭建筆記部落格，自己剛好也在學習 Vue 的框架，多少懂一些架構，但其實就算你沒學過，跟著官方的介紹也很清楚如何操作，基本上一步驟一步驟來也可以建置你喜歡的部落格排版，但我比較懶直接抓別人做好的主題（這篇比較像是把我建置過程以及踩過的雷記錄下來），那就不贅述直接開始！")]),t._v(" "),a("h2",{attrs:{id:"vuepress-blog-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-blog-theme"}},[t._v("#")]),t._v(" vuepress-blog-theme")]),t._v(" "),a("p",[t._v("這邊是直接抓別人寫好的部落格樣式，設定的話他"),a("a",{attrs:{href:"https://billyyyyy3320.com/zh/2020/01/25/intro-to-vuepress-blog-theme-and-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("這篇"),a("OutboundLink")],1),t._v("都有介紹如何客製化，記得先全局安裝 VuePress，從 GitHub git clone 下來後"),a("strong",[t._v("要注意的是裡面有個 "),a("code",[t._v("package.json")]),t._v("，是我們用來在本地端執行的語法，因為每個主題使用的執行指令可能不一樣，如果照著官網操作的話，他的執行指令是 "),a("code",[t._v("vuepress dev docs")]),t._v("，這裡可能要注意一下。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress dev blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress build blog"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("下指令在本地跑起來後是長這樣，網址為通常為 http://localhost:8080\n（我有設定網址名稱，所以是有加上 Repo 的網址）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/TYjjC54.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"推到-github-pages-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推到-github-pages-上"}},[t._v("#")]),t._v(" 推到 GitHub Pages 上")]),t._v(" "),a("p",[t._v("可以按照官方的資料夾目錄結構去配置\n"),a("img",{attrs:{src:"https://i.imgur.com/zMj3KKv.png",alt:""}})]),t._v(" "),a("p",[t._v("等到樣式都設定好之後將整包檔案 build 起來，會生成出一個"),a("code",[t._v(".vuepress")]),t._v("的資料夾，裡面的 dist 是你寫好的筆記、樣式等等打包後的 html 檔案，我們就可以把這個推上你開的 Repo 上，製作 GitHub Pages。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/h3gOAsu.png",alt:""}})]),t._v(" "),a("p",[t._v("但如果每次更改都要這樣重複動作太麻煩了，所以當你建置的時候這邊會有一個 deploy.sh 檔案，裡面有幫你設定好一個指令就可以推上去的動作")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v("!/usr/bin/env sh")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 確保腳本拋出的錯誤")]),t._v("\nset -e\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 生成生成靜態文件")]),t._v("\nvuepress build blog\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 進入生成的文件夾")]),t._v("\ncd blog/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 如果是發佈到自訂義名域")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" echo 'www.example.com' > CNAME")]),t._v("\n\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 如果發佈到 https://<USERNAME>.github.io")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 如果發佈到 https://<USERNAME>.github.io/<REPO>")]),t._v("\ngit push -f git@github.com:chenxuanzzy/technology-note.git master:gh-pages\n\ncd -\n")])])]),a("p",[a("strong",[t._v("記得是放在 .vuepress 外面，因為是要打包整個筆記，也別忘了 cd 資料夾的路徑也要更改哦，因為每個人的資料夾名稱都不一樣")]),t._v("不然會出現下面這種報錯\n"),a("img",{attrs:{src:"https://i.imgur.com/o3yrJi8.jpg",alt:""}}),t._v("\n（這個就不當作雷了，雖然我也因為這個問題花了一些時間查看，其實就是自己不夠細心）")]),t._v(" "),a("h2",{attrs:{id:"雷1-是哪個分支要成為-github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雷1-是哪個分支要成為-github-pages"}},[t._v("#")]),t._v(" 雷① - 是哪個分支要成為 GitHub Pages")]),t._v(" "),a("p",[t._v("我一開始就直接推上 main，再放到 GitHub Pages 時網頁一直沒辦法顯示，因為 main 是我整包的檔案，而 GitHub Pages 只會讀取生成後的檔案，這個錯誤讓我一直卡關，後來我推到 gh-pagges 的分支上（一開始在上面的 deploy.sh 設定 push 到 repo 的話要設定好是哪個分支上)，再設定分支為網頁就可以了！( main 目前就當作我備份檔案用)")]),t._v(" "),a("p",[t._v("可以點選左上看你目前在哪個分支下\n"),a("img",{attrs:{src:"https://i.imgur.com/rvAmEfN.png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("進到 Setting 下，更改打包生成的那個分支（也就是 gh-pages）就可以成功顯示了")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/Ez9fsjM.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"雷2-切換頁面是依照資料夾結構"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雷2-切換頁面是依照資料夾結構"}},[t._v("#")]),t._v(" 雷② - 切換頁面是依照資料夾結構")]),t._v(" "),a("p",[t._v("處理好上面的問題接下來就是優化你的部落格，一開始設定都爛爛的沒關係，基本的東西有了之後，我這邊又發現一個問題，網頁的右上從左至右是文章、標籤、關於我、GitHub link、這些在"),a("code",[t._v("config.js")]),t._v("裡都可以設定，而文章是依照你的 _posts 去顯示，標籤則是你文章底下的格式去顯示，唯獨"),a("strong",[t._v("關於我")]),t._v("怎麼樣都顯示不出來（沒設定的頁面只會顯示 Error 404），後來看官網才發現是要另外設定當頁的資料夾")]),t._v(" "),a("p",[t._v("層級會是這樣")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/uwumGLl.png",alt:""}})]),t._v(" "),a("p",[t._v("這些問題其實都在官方找得到，我卻卡關在看官方文件不夠細心，下次真的要多注意一點QQ\n（目前部落格先長這樣，慢慢再調整成我喜歡的樣子）")])])}),[],!1,null,null,null);s.default=n.exports}}]);
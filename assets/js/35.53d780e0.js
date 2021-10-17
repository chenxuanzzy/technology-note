(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{427:function(t,a,s){"use strict";s.r(a);var e=s(11),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("紀錄一下常用到的幾個指令（這樣我就不用一直搜尋==）")]),t._v(" "),s("h2",{attrs:{id:"刪除-localhost-port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刪除-localhost-port"}},[t._v("#")]),t._v(" 刪除 localhost port")]),t._v(" "),s("p",[t._v("開啟本地測試的話執行兩個相同網頁， port 會衝突，刪除 port 再重新執行即可")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kill $(lsof -t -i : port)         //port 放 localhost 的數字\n")])])]),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("How do I kill the process currently using a port on localhost in Windows?"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"mysql-上的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-上的操作"}},[t._v("#")]),t._v(" Mysql 上的操作")]),t._v(" "),s("p",[t._v("進入 MySql 連線")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ssh mysql@10.10.10.10\n")])])]),s("h3",{attrs:{id:"建立檔案、單純看檔案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立檔案、單純看檔案"}},[t._v("#")]),t._v(" 建立檔案、單純看檔案")]),t._v(" "),s("p",[t._v("進入機器上後建立檔案")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("touch fileName.html\n")])])]),s("p",[t._v("看檔案的話是將 touch 改成 cat")]),t._v(" "),s("h3",{attrs:{id:"vm-上的寫入跟儲存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-上的寫入跟儲存"}},[t._v("#")]),t._v(" VM 上的寫入跟儲存")]),t._v(" "),s("p",[t._v("有時候我們會直接在線上機器修改檔案或是看檔案，此時會下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vi fileName\n")])])]),s("p",[t._v("進入後按 i 即是　insert 可以對檔案做修改，修改好後按 ESC 確認無誤後儲存離開的語法為 "),s("strong",[t._v(":wq")]),t._v("、"),s("strong",[t._v(":wq!")]),t._v(" 驚嘆號為強制離開，如果在線上修改太多次他會認為你修改太頻繁（安全性問題）而需要加驚嘆號，單純離開就是 "),s("strong",[t._v(":q")]),t._v("、"),s("strong",[t._v(":q")])]),t._v(" "),s("h3",{attrs:{id:"刪除機器上的檔案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刪除機器上的檔案"}},[t._v("#")]),t._v(" 刪除機器上的檔案")]),t._v(" "),s("p",[t._v("刪除的話沒有資源回收桶這種東西，請確認好檔案在刪除")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rm -r fileName\n")])])]),s("h3",{attrs:{id:"複製檔案至跳板機"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#複製檔案至跳板機"}},[t._v("#")]),t._v(" 複製檔案至跳板機")]),t._v(" "),s("p",[t._v("先記住要複製的檔案路徑，再到跳板機上輸入以下，"),s("strong",[t._v("記得最後要加上一個點，那代表你的位置")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("scp mysql@10.10.10.10:/var/www/html/fileName.html .\n")])])]),s("h3",{attrs:{id:"將挑板機檔案丟至機器上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#將挑板機檔案丟至機器上"}},[t._v("#")]),t._v(" 將挑板機檔案丟至機器上")]),t._v(" "),s("p",[t._v("與上面動作相反")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("scp fileName.html mysql@10.10.10.10:/var/www/html\n")])])]),s("p",[s("em",[t._v("最後更新 2021/08/23")])])])}),[],!1,null,null,null);a.default=r.exports}}]);
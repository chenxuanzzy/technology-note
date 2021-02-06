---
title: Vue - The Complete Guide Course1 準備開始
date: 2021-01-2
tags: 
  - Vue
  - Udemy
author: Chen Xuan  
---
這是 Udmey 線上課程 ( 全名為 [Vue - The Complete Guide w/ Router, Vuex, Composition API](https://www.udemy.com/course/vuejs-2-the-complete-guide/) ) ，講師為 Max，總共有 48 小時的影片教學，打算慢慢寫成筆記產出。（本課程仍舊使用 Vue.js 2 的版本）

![](https://i.imgur.com/wAtMYSC.png)

## 簡單介紹 Vue.js

是由 [Evan You](https://github.com/yyx990803) 所開發且建立在 JavaScript 上的一種 Framework，它既可以雙向綁定以及使用 SPA (Single-Page-Application) 等等更簡便的方式來撰寫網頁。

## 兩種主要的方式使用 Vue

### 1. 控制部分網頁
Vue 可以控制部分網頁或整個網頁，有點像是 Widget(軟體部件) 的方式渲染或是與後端串接
### 2. 控制全部的網頁
最著名的 Single-Page-Application(SPA) 但只服務在 Html 的頁面上。

![](https://i.imgur.com/5t4dQn5.png)

## 安裝教學

連接[官網](https://vuejs.org/v2/guide/installation.html)直接安裝或是使用 CDN

```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
```

## 小試身手

因為本課程都是使用 Vue.js 2 的方法，如果直接用 Vue Cli 可能會有所差異（這邊要注意一下）
小試身手可以直接觀看我在 [codepen](https://codepen.io/chenxuanzzy/pen/RwRqbbQ) 上的練習

```js
var app = new Vue({
  el:"#app",
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    cleanGoal(){
      this.goals = '';
    }
  }
})
```

## 設定環境

這邊推薦幾個我自己有用以及教學推薦的插件

- Visual Studio Code 插件
  - Prettier - Code formatter
  - Live Server
  - Sass
  - Vetur
  - ESLint
  - ident-rainbow
- Web
  - Vue.js devtools

## 充分利用這門課(Get The Most Out Of This Course)

### 看影片
照著你自己的步調學習
### 寫程式
暫停影片，試著自己學習寫程式
### 重複重點
重複觀看影片直到釐清觀念
### Google、Stackoverflow 是你的好朋友
善用搜尋，很多論壇都是你的好朋友
### 問與答
不懂的就問，也試著回答問題
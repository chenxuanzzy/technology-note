---
title: Vue - The Complete Guide Course2 Dom 與 Vue 的交互作用
date: 2021-01-3
tags: 
  - Vue
  - Udemy
author: Chen Xuan  
---

上一章節我們簡單介紹安裝跟，本章節會直接進行 Vue 的應用與練習。
## Vue 實例與用法
如果你已經閱讀過官方文件也熟悉的話，可以直接用 Vue Cli 進行，但官方有提醒說初學最好使用 CDN 載入的方式會比較好。

載入的寫法有以下幾種：

一、mount 掛載（本課程所使用的方法）

這邊要特別注意的是，你所綁定的 id ，其內所有的元件都是同時被綁定的。
```html
<section id="user-goal">
  <h2>My Course Goal</h2>
</section>
```
```js
const app = Vue.createdApp({
  data(){
    return{
      ...
    }
  }
});
app.mount('#user-goal) 
```
如果需要 *延遲掛載* 的話可以用手動調用的 vm.$mount() 的方法。

二、綁定 el 掛載
```js
var app = new Vue({
  el:#app,
  data(){
    return{
      ...
    }
  }
})
```
我在練習時都是使用方法二，用自己習慣的即可。
### 資料綁定
Vue 最大的特色就是 MVVM 的架構，而資料綁定是在 Vue 中最齊為重要的一個部分，以課程例子來說。
```html
      <div id="user-goal">
        <h2>My Course Goal</h2>
      </div>
```
利用雙括號的方式將資料的 data 傳入 html 中，當 data 中的 string 改變時顯示的畫面也會跟著改變。
```js
var app = new Vue({
  el:"#user-goal",
  data(){
    return{
      courseGoal:'Finish the course and learn Vue!'
    }
  }
})
```
### v-bind
在這邊新多加入一個連結標籤，並且使用 vue 的功能 v-bind 讓它與資料同時做連結。
*v-bind 也可以省略只簡寫兩個冒號*
```html
      <div id="user-goal">
        <h2>My Course Goal</h2>
        <p>Learn more <a v-bind:herf="vueLink">about Vue</a></p>
      </div>
```
```js
var app = new Vue({
  el:"#user-goal",
  data(){
    return{
      courseGoal:'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/v2/guide/installation.html',
    }
  }
})
```

![](https://i.imgur.com/KAPwEIy.png)

### methods
methods 在 Vue 中是蠻常用到的一個方法，基本上都放 function。像是操作物件、按鈕事件觸發都是在 methods 運行。在 html 的雙括號內可以進行簡單的運算。(但通常我們很少會這麼做，因為這樣比較沒有執行效率與閱讀性，這部分我們後面會講到)
```html
      <div id="user-goal">
        <h2>My Course Goal</h2>
        <p>{{ outputGoal() }}</p>
        <p>Learn more <a v-bind:herf="vueLink">about Vue</a></p>
      </div>
```
```js
var app = new Vue({
  el:"#user-goal",
  data(){
    return{
      courseGoal:'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/v2/guide/installation.html',
    }
  },
  methods:{
    outputGoal
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
      return 'Learn Vue!'
    }else{
      return 'Master Vue!'
    }
    //如果每次重新整理的話亂數的數值有大於 0.5 
    就顯示*Learn Vue!*沒有的話則顯示*Master Vue*。
  }
})
```
### Data 在 methods 的操作
在 data 資料內新增兩個 string，重整這個 function 內放入剛剛新增的 data。
```js
var app = new Vue({
  el:"#user-goal",
  data(){
    return{
      courseGoalA:'Finish the course and learn Vue!',
      courseGoalB:'Master Vue and build amazing apps!'
      vueLink: 'https://vuejs.org/v2/guide/installation.html',
    }
  },
  methods:{
    outputGoal
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
      return this.courseGoalA //加入 this 指向我們 data 內的 courseGoalA
    }else{
      return this.courseGoalB
    }
  }
})
```
### v-html
說白話一點就是可以插入 html 結構，有點像是 JavaScript 的 innerHTML，同時也可以插入 function，不過要注意的是這種寫法安全性較低（只要開啟網頁上的 html 就可以看到）通常比較常使用在圖片```<img>```上。所以在 html 上你可以這樣寫 

```<p v-html="outputGoal()"></p>```

如果在 data 資料上加上

```<h2>'Master Vue and build amazing apps!'</h2>```，你會看到 h2 標籤也顯示在 html 上。

```html
      <div id="user-goal">
        <h2>My Course Goal</h2>
        <p v-html="outputGoal()"></p>
        <p>Learn more <a v-bind:herf="vueLink">about Vue</a></p>
      </div>
```
```js
var app = new Vue({
  el:"#user-goal",
  data(){
    return{
      courseGoalA:'Finish the course and learn Vue!',
      courseGoalB:'Master Vue and build amazing apps!'
      vueLink: 'https://vuejs.org/v2/guide/installation.html',
    }
  },
  methods:{
    outputGoal(){
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
      return this.courseGoalA //加入 this 指向我們 data 內的 courseGoalA
    }else{
      return this.courseGoalB
    }
    }
  }
})
```
附上本章節實作練習 [codepen](https://codepen.io/chenxuanzzy/pen/RwRqwyP)

### -----------Assignment - 1------------
[Assignment - 1](https://codepen.io/chenxuanzzy/pen/QWEJVNQ)

### Button 上的 v-on 
在上面我們學過 v-bind ，現在要學習其他綁定事件的方法，在 button 上綁定，當我點擊可以觸發事件為 **v-on:click**。*v-on:click 簡寫為 @click*
```html
<section id="events">
    <h2>Events Action</h2>
    <button @click="counter++">Add</button>
    <button @click="counter--">Reduce</button>
    <p>Result: {{ counter }}</p>
</section>
```
這邊就可以進行簡單的加減計算
```js
var app = new Vue({
  el:'#events',
  data(){
    return{
      counter: 0,
    }
  },
})
```
![](https://i.imgur.com/C1vZwzG.png)

不過通常我們不會在 html 上進行運算，所以這個時候可以把 function 寫在 @click 事件上，這樣既符合規範又安全。
```html
<section id="events">
    <h2>Events Action</h2>
    <button @click="add">Add</button>
    <button @click="reduce">Reduce</button>
    <p>Result: {{ counter }}</p>
</section>
```
```js
var app = new Vue({
  el:'#events',
  data(){
    return{
      counter: 0,
    }
  },
  methods: {
    add(){
      this.counter +=1
    },
    reduce(){
      this.counter -=1;
    },
  }
})
```
```@click="add"``` 和 ```@click="add()"```後面的括號只差在參數的傳入。

所以你也可以傳入參數的方法寫成這樣

```html
<button @click="add(10)">Add</button>
<button @click="reduce(5)">Reduce</button>
```

num 為你自定義的名稱，同時也是括號內傳入的參數

```js
methods: {
    add(num){
      this.counter += num
    },
    reduce(num){
      this.counter -=num;
    },
  }
```
### @input 綁定方法
接下來我們要加入綁定你輸入的名字，最好的做法是 @input ，就像上面 button 的方法一樣。
先在 data 加入 ```name:''```
```html
<input type="text" @input="setName">
<p>Your name is: {{ name }}</p>> //與 data 連動
```
**methods 裡放入的順序並不影響執行**
```js
methods: {
    setName(event){
      this.name = event.target.value;
    }
    add(num){
      this.counter += num
    },
    reduce(num){
      this.counter -=num;
    },
  }
```
這邊所使用到的 **e.target.value** 是自動指向被觸發的 DOM 意思就是會指向你輸入的東西傳入 data 的 name 裡面。

也可以傳入物件的方法，我在 input 預設我的姓氏，當我不管怎麼輸入就是加上 "Xuan"
**為什麼這邊要用 $event 來傳遞而不是 event 呢？**

[StackOverflow](https://stackoverflow.com/questions/40956671/passing-event-and-argument-to-v-on-in-vue-js)
>因為當要傳入 Object 時 Property 或 methods 中 event 是沒有被定義但是還是會被渲染，為了清楚了解物件是有被傳入的這時候就要加入 $event 來確保他有被定義在 Property 或 methods 之中。

而官網在 [*事件處理中的內連處理器中的方法*](https://cn.vuejs.org/v2/guide/events.html#%E5%86%85%E8%81%94%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95) 也有解釋

```html
<input type="text" @input="setName($event, 'Xuan')">
<p>Your name is: {{ name }}</p>>
```
```js
methods: {
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;
    }
    add(num){
      this.counter += num
    },
    reduce(num){
      this.counter -=num;
    },
  }
```
![](https://i.imgur.com/D4OJitY.png)

### 事件修飾符
在下方加入
```html
<form>
    <input type="text">
    <button>Sign up</button>
</form>
```
會注意到當我們點選 button 時畫面會默認重新整理（這是因為 form 裡的 button 所默認的關係），為了避免自動默認的情況，這時可以用 Vue 的[修飾符](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 。
不過，你當然也可以用 JS 的方法去寫
```html
<form @submit="submitForm">
    <input type="text">
    <button>Sign up</button>
</form>
```
```js
methods: {
    submitForm(event) {
        event.preventDefault();
        alert('submitted!');
    },
  }
```
用修飾符的方法則是在改成 ```@submit.prevent="submitForm"``` 即可
```html
<form @submit.prevent="submitForm">
    <input type="text">
    <button>Sign up</button>
</form>
```
```js
methods: {
    submitForm(event) {
        alert('submitted!');
    },
  }
```
同時也有很多不同的修飾符，例如我想在輸入名稱後按下 enter 才同步到 Your Name：此時可以加入```.enter```
```html
<input type="text" 
    @input="setName(event, 'Xuan')" 
    @keyup.enter="confiremedName">
```
```js
methods: {
    confiremedInput(){
      this.confiremedName = this.name;
    },
  }
```
### v-once
新增一個 Starting Counter，但我要區分一開始的初始值以及加減過後的值，這種時候就可以使用 v-once，意思就是說 counter 不管怎麼增加數值，這個 Starting Counter 會永遠保持 10。
```html
<p v-once>Starting Counter: {{ counter }}</p>
```

附上本章節實作練習 [CodePen](https://codepen.io/chenxuanzzy/pen/abZPZmq?editors=1010)

### -----------Assignment - 2------------
[Assignment - 2](https://codepen.io/chenxuanzzy/pen/PozXWbM?editors=1010)

### 兩種方法的綁定與應用 (資料綁定 + 事件綁定)
接續上面的實作練習，我們在 input 新增 value 並綁定它為 data 裡的 name ，再新增一個 Reset Input 的 Button 專門清除 name 的值
```html
<input type="text" 

    v-bind:value="name" 
    
    @input="setName($event, 'Xuan')" 
    @keyup.enter="confiremedInput">
    
<button @click="resetInput">Reset Input</button>
```
這時候可以把 setName() 裡的 lastName 直接砍掉，因為我們已經綁定 input 的 value 值為 data 裡面的 name 了，當我們輸入時就會自動加上 value 值。
```js
resetInput(){
    this.name = "";
}
```
另外最快的方法就是**使用 v-model**，這裡也同等於 v-bind:value
### Computed
再新增一個 input ，一個輸入姓，一個輸入名。在 data 上新增 ```lastName:''```同時綁定 input。上面我們有說到盡量不要在 html 內執行運算，既沒有閱讀性也不符合規範，那如果我們只是單純簡單的計算又不想*重新渲染*的話，這種時候就可以運用 Computed 屬性（用法跟 methods 也很像，這部分會在後面解釋）

當我們在 methods 裡放 function 的時候會在後面加上 () 是為了要讓參數傳入，可是在 coumputed 裡面是不用放， vue 會自己指向 computed 的 function
```html
<p>Your Name: {{ fullname }}</p>
<input value="reset" type="text" v-model="name">
<input value="reset" type="text" v-model="lastName">
<button @click="resetInput">Reset Input</button>
<p>Your Name: {{ fullName }}</p>
```
#### value = "reset" 是指說當我按下 reset 的時候，input 也會同時被清除。
```js
computed:{
    fullname(){
        if(this.name === '' || this.lastName === ''){
        return ''
      }else{
        return this.name + ' ' + this.lastName;
      }
    }
}
```
![](https://i.imgur.com/WpO1NSE.png)

### Watch
接下來要介紹第四個 Property ，watch 和 computed 跟功能也類似，確實也可以替換，但 watch 有監聽的概念，當條件寫在 watch 下時，它會監聽是否符合該條件再去做動作，不過也要注意使用的時機。
[官方的 watch 解釋](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8)
上小節的用法在 watch 下可以寫成監聽 data 下的資料是否有更動的方法
>watch 可以監聽兩個參數 (newValue, oldValue)
```js
watch:{
    name(value) {
      if(value ===''){ 
        this.fullName = '';
      }else {
        this.fullname = value + '' + this.lastName;
      }
    },
    lastName(value){
      if(value ===''){ 
        this.fullName = '';
      }else {
        this.fullname = value + '' + value;
      }
    }
}
```
不過假設我們有四個 input 的話，那是不是就要在 watch 下寫四次被監聽的方法？這樣相較寫在 computed 下會比較沒效率。

那什麼時機可以用呢？就如我所說的「監聽」的情況下就很適合，當我按下 Add 10 時， Result 超過 50 我就重 0 開始計算，這種時候就可以使用 watch
```js
watch:{
    counter(value){
      if(value > 50){
        const vm = this; 
        setTimeout(function(){ 
        //當超過 50 時後兩秒會重新回到 0
          vm.counter = 0; 
          //如果直接寫 this.counter 的話，this 會指向 setTimeout() 裡面 counter
          //可是裡面沒有 counter 這個 data ，就會報錯
          //所以我們才需要在外面先定義一個 vm = this。
        }, 2000);
      }
    }
```
[setTimeout MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)

附上本章節實作練習 [CodePen](https://codepen.io/chenxuanzzy/pen/BazvWLW?editors=1010)
### Methods vs Computed vs Watch 差異
1. Methods 可以**綁定事件（events）或是資料（data），每一次執行都會重新渲染你的組件**
2. Computed **只綁定資料（data）**，只**單一執行**你使用到的 function 且**不會重新渲染**
3. Watch 不會在組件中使用，而是用**監聽 data 的方式**（當然也可以監聽其他 function 或是 Http request 、timer 等），或想要更新任何非數據的東西

以上三種區分，我們在實作中最常使用到 Methods 跟 Computed，Watch 較少使用。

### -----------Assignment - 3------------
[Assignment - 3](https://codepen.io/chenxuanzzy/pen/VwjRmja)

### 動態 Styling 綁定
目前為主我們所學到的綁定基本上可以說是 Vue 的核心了，因為後面很多部分都是以「綁定」為基礎作為延伸，除了上面提到的事件（events）和資料（data）以外，還可以綁定**樣式**。

跟著課程例子，當我點選三個格子時會出現顏色，利用 Vue 的綁定樣式去操控的話可以這樣寫
![](https://i.imgur.com/RO1y99Y.png)
```html
<section id="styling">
    <div 
        class="demo" 
        :style="{'borderColor:boxASelected ? 'red' : '#ccc'}"
        @click="boxSelected('A')">
    <div class="demo" @click="boxSelected('B')">
    <div class="demo" @click="boxSelected('C')">
</section>
```
#### 要特別注意的是當綁定 :style 時，在 html 裡的寫法就會變得比較特別，原本 style="border-color" 就要改寫成駝峰式+雙大括號

```:style="{'boderColor:red'}" ```

#### if..else 簡寫 成 (條件) ? (結果) : (結果2) 同時也可以在 style 裡寫判斷 'borderColor:boxASelected ? 'red' : '#ccc' 同等於下面的寫法
```
if(borderCOlor == boxASelected){
    return 'red'
}else{
    return '#ccc'
}
```

```js
var styling = new Vue({
  el:"#styling", //記得要綁定 id="styling"
  data(){
    return{
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    }
  },
  methods:{
    boxSelected(box){
      if(box === 'A'){
        this.boxASelected = !this.boxASelected;
      }else if (box === 'B'){
        this.boxBSelected = !this.boxBSelected;
      }else if (box === 'C'){
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
})
```
### 動態 Class 綁定
把 red 寫在 css ，利用 class 去操控
```html
<div class="demo" :class="{ active: boxASelected }" @click="boxSelected('A')"></div>
<div class="demo" :class="{ active: boxBSelected }" @click="boxSelected('B')"></div>
<div class="demo" :class="{ active: boxCSelected }" @click="boxSelected('C')"></div>
```
```js
methods:{
    boxSelected(box){
      if(box === 'A'){
        this.boxASelected = !this.boxASelected;
      }else if (box === 'B'){
        this.boxBSelected = !this.boxBSelected;
      }else if (box === 'C'){
        this.boxCSelected = !this.boxCSelected;
      }
    }
  }
```
附上本章節實作練習 [CodePen](https://codepen.io/chenxuanzzy/pen/eYzXQBp)
### -----------Assignment - 4------------
[Assignment - 4](https://codepen.io/chenxuanzzy/details/yLJwVoG)
### 總結
1. DOM & Templates 渲染、操控、載入（mount）
2. 事件（events）和資料（data）的綁定、v-bind、@click
3. Methods、Computed、Watch 三大屬性與用法
4. Styling 和 Class 綁定操控樣式
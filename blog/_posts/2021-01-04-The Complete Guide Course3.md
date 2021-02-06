---
title: Vue - The Complete Guide Course3 條件式
date: 2021-01-4
tags: 
  - Vue
  - Udemy
author: Chen Xuan  
---
### v-if、v-else、v-else-if
這章節課程是利用 Vue 條件式做出一個 Course 列表
![](https://i.imgur.com/hCwgEau.png)

1. 一樣的動作先綁定 id
2. input 綁定 v-model 輸入的空字串 data，
3. 建立一個空 array
```html
<section id="user-goals">
      <h2>My course goals</h2>
      <input type="text" v-model="entteredGoalValue"/>
      //當 input 輸入值後會存到 enteredGoalValue
      <button @click="addGoal()">Add Goal</button>
      //點擊時將輸入的字串存到 goals 裡
      <p v-if="goals.length === 0">
      No goals have been added yet - please start adding some!
      </p>
      <ul v-else>
        <li>Goal</li>
      </ul>
</section>
```
**v-if 和 v-else** 是直接插入 html 裡，要注意一點是如 goals 不等於 0 時，No goals have ... 這行會消失，是在 html 裡整個 element 跟著消失（並不是單純被隱藏）
```js
var app = new Vue({
  el:"#user-goals",
  data(){
    return {
      enteredGoalValue:'',
      goals: [],
    }
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoalValue)
    }
  },
})
```
### v-show
v-show 是更簡便的方式，一樣的動作在 v-show 上可以寫成，當我們有多個 element 被某件事觸發的話，加上 v-show 比手動清除的動作還要更快更有效率。
```html
<section id="user-goals">
      <h2>My course goals</h2>
      <input type="text" v-model="entteredGoalValue"/>
      //當 input 輸入值後會存到 enteredGoalValue
      <button @click="addGoal()">Add Goal</button>
      //點擊時將輸入的字串存到 goals 裡
      <p v-show="goals.length === 0">
      No goals have been added yet - please start adding some!
      </p>
      <ul v-show="goals.legth > 0">
        <li>Goal</li>
      </ul>
</section>
```
### v-for
v-for 在 Vue 算是蠻特別的一個用法，規則為 **v-for="(自定義參數) in (要顯示的物件)"，{{ 自定義參數 }} 自動顯示** 
我們將輸入的字串顯示在 Goal 上可以這樣寫
```html
<section id="user-goals">
      <h2>My course goals</h2>
      <input type="text" v-model="enteredGoalValue"/>
      <button @click="addGoal()">Add Goal</button>
      <p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
      <ul v-else>
        <li v-for="goal in goals">{{ goal }}</li>
      </ul>
</section>
```
**{{ 參數 }}只有在 v-for 上的 element 才可以執行**  
當按下 Add Goal 時，html 會自動新增所輸入的字串在 Dom 上

![](https://i.imgur.com/I9bAhUF.png)

也可以在 v-for 上加 index、直接跑一個 Object 或是數字、顯示 key ...
```html
<ul v-else>
    <li v-for="(goal, index) in goals">{{ goal }}</li>
</ul>ㄖㄖ
<ul>
    <li v-for="(value, key) in { name: 'Max', age:'30' }">{{ key }} : {{ value }}</li>
</ul>
```
![](https://i.imgur.com/adJdYKB.png)

既然做了新增動作，現在做一個移除動作，當我點擊顯示就會被移除，可以在剛剛得 v-for element 上直接加上 ```@clilck="removeGoal"```
```html
<p v-if="goals.length === 0">No goals have been added yet - please start adding some!</p>
      <ul v-else>
        <li v-for="(goal,index) in goals" @click="removeGoal(index)">{{ goal }} - {{ index }}</li>
      </ul>
```
```js
removeGoal(idx){
      this.goals.splice(idx, 1);
}
```
[Splice MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### v-for :key
現在想要在輸入顯示的 li 上多新增一個 input，但當我只要點擊 input 就會被移除，這時就可以在這裡加入 ```@click.stop``` 的修飾符，意思是說當我點擊 input 它就會停止移除的動作。
可是這裡有個奇怪的 bug

![](https://i.imgur.com/pJLlGHM.png)
**當我在 hello world 下的 input 輸入*smart* 再刪除的話 smart 變成 good vue 的 input 值**
![](https://i.imgur.com/pj1yy6t.png)

這是因為 Vue 直覺得刪除 Dom 上且並沒有重新渲染，*刪除第一個就直接讓第二個成為第一個*，所以輸入的 smart 自然就會變成 good vue 下的 smart，為了確保我們是要跟 element 說是哪個 input 被數入，這時候就要加入 :key="goal" or :key="index"


>如果你有裝 ESLint 的話在使用 v-for 的情況下，如果沒有用 key 它會報錯。

### -----------Assignment - 5------------
[Assignment - 5](https://codepen.io/chenxuanzzy/pen/pobYGXB)

### 總結
1. v-if、v-else、v-else-if、v-show，來操控 element
2. v-for 結合物件、數值、陣列，動態渲染
3. v-for 可插入 key、value、index
4. :key 的綁定，確保每個 element 都有各自的 key 和值

附上本章節實作練習 [CodePen](https://codepen.io/chenxuanzzy/pen/PozLXPM?editors=1010)
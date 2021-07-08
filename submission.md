# Lab 3SA03 - React - Logic Game

## Code in App.js

> code เฉพาะบางส่วน เพื่อนำมาอธิบาย

```js
import React from "react";
import "./App.css";
import WordCard from "./WordCard";

const word = "deer";
...

function App() {
  return (
    <div>
      <h1>Logic Games</h1>
      <center class="button">Animals</center>
      <center>
        <p>Hint: เป็นสัตว์สี่เท้ามีเขาสองเขาแต่ปลายเขามีหกยอด</p>
        <WordCard value={word} />
      </center>
      ...

      <h2 class="h2">
        Create by Sikarin Samngamthong <br />
        ID: 6210110342 <br />
        Lab3SA03 Section 01
      </h2>
    </div>
  );
}

export default App;
```

- ในการเขียน React ทุกครั้งจะต้อง `import react` เสมอ โดยจะมีการ import ว่า

```js
import React from "react";
import "./App.css";
/*ในส่วนนี้จะเป็นการ import จาก App.css ซึ่งจะอยู่ในหัวข้อ Code in App.css*/
```

- ตัวแปรที่ใช้ในการสร้างคำคือ `const` ตัวอย่างเช่น

```js
const word = "deer";      ---(ex1)
```

ใน ex1 นี้คือจะเป็นการสร้างคำคำว่า `deer` โดยมีตัวแปรชื่อว่า `word`

- ในส่วนของ `function` นั้น จะเป็นรายละเอียดต่างๆที่ส่ง Output ให้ออกไปที่หน้าเว็บ
  - ในส่วน class ที่ชื่อว่า `button` นั้น จะเป็นการแยกหมวดหมู่ในการเล่นเกมส์ ว่าคำๆนั้นที่ผู่เล่นได้เล่นอยู่นั้นอยู่ในหมวดไหน ซึ่งเป็นลักษณะการใช้คำในการเล่นได้
    ![1](1.png)

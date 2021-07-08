# Lab 3SA03 - React - Logic Game

## Code in App.js

```js
import React from "react";
import "./App.css";
import WordCard from "./WordCard";

const word = "deer";
...
const room = "table";
...
const fruit = "orange";
...

function App() {
  return (
    <div>
      <h1>Logic Games</h1>

      <center class="button">Animals</center>
      <center>
        <p>Hint: เป็นสัตว์สี่เท้า มีเขาสองเขาแต่ปลายเขามีหกยอด</p>
        <WordCard value={word} />
      </center>
      ...
      <center class="button">Class Room</center>
      <center>
        <p>
          Hint: ใช้สำหรับวางสิ่งของอย่างเช่น อาหาร
          โดยความสูงมีความพอเหมาะสำหรับการนั่ง
        </p>
        <WordCard value={room} />
      </center>
     ...
      <center class="button">Fruits</center>
      <center>
        <p>Hint: ผลมีรสเปรี้ยวหรือหวาน มักจะมีแคลเซียมหรือวิตามิน</p>
        <WordCard value={fruit} />
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

###

ในส่วนของหน้านี้จะเป็นการสร้างคำขึ้นมาเพื่อให้ผู้เล่นได้เล่นเกมส์ที่ทางโปรแกรมได้ Random คำให้ผู้เล่นได้เล่นกัน

- ตัวแปรที่ใช้ในการสร้างคำคือ `const` ตัวอย่างเช่น

```js
const word = "deer";      ---(ex1)
```

### ใน ex1 นี้คือจะเป็นการสร้างคำคำว่า `deer` โดยมีตัวแปร const ชื่อว่า `word`

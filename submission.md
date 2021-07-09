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

  => ใน ex1 นี้คือจะเป็นการสร้างคำคำว่า `deer`โดยมีตัวแปรชื่อว่า `word`

```js
const word = "deer";      ---(ex1)
```

- ในส่วนของ `function` นั้น จะเป็นรายละเอียดต่างๆที่ส่ง Output ให้ออกไปที่หน้าเว็บ
  - ในส่วน class ที่ชื่อว่า `button` นั้น จะเป็นการแยกหมวดหมู่ในการเล่นเกมส์ ว่าคำๆนั้นที่ผู่เล่นได้เล่นอยู่นั้นอยู่ในหมวดไหน ซึ่งเป็นลักษณะการใช้คำใบ้ในการเล่นได้

* ```js
  export default App;    ---(ex2)
  ```

  ส่วน `export default` นั้นคือการรวมข้อมูลทั้งหมดที่่อยู่ในออบเจ็กต์เดียวแล้ว export ออกไป ในที่นี้คือ export App ออกไป

## Code in App.css

### >> ในส่วนของหน้านี้นั้นจะเป็นคล้ยส่วนที่ตกแต่งหน้าเว็ยส่วนต่างๆ ที่นำออกมาแยกอีกหน้าก็เพราะว่า

- ในส่วนของหน้า code App หลักนั้น เมื่อเวลาต้องการแก้ไขในส่วนที่ error จะได้ไม่ไปสับสนกับส่วน code ที่เป็น .css นั้นเอง
- ในกรณีเดียวกันถ้าต้องการแก้ไขในส่วนของ .css จะได้แก้ไขได้ถูกว่าส่วนไหนค่อส่วนไหน

### >> ตัวอย่างใน code บางส่วนใน App.css <<

- ```js
  body {
    background-image: url("./image/background1.jpg");
    font-family: "Courier New", Courier, monospace;
    border: 10px solid rgba(70, 70, 70, 0.884);
  }      ---(ex3)
  ```
  - `background-image:` จะเป็นการใส่รูปภาพไปในหน้าเว็บ ซึ่งถ้าจะต้องขึ้นต้นด้วย `url` ก่อน ก่อนตามด้วย link รูปภาพ
  - `font-family:` ส่วนนี้จะเป็นการเปลี่ยน font ตามที่เราต้องการ ในที่นี้คือเราเอา font มาใส่ใน body ดังนั้น font นี้จะเปลี่ยนไปทั้งหน้าเว็บ
  - `border:` เป็นการใส่กรอบให้กับหน้าเว็บ โดยที่มีความกว้างอยู่ที่ 10px

* ```js
  .center {...}        ---(ex4)
  ```
  - `.center{}` นี้จะเป็นส่วนที่ถ้าข้อความหรือส่วนไหนที่เป็น `<center></center>` จะเปลี่ยนรูปแบบการวางตามที่เขียนใน ex4
* ```js
    .button {...}      ---(ex5)
  ```
  - `.buttin{}` นี้ เมื่อข้อความนั้นมี class ว่า button ทุกๆคำที่อยู่ในคลาสนั้นจะรวมกันเป็นกล่องสี่เหลี่ยม
* ```js
  .card {...}           ---(ex6)
  .activeCard {...}     ---(ex7)
  ```
  - สอง ex นี้จะอยู่ใน Code in CharacterCard.js & WordCard.js

## Code in CharacterCard.js

- ```js
  const activate = () => {
  if (!active) {
    setActive(true);
    props.activationHandler(props.value);
  }
  ```
  ส่วนนี้จะเป็นการเรียกใช้ activationHandler
- ```js
  useEffect(() => {
    if (attemptRef.current != props.attempt) {
    setActive(false);
    attemptRef.current = props.attempt;
    }
  }
  ```

  ในส่วนนี้จะเป็นการตรวจสอบว่า เมื่อ attempt เปลี่ยนไป component จะต้องถูก render ใหม่อีกครั้ง

## Code in WordCard.js

- ```js
  import _ from "lodash";

  const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase();
    let chars = _.shuffle(Array.from(word));
    return {
      word,
      chars,
      attempt: 1,
      guess: "",
      completed: false,
    };
  };
  ```

  - ในส่วนนี้จะเป็นการสุ่มลำดับของตัวอักษรในคำที่จะแสดงผล โดยที่ผู้เล่นกดตัวอักษรทีละตัวรับรู้ตัวอักษรทีละตัว เมื่อ
    กดครบทั้งคำแล้ว ให้ตรวจสอบว่า คำที่ผู้เล่นสร้างคำจากคำใบ้ที่ให้ไว้ตรงกับคำต้นแบบหรือไม่ หากตรงกันถือว่าชนะ(ทำให้คำๆนั้นไม่รีให้ผู้เล่น เล่นใหม่) หากสร้างตำไม่ตรงกันให้เล่นใหม่โดยคำๆนั้นจะรีให้ใหม่อัตโนมัติ

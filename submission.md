# ((Code in App.js))

# 1. ใน code ส่วนนี้ได้เพิ่มปุ่มการ Reset Page ไป โดยใช้คำสั่ง

```js
const newWin = () => {
  window.location.reload();
  และ;
  <center>
    <button className="newWin" onClick={newWin}>
      Reset Page
    </button>
  </center>;
};
```

# 2. ได้เพิ่มคำให้ผู้เล่นได้เล่นมากขึ้น โดยใช้คำสั่ง

```js
const word = "deer";
```

# 3. ได้เพิ่มคำใบ้ให้ผู้เล่นได้เล่นง่ายขึ้น โดยใช้คำสั่ง

```js
<center>
  <p>Hint: เป็นสัตว์สี่เท้า มีเขาสองเขาแต่ปลายเขามีหกยอด</p>
</center>
```

# ((Code in App.css))

# 1. ได้เพิ่มพื้นหลังของเว็บ โดยใช้คำสั่ง

```js
  background-image: url("./image/background1.jpg");
```

# 2. ได้เปลี่ยน font ให้กับ game โดยใช้คำสั่งว่า

```js
  font-family: Arial;
```

# 3. ได้เพิ่มกรอบหน้าให้กับเกม ใช้คำสั่งว่า

```js
    border: 10px solid rgba(70, 70, 70, 0.884);
```

# 4. ได้มีการกำหนดขนาดต่างๆให้กับส่วนต่างๆ โดยมีคำสั่งที่ใช้ดังนี้

```js
  margin: auto;
  width: 60%;
  padding: 10px;
  margin-bottom: -10px;
  margin-top: 40px;
  margin-left: -0.5px;
  margin-top: 40px;
  ....
```

# ((Code in CharacterCard.js))

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

# ((Code in WordCard.js))

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

## Name-ID

> ชื่อ : นางสาว ศิขรินทร์ สามงามทอง
>
> รหัสนักศึกษา : 6210110342
>
> Section 01

import React from "react";
import "./App.css";
import WordCard from "./WordCard";

const word = "deer";
const word1 = "mouse";
const word2 = "butterfly";
const word3 = "elephant";
const word4 = "chicken";
const word5 = "fish";
function App() {
  return (
    <div>
      <h1>Logic Games</h1>

      <center class="button">Animals</center>
      <center>
        <p>Hint: เป็นสัตว์สี่เท้า มีเขาสองเขาแต่ปลายเขามีหกยอด</p>
        <WordCard value={word} />
      </center>

      <center>
        <p>Hint: ขนาดเล็ก มีฟันแทะ อยู่ทั่วไปตามบ้านเรือนและในถิ่นธรรมชาติ</p>
        <WordCard value={word1} />
      </center>

      <center>
        <p>
          Hint: มีวงชีวิตเริ่มแรกตั้งแต่ระยะไข่ ระยะหนอน ระยะดักแด้
          จนเข้าสู่ระยะการโตเต็มวัยที่มีปีกหลากสีต้องตาผู้คน
        </p>
        <WordCard value={word2} />
      </center>

      <center>
        <p>Hint: ตัวใหญ่เท่าฟ้า มีขาสีขา มีงวงและมีงา</p>
        <WordCard value={word3} />
      </center>

      <center>
        <p>Hint: ตอนเช้าตื่นขึ้นขันและปลุกคน มีหางมีหงอน</p>
        <WordCard value={word4} />
      </center>

      <center>
        <p>Hint: สู้คนไม่ได้ ว่ายน้ำทั้งวัน มีครีบมีหาง หายใจทางเหงือก</p>
        <WordCard value={word5} />
      </center>

      <center class="button">Class Room</center>
    </div>
  );
}

export default App;

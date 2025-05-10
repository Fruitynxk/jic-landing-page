import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center justify-start">
      <header className="w-full max-w-3xl text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">วางแผนเรียนต่อต่างประเทศให้ลูก...เริ่มต้นจากที่นี่</h1>
        <p className="text-lg mb-6">JIC Overseas Education | คอร์สภาษา | ปรึกษาเรียนต่อ | ทัวร์มหาวิทยาลัย</p>
        <a
          href="https://line.me/R/ti/p/%40yourlineid"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-2xl text-lg shadow hover:bg-green-600"
        >
          📲 ปรึกษาฟรีผ่าน LINE OA
        </a>
      </header>

      <section className="mt-12 w-full max-w-3xl grid gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">🎯 คอร์สยอดนิยม</h2>
          <ul className="list-disc list-inside text-base">
            <li>HSK 1–6 (ออนไลน์ / ตัวต่อตัว / วิดีโอย้อนหลัง)</li>
            <li>IELTS สำหรับเรียนต่อต่างประเทศ</li>
            <li>ภาษาฟินแลนด์ / เยอรมัน สำหรับยื่นทุน</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">💡 ทำไมผู้ปกครองเลือก JIC?</h2>
          <ul className="list-disc list-inside text-base">
            <li>สอนโดยทีมครูผู้เชี่ยวชาญ ประสบการณ์ตรง</li>
            <li>เข้าใจพ่อแม่ไทย วางแผนเรียนต่อล่วงหน้าได้จริง</li>
            <li>ดูแลเหมือนลูกหลาน มีที่ปรึกษาตลอดเส้นทาง</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">🗺️ ทัวร์มหาวิทยาลัยต่างประเทศ</h2>
          <p className="text-base">
            พาลูกสัมผัสชีวิตนักศึกษาในต่างประเทศจริงก่อนตัดสินใจ
            รอบใหม่เริ่มเร็ว ๆ นี้ รับจำนวนจำกัด!
          </p>
        </div>
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        ติดต่อทีมที่ปรึกษาได้ทุกวัน | LINE OA: @yourlineid
      </footer>
    </div>
  );
}

export default App;

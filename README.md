# 🎸🥁 Music Practice Coach (Guitar & Drum Online)

ระบบตรวจจับเสียงและวิเคราะห์การฝึกซ้อมดนตรีอัจฉริยะแบบเรียลไทม์ รองรับทั้ง **กีตาร์ (Guitar)** และ **กลอง (กลองชุดอะคูสติก & กลองไฟฟ้า Electronic Drum)** ใช้งานได้ลื่นไหลบนทุกอุปกรณ์ ทั้ง **PC, Mac, iPad, iPhone และ Android** พร้อมตัวเล่น YouTube ในตัวและระบบสรุป Feedback เพื่อการพัฒนา

---

## ✨ ฟีเจอร์หลัก (Key Features)

1. **สลับโหมดเครื่องดนตรีได้ 3 โหมด (Multi-Instrument Support)**:
   - 🎸 **กีตาร์ (Guitar Mode)**: ตรวจจับระดับเสียงสด (Pitch Detection) แสดงชื่อโน้ต (เช่น C3, E2, A4), ค่าความถี่ (Hz) และแถบวัดความเที่ยงตรงของเสียง (Tuner Deviation Bar)
   - 🥁 **กลองชุด / กลองธรรมดา (Acoustic Drum Mode)**: ตรวจจับแรงกระแทกเสียง (Transient / Onset Detection) แยกย่านความถี่ Kick (กระเดื่อง), Snare (สแนร์), Hi-Hat (แฉ/ฉาบ) พร้อมแสดงจำนวนครั้งและคำนวณความเร็ว (BPM) สด
   - ⚡ **กลองไฟฟ้า (Electronic Drum USB-MIDI Mode)**: รองรับ **Web MIDI API** เชื่อมต่อสาย USB-MIDI จากโมดูลกลองไฟฟ้าเข้าคอมหรือมือถือ/แท็บเล็ตได้โดยตรง ตรวจจับแม่นยำ 100% ไม่มีดีเลย์ (หรือเลือกใช้ไมโครโฟนจับเสียงแทนได้)

2. **เล่นคลิป YouTube ต้นแบบได้ในตัว ไม่หลุด/ไม่โดนบล็อก**:
   - ฝังตัวเล่น YouTube (Embedded Player) โดยตรง ไม่ต้องเปิดหน้าต่างใหม่ (ไม่เจอปัญหา Popup Blocker บน iOS / Android)
   - เล่นคลิปเพลงไปพร้อมกับเปิดไมค์ตรวจจับเสียงได้พร้อมกัน
   - ปรับความเร็วคลิปเพลงได้ (0.5x, 0.75x, 1.0x, 1.25x) ช่วยในการแกะเพลงและซ้อมท่อนยาก

3. **ระบบประเมินผลและ Feedback เชิงลึก (Actionable Analytics)**:
   - คำนวณ **คะแนนความสม่ำเสมอของจังหวะ (Timing Stability Score / 100)**
   - คำนวณ **BPM เฉลี่ย** และระยะเวลาที่ซ้อม
   - ให้ข้อเสนอแนะ 3 หมวดชัดเจน:
     - 🌟 **จุดแข็ง (Strengths)**: ทักษะที่ทำได้ดีในรอบนี้
     - ⚠️ **จุดที่ควรปรับปรุง (Areas for Improvement)**: จุดที่ยังหลุดหรือแกว่ง
     - 💡 **แบบฝึกหัดแนะนำ (Recommended Drill)**: กิจกรรมแนะนำสำหรับการซ้อมรอบถัดไป
   - ส่งออกข้อมูลสรุปเป็นไฟล์ JSON / บันทึกประวัติในตัวเบราว์เซอร์

4. **รองรับ 2 รูปแบบการ Deploy (GitHub Pages & Google Apps Script)**:
   - ขึ้น **GitHub Pages** เป็นเว็บออนไลน์ฟรี 100% เข้าใช้งานผ่านลิงก์ได้ทุกที่
   - เชื่อมต่อ **Google Apps Script & Google Sheets** เพื่อบันทึกประวัติการซ้อมของนักเรียน/ผู้เรียนลงตารางอัตโนมัติ

---

## 🚀 วิธีการติดตั้งและนำขึ้น GitHub (Deployment Guide)

### 1. นำขึ้น GitHub Pages (แนะนำ - ฟรีและเร็วที่สุด)
1. สร้าง Repository ใหม่บน GitHub เช่น `music-practice-coach`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นไป:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Guitar & Drum Practice Coach"
   git branch -M main
   git remote add origin https://github.com/USERNAME/music-practice-coach.git
   git push -u origin main
   ```
3. ไปที่ **Settings** ของ Repository บน GitHub -> เมนู **Pages**
4. ในส่วน **Build and deployment** > **Branch** ให้เลือก `main` และโฟลเดอร์ `/ (root)` แล้วกด **Save**
5. รอ 1-2 นาที คุณจะได้ URL เว็บออนไลน์ เช่น `https://USERNAME.github.io/music-practice-coach/` ใช้งานได้ทันทีบนมือถือ/แท็บเล็ต/คอมพิวเตอร์!

---

### 2. นำไปใช้กับ Google Apps Script (บันทึกลง Google Sheets)
1. ไปที่ [Google Sheets](https://sheets.google.com) แล้วสร้างสเปรดชีตใหม่
2. ไปที่เมนู **ส่วนขยาย (Extensions)** -> **Apps Script**
3. คัดลอกโค้ดจากไฟล์ `Code.gs` ไปวางในหน้าต่างโค้ด
4. เพิ่มไฟล์ HTML โดยกดปุ่ม **+** -> เลือก **HTML** ตั้งชื่อไฟล์ว่า `index` แล้วคัดลอกโค้ดจาก `index.html` ไปวาง
5. กดปุ่ม **การทำให้ใช้งานได้ (Deploy)** -> **การทำให้ใช้งานได้รายการใหม่ (New deployment)**
6. เลือกประเภทเป็น **เว็บแอป (Web app)**:
   - ผู้ดำเนินการ: ฉัน (Me)
   - ผู้มีสิทธิ์เข้าถึง: ทุกคน (Anyone)
7. กด **ทำให้ใช้งานได้ (Deploy)** และคัดลอก URL เพื่อเปิดใช้งาน

---

## 📱 วิธีแก้ปัญหาและข้อแนะนำในการใช้งานอุปกรณ์ (Troubleshooting)

### 1. การเปิดสิทธิ์ไมโครโฟน (Microphone Permissions)
- **iPhone / iPad (Safari)**: เมื่อเข้าเว็บครั้งแรกให้กด "อนุญาต (Allow)" หากเผลอกดบล็อก ให้แตะที่ไอคอน `aA` ด้านซ้ายของช่องใส่ URL -> เลือก **การตั้งค่าเว็บไซต์ (Website Settings)** -> **ไมโครโฟน** -> เปลี่ยนเป็น **อนุญาต (Allow)**
- **Android / PC (Chrome / Edge)**: กดไอคอนรูป **แม่กุญแจ 🔒** หรือไอคอน **การตั้งค่า** หน้ารายการ URL -> เลือก **อนุญาตไมโครโฟน**

### 2. การเชื่อมต่อกลองไฟฟ้า (Electronic Drum MIDI)
- เสียบสาย USB-B to USB-A (หรือ USB-C สำหรับมือถือ/แท็บเล็ต/Mac) จากโมดูลกลองไฟฟ้าเข้ากับอุปกรณ์
- สลับโหมดในเว็บแอปไปที่ **⚡ กลองไฟฟ้า (E-Drum/MIDI)**
- ระบบจะตรวจจับชื่อรุ่นกลองไฟฟ้าโดยอัตโนมัติ (เช่น Roland, Yamaha, Alesis, Donner, NUX)
- *หมายเหตุ:* บน iPad/iPhone หากต้องการต่อ MIDI แนะนำให้ใช้สาย Lightning/USB-C to Camera Adapter

---

## 📂 โครงสร้างไฟล์ในโปรเจกต์ (Project Structure)

```text
├── index.html       # เว็บแอปพลิเคชันหลักแบบ Responsive พร้อม Audio Engine & YouTube API
├── Code.gs          # Backend สำหรับ Google Apps Script (บันทึกข้อมูลลง Google Sheet)
├── README.md        # คู่มือการติดตั้งและใช้งานระบบ
└── .gitignore       # ไฟล์ละเว้นที่ไม่ต้อง push ขึ้น Git
```

---

## 📄 ลิขสิทธิ์และการพัฒนาต่อยอด (License)
เปิดให้ใช้งานและพัฒนาต่อยอดได้อย่างอิสระเพื่อประโยชน์ทางการศึกษาและการฝึกซ้อมดนตรี 🎶

/**
 * Music Practice Coach - Google Apps Script Backend (Code.gs)
 * สำหรับให้บริการเว็บแอปผ่าน Google Apps Script และบันทึกผลการซ้อมลง Google Sheet
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Music Practice Coach 🎸🥁 (Guitar & Drum Online)')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * ฟังก์ชันบันทึกสถิติการฝึกซ้อมลง Google Sheet อัตโนมัติ
 * @param {Object} data ข้อมูลการซ้อม (เครื่องดนตรี, ชื่อเพลง, ระยะเวลา, คะแนน, จุดแข็ง, จุดที่ควรปรับปรุง)
 */
function savePracticeLog(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.create('Music_Practice_Logs');
    let sheet = ss.getSheetByName('PracticeLogs');
    
    if (!sheet) {
      sheet = ss.insertSheet('PracticeLogs');
      sheet.appendRow([
        'วัน-เวลา (Date)', 
        'เครื่องดนตรี (Instrument)', 
        'ชื่อเพลง (Song Title)', 
        'เวลาซ้อม (วินาที)', 
        'จำนวนโน้ต/จังหวะ (Count)', 
        'ความเร็วเฉลี่ย (BPM)', 
        'คะแนนจังหวะ (Stability Score)', 
        'จุดแข็ง (Strengths)', 
        'ข้อควรปรับปรุง (Improvements)'
      ]);
      
      // จัดรูปแบบหัวตาราง
      sheet.getRange(1, 1, 1, 9)
        .setFontWeight('bold')
        .setBackground('#1e293b')
        .setFontColor('#ffffff');
    }

    const instrumentName = data.mode === 'guitar' 
      ? '🎸 กีตาร์ (Guitar)' 
      : (data.mode === 'drum_acoustic' ? '🥁 กลองชุด (Acoustic)' : '⚡ กลองไฟฟ้า (E-Drum)');

    sheet.appendRow([
      new Date(),
      instrumentName,
      data.songTitle || 'ไม่ระบุชื่อเพลง',
      data.durationSeconds || 0,
      data.totalItems || 0,
      data.avgBpm || '-',
      data.stabilityScore ? (data.stabilityScore + ' / 100') : '-',
      data.strengths || '-',
      data.improvements || '-'
    ]);

    return { status: 'success', message: 'บันทึกสำเร็จ' };
  } catch (err) {
    return { status: 'error', message: err.toString() };
  }
}

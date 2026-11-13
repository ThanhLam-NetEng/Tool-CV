# 📝 Interactive CV Builder & PDF Exporter

Công cụ tạo, quản lý và xuất CV A4 chuyên nghiệp dành cho Kỹ sư CNTT / An toàn thông tin / Mạng máy tính & các ngành Kỹ thuật. Hỗ trợ nhiều phiên bản CV, bộ mẫu chuẩn quốc tế (Harvard Standard, Silicon Valley), liên kết bấm được (hyperlinks) trong PDF và tính năng tự động dồn vừa 1 trang A4.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-42b883?style=for-the-badge&logo=open-source-initiative&logoColor=white)

🌐 **Live Web Demo:** [https://ThanhLam-NetEng.github.io/Tool-CV/](https://ThanhLam-NetEng.github.io/Tool-CV/)

---

## 🔥 Tính năng Nổi bật (Key Features)

### 🎨 1. Bộ Mẫu CV Chuẩn Quốc tế (Curated Templates)
- **🎓 Harvard Standard**: Mẫu 1 cột kinh điển chuẩn Harvard Business School / IVY League (Font Lora Serif sang trọng & uy tín).
- **💼 Modern Tech Slate**: Mẫu 2 cột với Banner tiêu đề phủ màu nổi bật (Dành cho Senior, Lead, Architect).
- **⚡ Silicon Valley Accent**: Mẫu 2 cột với vạch accent màu trái sắc nét, thiết kế năng động thung lũng Silicon.
- **📄 Minimalist Engineering**: Mẫu 1 cột tối giản chuẩn máy quét tự động ATS.

### 🔤 2. Bộ chọn Font chữ (Typography Engine)
- Hỗ trợ đổi font linh hoạt cho bất kỳ mẫu CV nào:
  - **Lora**: Serif cổ điển, uy tín chuẩn Harvard.
  - **Inter**: Sans-serif chuẩn UI/UX số 1 thế giới (Figma, OpenAI, Vercel).
  - **DM Sans**: Geometric modern sắc nét & tối giản.
  - **Roboto**: Font Google Clean tiêu chuẩn & dễ đọc.

### 📏 3. Cảnh báo A4 & Thuật toán "Dồn vừa 1 Trang A4" (Auto-Fit Algorithm)
- **Thanh đo A4 thời gian thực**: Cảnh báo tức thì nếu nội dung dài hơn 1 trang A4 (VD: `⚠️ Tràn A4 (~115%)`).
- **⚡ Nút Dồn vừa 1 Trang A4**: Tự động tinh chỉnh lề khoảng cách và hạ cỡ chữ để CV nằm gọn 100% trong 1 trang A4 chỉ với 1 cú nhấp.

### 🌐 4. Đa ngôn ngữ & Tùy chỉnh Tiêu đề (VI / EN Presets)
- **Preset 1-Click**: Chuyển nhanh toàn bộ tiêu đề mục giữa tiếng Anh (*Experience, Projects...*) và tiếng Việt (*Kinh nghiệm làm việc, Dự án thực tế...*).
- Cho phép chỉnh sửa tiêu đề bất kỳ mục nào theo nhu cầu.

### 🔃 5. Quản lý Thứ tự các Mục lớn (Section Reordering)
- Thay đổi thứ tự xuất hiện của các phần chính (Kỹ năng, Dự án, Kinh nghiệm, Học vấn) ở cả cột chính và cột phụ.

### 🔗 6. Xuất PDF Chuẩn A4 với Links Bấm được (Clickable PDF Annotations)
- Giữ nguyên 100% đường liên kết bấm được (Credly badges, GitHub repos, LinkedIn, Portfolio) khi xuất file PDF bằng tính năng **Save as PDF** của trình duyệt.

### 💾 7. Quản lý Nhiều Phiên bản (Multi-Profile Local Management)
- Lưu trữ và chuyển đổi giữa nhiều phiên bản CV (CV Tiếng Anh, CV Tiếng Việt, CV Networking, CV Cybersecurity...) ngay trong `localStorage`.
- Đổi tên, nhân bản, xóa phiên bản và Nhập/Xuất file dữ liệu `JSON`.

### 🎯 8. Khớp CV với JD (ATS Keyword Matcher)
- Dán nội dung JD vào mục **"Ứng tuyển & Khớp JD"** → bấm **Phân tích** để xem % độ khớp, các từ khóa kỹ thuật **JD yêu cầu mà CV còn thiếu** (xếp theo mức được nhắc đến) và những từ khóa **đã có**.
- Hiểu nhiều cách gọi của cùng một thứ (VD: `Wazuh`/`Splunk` → SIEM, `Suricata` → IDS/IPS) và một số thuật ngữ tiếng Việt (tường lửa, giám sát, ứng phó sự cố...).
- Kết quả **tự cập nhật** khi bạn sửa CV. Chạy hoàn toàn trên trình duyệt, nội dung JD không gửi đi đâu.
- ⚠️ Chỉ bổ sung những kỹ năng bạn thật sự có. Từ khóa thiếu chỉ là gợi ý để rà lại.

### 📋 9. Theo dõi ứng tuyển (Application Tracker)
- Mỗi phiên bản CV ghi được: công ty, vị trí, trạng thái (Chưa gửi / Đã gửi / Phỏng vấn / Có offer / Bị từ chối / Không phản hồi), ngày gửi, link tin tuyển dụng, ghi chú. **Không in ra CV/PDF.**
- Nút **📋 Theo dõi** mở bảng tổng hợp mọi phiên bản; bấm một dòng để mở nhanh phiên bản đó. Có nút **Xuất CSV** (mở bằng Excel, đúng tiếng Việt).
- Tên phiên bản trong danh sách chọn hiển thị kèm công ty và trạng thái.
- Trường **Hạn nộp**: CV chưa gửi mà sắp (≤ 3 ngày) hoặc quá hạn sẽ được xếp lên đầu bảng, tô màu cảnh báo, và nút **📋 Theo dõi (n)** ở đầu trang đổi màu cho bạn thấy ngay.

### 👁 10. Ẩn / hiện nội dung theo từng phiên bản
- Mỗi phần (Kinh nghiệm, Dự án, Chứng chỉ...), mỗi mục và mỗi gạch đầu dòng có nút mắt **👁**. Bấm để **ẩn khỏi CV** mà không xóa dữ liệu; bấm lại để hiện.
- Nhờ vậy giữ một bộ nội dung đầy đủ rồi chỉ bật những gì mạnh và hợp với từng JD cho mỗi phiên bản.
- Mục **Khớp JD** chỉ tính phần đang hiển thị trên CV, nên điểm khớp phản ánh đúng bản sẽ gửi đi.

### 💾 11. Sao lưu & khôi phục
- Dữ liệu lưu trong `localStorage` của trình duyệt, nên xóa dữ liệu duyệt web là mất. Nút **💾 Sao lưu** xuất **tất cả** phiên bản CV ra một file JSON. Nút này hiện chấm cam khi chưa sao lưu hoặc đã hơn 7 ngày.
- Để khôi phục, dùng nút **Nhập JSON** và chọn file sao lưu: các phiên bản trong file được **thêm vào**, không ghi đè hay xóa phiên bản hiện có.

---

## 🧱 Cấu trúc mã nguồn
| File | Vai trò |
|---|---|
| `index.html` | Khung giao diện (form bên trái, xem trước A4 bên phải, bảng theo dõi) |
| `app.js` | Logic chính: dữ liệu, form soạn, xem trước, profile, tracker |
| `jd-match.js` | Bộ phân tích từ khóa JD ↔ CV (hàm thuần, không phụ thuộc DOM) |
| `style.css` | Giao diện ứng dụng và các mẫu CV |

---

## 🚀 Hướng dẫn Chạy cục bộ & Live Web

### 1. Chạy cục bộ (Local Run)
Không cần cài đặt Node.js hay build bước nào phức tạp. Chỉ cần mở file `index.html` trực tiếp trên trình duyệt Web (Chrome, Edge, Brave, Firefox):
```bash
# Clone repository
git clone https://github.com/ThanhLam-NetEng/Tool-CV.git

# Mở file index.html trong trình duyệt
```

### 2. Truy cập Live Demo (GitHub Pages)
Ứng dụng được tự động tích hợp chạy trực tuyến tại:
👉 **[https://ThanhLam-NetEng.github.io/Tool-CV/](https://ThanhLam-NetEng.github.io/Tool-CV/)**

---

## 🖨️ Hướng dẫn Xuất PDF Chuẩn A4 Bấm được Link

1. Nhấp nút **Xuất PDF** trên thanh công cụ (hoặc nhấn tổ hợp phím **Ctrl + P**).
2. Tại cửa sổ in của trình duyệt, chọn các thông số sau:
   - **Máy in (Destination)**: `Save as PDF` (Lưu dưới dạng PDF).
   - **Khổ giấy (Paper size)**: `A4`.
   - **Lề (Margins)**: `None` (Không có).
   - **Tùy chọn khác**: Tích chọn **Background graphics** (Đồ họa nền) để giữ màu thẻ tag và sidebar.

---

## 📄 License
Phát hành theo giấy phép [MIT License](LICENSE).

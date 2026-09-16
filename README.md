# 📝 Interactive CV Builder & PDF Exporter

Công cụ tạo, quản lý và xuất CV A4 chuyên nghiệp dành cho Kỹ sư CNTT / An toàn thông tin / Mạng máy tính & các ngành Kỹ thuật. Hỗ trợ nhiều phiên bản CV, bộ mẫu chuẩn quốc tế (Harvard Standard, Silicon Valley), liên kết bấm được (hyperlinks) trong PDF và tính năng tự động dồn vừa 1 trang A4.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)

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

---

## 🚀 Hướng dẫn Chạy cục bộ & Đăng lên GitHub Pages

### 1. Chạy cục bộ (Local Run)
Không cần cài đặt Node.js hay build bước nào phức tạp. Chỉ cần mở file `index.html` trực tiếp trên trình duyệt Web (Chrome, Edge, Brave, Firefox):
```bash
# Clone repository
git clone https://github.com/your-username/your-cv-builder.git

# Mở index.html trong trình duyệt
```

### 2. Đăng tải lên GitHub Pages (Live Demo)
1. Tạo một repository mới trên GitHub (Ví dụ: `my-cv-builder`).
2. Push toàn bộ mã nguồn lên repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional CV Builder"
   git branch -M main
   git remote add origin https://github.com/your-username/my-cv-builder.git
   git push -u origin main
   ```
3. Trên GitHub, vào mục **Settings** ➔ **Pages**:
   - Source: chọn **Deploy from a branch**.
   - Branch: chọn **main** và thư mục `/(root)`.
   - Bấm **Save**. CV Builder sẽ chạy trực tuyến tại `https://your-username.github.io/my-cv-builder/`.

---

## 🖨️ Hướng dẫn Xuất PDF Chuẩn A4 Bấm được Link

1. Nhấp nút **Xuất PDF** trên thanh công cụ (hoặc nhấn tổ hợp phím **Ctrl + P**).
2. Tại cửa sổ in của trình duyệt, chọn các thông số sau:
   - **Máy in (Destination)**: `Save as PDF` (Lưu dưới dạng PDF) hoặc `Microsoft Print to PDF` (Lưu ý: Để bấm được link, khuyến nghị chọn *Save as PDF* của trình duyệt).
   - **Khổ giấy (Paper size)**: `A4`.
   - **Lề (Margins)**: `None` (Không có).
   - **Tùy chọn khác**: Tích chọn **Background graphics** (Đồ họa nền) để giữ màu thẻ tag và sidebar.

---

## 📄 License
Phát hành theo giấy phép [MIT License](LICENSE).

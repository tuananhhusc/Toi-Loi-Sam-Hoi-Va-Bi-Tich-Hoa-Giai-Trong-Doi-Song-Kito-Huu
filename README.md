# Thần học Công giáo | Long-form Academic Reader

Một nền tảng đọc tài liệu nghiên cứu chuyên sâu (long-form reader) được thiết kế với thẩm mỹ học thuật hiện đại, tối ưu hóa cho việc tiếp nhận các nội dung thần học và triết học phức tạp. Dự án tập trung vào trải nghiệm đọc liền mạch, nghệ thuật sắp đặt chữ (typography) và các công cụ hỗ trợ nghiên cứu thông minh.

## 🌟 Tính năng Nổi bật

### 1. Trải nghiệm Đọc Học thuật (Academic UX)
- **Nghệ thuật Chữ (Typography):** Sử dụng phông chữ **EB Garamond** cổ điển cho nội dung chính và **Inter** hiện đại cho các thành phần điều hướng.
- **Drop Caps:** Tự động tạo chữ hoa trang trí ở đầu mỗi chương lớn (`h2`), mang lại cảm giác sang trọng như các tập san khoa học.
- **Layout Tối ưu:** Độ rộng dòng (measure) được giới hạn ở ~68 ký tự để giảm mỏi mắt và tăng tốc độ xử lý thông tin.

### 2. Hệ thống Điều hướng Thông minh
- **Mục lục Đa kênh (Sticky TOC):**
  - **Desktop:** Thanh mục lục cố định bên trái với hệ thống đánh số tự động và hiệu ứng highlight phần đang đọc.
  - **Mobile:** "Bottom Sheet" kéo từ dưới lên cực kỳ tiện dụng, cho phép truy cập nhanh toàn bộ cấu trúc bài viết mà không làm gián đoạn việc đọc.
- **Thanh Tiến trình (Progress Bar):** Hiển thị trực quan vị trí hiện tại trên toàn bộ văn bản.
- **Ước tính Thời gian Đọc:** Tự động tính toán dựa trên độ dài nội dung MDX để người đọc chủ động sắp xếp thời gian.

### 3. Công cụ Hỗ trợ Nghiên cứu
- **Chú thích Tức thì (Footnote Tooltips):** Di chuột hoặc chạm vào các chỉ số nguồn tham khảo để xem ngay thông tin trích dẫn mà không cần cuộn xuống cuối trang.
- **Hệ thống Tham chiếu (References Section):** Danh mục nguồn đầy đủ và chi tiết ở cuối tài liệu.
- **Nút "Lên đầu trang":** Hiển thị thông minh khi cuộn xuống sâu, giúp quay lại tiêu đề ngay lập tức.

### 4. Chia sẻ và Xuất bản
- **Menu Chia sẻ:** Tích hợp chia sẻ nhanh lên Facebook, X (Twitter) hoặc sao chép liên kết vào clipboard.
- **Chế độ In Ấn Chuyên nghiệp (Print CSS):** Tự động dọn dẹp giao diện khi in (Ctrl+P), chuyển sang nền trắng, chữ đen và tối ưu hóa layout cho giấy A4 hoặc file PDF.
- **Chuẩn SEO:** Tích hợp đầy đủ Meta tags, OpenGraph và Twitter Cards để hiển thị chuyên nghiệp trên mạng xã hội.

### 5. Giao diện Cá nhân hóa
- **Dark/Light Mode:** Chủ đề màu sắc được tinh chỉnh với các tông màu "vàng rêu học thuật" (`primary`) và "tím nghệ thuật" (`accent`).
- **Thanh Cuộn Tùy chỉnh (Custom Scrollbar):** Đồng bộ hoàn toàn với bảng màu chủ đạo của chủ đề.

## 🛠 Công nghệ Sử dụng

- **Khung (Framework):** [Next.js](https://nextjs.org/) (App Router)
- **Nội dung:** [MDX](https://mdxjs.com/) cho phép viết văn bản học thuật kết hợp với các component React.
- **Phong cách:** [Tailwind CSS](https://tailwindcss.com/) & Vanilla CSS variables.
- **Thư viện UI:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/).
- **Kiến trúc:** Atomic components, tối ưu hóa Server-side Rendering (SSR) cho SEO.

## 🚀 Khởi chạy Dự án

Cài đặt các phụ thuộc:
```bash
npm install
```

Chạy môi trường phát triển:
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn.

## 📁 Cấu trúc Thư mục Chính

- `/content`: Chứa nội dung bài viết định dạng `.mdx`.
- `/components/reader`: Các thành phần chuyên dụng cho trải nghiệm đọc (TOC, Footnotes, Progress bar...).
- `/lib`: Các hàm xử lý logic (tính toán TOC, scrolling...).
- `/app`: Cấu trúc Next.js App Router và layout chính.

## 📄 Giấy phép

Dự án được phát triển cho mục đích nghiên cứu và học thuật.

---
*Phát triển năm 2026 - Bản quyền thuộc về Báo cáo Nghiên cứu Chuyên sâu.*

# 🌸 Pink Blooming Dream — Website 20/10

Một món quà kỹ thuật số dành cho **Ngày Phụ nữ Việt Nam 20/10**, gồm **7 phân cảnh hoạt hình tương tác** với sắc hồng cánh sen và pastel, linh vật hoa sen Lumi, album ảnh, những tấm thiệp có thể mở, bó hoa bất ngờ và một cảnh kết ấm áp.

> **BẢN ĐÃ SỬA LỖI TRẮNG MÀN HÌNH:** Có thể nhấp đúp `index.html` để chạy trực tiếp bằng Chrome/Edge trên Windows; đồng thời vẫn có thể đăng lên GitHub Pages. Không cần Node.js, npm, React hay build. Website dùng HTML/CSS/JavaScript thường (không còn dùng `type="module"`), Canvas và SVG.

## ✨ Có những gì?

| Phân cảnh | Nội dung | Hoạt ảnh/tương tác |
|---|---|---|
| 1 · Mở đầu | Hộp quà và lời mời | Hộp mở, cánh hoa bung, bắt đầu nhạc |
| 2 · 20/10 | Typography 20/10, lời chúc | Ánh sáng, hoa nở, cánh hoa, chuyển động chữ |
| 3 · Vườn hoa | Lumi – linh vật hoa sen độc quyền | Chớp mắt, bay nhẹ, nhảy khi chạm, đổi lời kể |
| 4 · Kỷ niệm | Album Polaroid 3D | Xoay ảnh, carousel, xem phóng to, thêm ảnh xem thử |
| 5 · Thiệp chúc | 5 lời chúc phổ quát | Thiệp lật 3D khi nhấn, tim và cánh hoa bung ra |
| 6 · Bó hoa | Hoa sen và hoa hồng SVG | Các bông hoa xuất hiện theo lượt, nơ, lời chúc đặc biệt |
| 7 · Kết | Lời chúc lớn | Xem lại từ đầu hoặc xem lại lời chúc |

Website chỉ có **Explore Mode** (chuyển cảnh bằng cuộn/vuốt/click), điều khiển nhạc và âm lượng, thanh tiến trình, hỗ trợ mobile và cài đặt *reduced motion*.

## 🚀 Đăng lên GitHub Pages để mọi người xem

### Cách đơn giản nhất (không cần biết code)

1. Giải nén file ZIP được cung cấp.
2. Truy cập [github.com/new](https://github.com/new), tạo repository mới. Ví dụ: `pink-blooming-dream`. Chọn **Public** nếu muốn mọi người xem được.
3. Mở repository và nhấn **Add file → Upload files** (hoặc **uploading an existing file**).
4. **Kéo và thả toàn bộ nội dung BÊN TRONG thư mục `pink-blooming-dream`** lên GitHub: `index.html`, `assets/`, `manifest.webmanifest`, `.nojekyll`, `README.md`... Nhớ giữ nguyên cấu trúc thư mục.
5. Nhấn **Commit changes**.
6. Vào **Settings → Pages → Build and deployment**. Ở **Source**, chọn `Deploy from a branch`, chọn `main` và `/(root)`, rồi **Save**.
7. Chờ GitHub xử lý bản đăng. Link thường có dạng:

   `https://TEN-TAI-KHOAN.github.io/pink-blooming-dream/`

**Lưu ý:** GitHub không tự giải nén file ZIP khi bạn upload nguyên file ZIP; cần **giải nén trước rồi upload các file bên trong**. Đừng để toàn bộ source nằm trong một thư mục con bên dưới `index.html` nếu chọn `/(root)`.

### Xem thử trên máy trước khi đăng

**Cách 1 – nhanh nhất (không cần cài gì):**

1. Giải nén ZIP bằng **Extract All / Giải nén tất cả** (không mở `index.html` bên trong cửa sổ ZIP).
2. Mở thư mục `pink-blooming-dream` vừa được giải nén. Phải thấy `index.html` **cùng cấp** với thư mục `assets`.
3. Nhấp đúp **`index.html`**. Trình duyệt sẽ hiện **hộp quà hồng và nút “Bắt đầu khám phá”**. Nhấp nút để bắt đầu nhạc.

**Cách 2 – nếu máy tính có chính sách bảo mật chặn file cục bộ:**

- Nếu có Python: chạy file `START_LOCAL_WINDOWS.bat` hoặc mở terminal trong thư mục website và chạy `py -m http.server 8000` (cũng có thể dùng `python -m http.server 8000`).
- Mở `http://localhost:8000` trên trình duyệt; hoặc dùng **Live Server** trong VS Code.

**Khắc phục khi vẫn chỉ thấy nền hồng:** Đảm bảo bạn mở file `index.html` của **bản sửa lỗi** chứ không phải bản ZIP cũ; kiểm tra xem đường dẫn `assets/js/app.js` và `assets/css/style.css` có thật bên cạnh `index.html`, sau đó nhấn `Ctrl + F5` để tải lại. Nếu bạn đã đăng GitHub, hãy đợi Pages deploy xong rồi tải lại bằng `Ctrl + F5`.

## 🖼️ Thêm ảnh thật sau này

1. Chép ảnh vào `assets/images/`, ví dụ `photo-01.jpg`, `photo-02.png`.
2. Mở `assets/js/content.js`.
3. Trong `GALLERY`, chỉnh trường `file`:

```js
const GALLERY = [
  { file: 'photo-01.jpg', caption: 'Một ngày thật vui', note: 'Kỷ niệm đáng nhớ' },
  { file: 'photo-02.png', caption: 'Nụ cười rạng rỡ', note: 'Những điều dễ thương' },
  // ...
];
```

4. Commit và push các thay đổi lên GitHub. Sau khi trang cập nhật, ảnh sẽ xuất hiện.

**Giữ nguyên nội dung ảnh gốc:** Website dùng `object-fit: contain`, không bóp méo khuôn mặt. Ảnh chưa có sẽ hiển thị khung `YOUR PHOTO HERE` — không dùng stock thay thế.

**Xem thử nhanh:** Ở phân cảnh album, bấm **Thêm ảnh của bạn**. Ảnh hiện trong phiên duyệt hiện tại, nhưng **không được tải lên máy chủ** và sẽ biến mất khi làm mới. Muốn ảnh xuất hiện cho mọi người, hãy làm theo 4 bước phía trên.

## 🎵 Nhạc nền

Đã tích hợp sẵn file:

`assets/audio/nhac-nen-20-10.mp3`

File này **được tách từ video mới nhất `Download (1)(1).mp4` do bạn cung cấp**, có thời lượng khoảng 43,5 giây. **Toàn bộ 7 phân cảnh chỉ dùng một file nhạc này**. Website chỉ bắt đầu phát nhạc khi người xem nhấn **Bắt đầu khám phá**; nhạc tự động phát lại từ đầu khi hết bài (`loop`) và không bị dừng, đổi bài hoặc trở lại đầu khi chuyển cảnh. Có nút loa bật/tắt và nút chỉnh âm lượng. Kể cả khi người xem chọn **Xem lại từ đầu**, nhạc vẫn tiếp tục ở vị trí đang phát; chỉ trang web được chuyển về cảnh mở đầu.

Để thay nhạc, chỉ cần thay file MP3 tại cùng đường dẫn hoặc đổi `audioFile` trong `assets/js/content.js`.

> **Về bản quyền:** Việc trích âm thanh từ video người dùng đưa lên không đồng nghĩa có giấy phép phát hành bài hát công khai. Hãy đảm bảo bạn có quyền sử dụng và chia sẻ bản nhạc nếu mở website cho tất cả mọi người trên Internet.

## ✏️ Chỉnh câu chúc, thời gian, màu sắc

- `assets/js/content.js`: tiêu đề, lời chúc, tên ảnh và file nhạc.
- `assets/css/style.css`: toàn bộ phối màu, kiểu chữ, responsive và hoạt ảnh CSS. Đầu file có biến `--pink`, `--soft`, `--pale`, `--plum`...
- `assets/js/scenes.js`: bố cục HTML của 7 phân cảnh.
- `assets/js/illustrations.js`: linh vật Lumi, những bông hoa, bó hoa và icon SVG vẽ riêng.
- `assets/js/particles.js`: hệ thống Canvas cánh hoa, trái tim và hạt sáng.
- `assets/js/audio.js`: một audio player duy nhất, phát lặp, fade-in/fade-out.
- `assets/js/app.js`: quản lý scene, chuyển chế độ, thời gian tự động và tương tác.

## 📁 Cấu trúc thư mục

```text
pink-blooming-dream/
├── .nojekyll
├── index.html
├── manifest.webmanifest
├── README.md
└── assets/
    ├── audio/
    │   └── nhac-nen-20-10.mp3
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── favicon.svg
    │   └── README.txt
    └── js/
        ├── app.js
        ├── audio.js
        ├── content.js
        ├── illustrations.js
        ├── particles.js
        └── scenes.js
```

## 🔎 Ghi chú kỹ thuật

- Website sử dụng **JavaScript classic scripts** tải theo thứ tự trong `index.html`, tránh lỗi CORS với `file://`. Đường dẫn ảnh và âm thanh được tính tương đối từ `document.baseURI`, nên vẫn chạy được trên GitHub Pages dạng project (`/ten-repo/`) hoặc tên miền riêng.
- Không cần API key, không có backend, không thu thập dữ liệu hay tải ảnh xem thử lên máy chủ.
- Cánh hoa/trái tim là vector Canvas được giới hạn số lượng phù hợp màn hình; hình minh họa là SVG do mã nguồn dựng ra.
- Hỗ trợ `prefers-reduced-motion` để giảm hoạt ảnh với người dùng có nhu cầu.
- Trên thiết bị di động, video/nhạc có âm thanh phải được khởi động bằng một lần người dùng bấm/chạm, do chính sách trình duyệt.

**Made with petals, smiles & a little bit of magic. 🌷**

# Thông Số Kiến Trúc Thiết Kế

## Giới Thiệu
Thư viện này giúp bạn quản lý và áp dụng các thông số thiết kế một cách dễ dàng cho các dự án web của bạn. Bạn có thể định nghĩa màu sắc, phông chữ, spacing, và các kích thước khác nhau để tạo nên sự nhất quán trong giao diện.

## Cài Đặt
```bash
npm install thong-so-kien-truc-thiet-ke
```

## Sử Dụng
```javascript
import designSystem from 'thong-so-kien-truc-thiet-ke';

designSystem.setColors({ primary: '#3498db', secondary: '#2ecc71' });
console.log(designSystem.getColors().primary);  // #3498db
```

## Tính Năng
- Quản lý màu sắc và phông chữ
- Dễ dàng tuỳ chỉnh các thông số
- Hỗ trợ nhiều chủ đề cho giao diện

## Đóng Góp
Mọi đóng góp đều được hoan nghênh! Vui lòng tạo pull request với mô tả cụ thể về sự thay đổi.
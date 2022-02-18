# Chuyển đổi số thành dạng chữ Việt Nam
Chuyển đổi số thành dạng chữ Việt Nam, hỗ trợ lên đến hàng trăm tỷ

# Cách sử dụng
Cài đặt thư viện
```
npm install @devjoyvn/convert-number-vn
```

Trong file js:
```
const { to_vietnamese } = require('devjoy-convert-number-vn')

function test() {
    console.log(to_vietnamese(10110101010));
}

test(); //mười tỷ một trăm mười triệu một trăm lẻ một nghìn không trăm mười
```
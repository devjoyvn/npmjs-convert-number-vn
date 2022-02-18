
const dvBlock = '1 nghìn triệu tỷ'.split(' ');

const defaultNumbers = ' hai ba bốn năm sáu bảy tám chín';

const chuHangDonVi = ('1 một' + defaultNumbers).split(' ');
const chuHangChuc = ('lẻ mười' + defaultNumbers).split(' ');
const chuHangTram = ('không một' + defaultNumbers).split(' ');

function to_vietnamese(number) {
    var str = parseInt(number) + '';
    var i = 0;
    var arr = [];
    var index = str.length;
    var result  = [];
    var rsString = '';

    if (index == 0 || str == 'NaN') {
        return '';
    }

    // Chia chuỗi số thành một mảng từng khối có 3 chữ số
    while (index >= 0) {
        arr.push(str.substring(index, Math.max(index - 3, 0)));
        index -= 3;
    }

    // Lặp từng khối trong mảng trên và convert từng khối đấy ra chữ Việt Nam
    for (i == arr.length - 1; i >= 0; i--) {
        if (arr[i] != '' && arr[i] != '000') {
            result.push(convert_block_three(arr[i]));

            // Thêm đuôi của mỗi khối
            if (dvBlock[i]) {
                result.push(dvBlock[i]);
            }
        }
    }

    rsString = result.join(' ');
    // Xóa những ký tự thừa
    return rsString.replace(/[0-9]/g, '').replace(/  /g,' ').replace(/ $/,'');
}

function convert_block_three(number) {
    if (number == '000') return '';

    var _a = number + '';

    switch (_a.length) {
        case 0: return '';
        case 1: return chuHangDonVi[_a];
        case 2: return convert_block_two(_a);
        case 3:
            var chuc_dv = '';
            if (_a.slice(1,3) != '00') {
                chuc_dv = convert_block_two(_a.slice(1,3));
            }
            var tram = chuHangTram[_a[0]] + ' trăm';
            return tram + ' ' + chuc_dv;
    }
}

function convert_block_two(number) {
    var dv = chuHangDonVi[number[1]];
    var chuc = chuHangChuc[number[0]];
    var append = '';

    // Nếu số hàng đơn vị là 5
    if (number[0] > 0 && a[1] == 5) {
        dv = 'lăm';
    }

    // Nếu số hàng chục lớn hơn 1
    if (number[0] > 1) {
        append = ' mươi';

        if (number[1] == 1) {
            dv = ' mốt';
        }
    }

    return chuc + '' + append + ' ' + dv;
}

module.exports = {
    to_vietnamese,
}
"use strict";
function printRightOrientedTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        // Menambahkan spasi sebelum bintang untuk membentuk segitiga kanan
        for (let j = 0; j < height - i; j++) {
            row += ' ';
        }
        // Menambahkan bintang sesuai dengan nomor baris
        for (let k = 0; k < i; k++) {
            row += '*';
        }
        console.log(row);
    }
}
printRightOrientedTriangle(13);
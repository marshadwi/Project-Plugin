function printRightOrientedTriangle(height: number): void {
    for (let i = 1; i <= height; i++) {
        let row: string = '';
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


- Fungsi 'printRightOrientedTriangle' menerima satu parameter height yang merupakan tinggi segitiga yang akan dicetak
- Loop 'for' pertama (let i = 1; i <= height; i++) berjalan dari 1 hingga nilai 'height'. Setiap iterasi mewakili satu baris dari segitiga yang akan dicetak.
- Variabel 'let row' memiliki tipe data string. Variabael ini digunakan untuk menyimpan karakter yang akan dicetak pada baris tersebut.
- Loop 'for' kedua (let j = 0; j < height - i; j++) digunakan untuk menambahkan spasi sebelum bintang pada setiap baris. Jumlah spasi yang ditambahkan  berkurang seiring dengan bertambahnya nilai i, sehingga menghasilkan bentuk segitiga kanan.
- row += ' ';: Menambahkan satu spasi ke dalam variabel row.
- Loop 'for' ketiga (let k = 0; k < i; k++) digunakan untuk menambahkan bintang ke dalam baris. Jumlah bintang yang ditambahkan sama dengan nilai 'i' pada iterasi tersebut.
- row += '*';: Menambahkan satu bintang ke dalam variabel row.
- Untuk mencetak baris menggunakan 'console.log(row); yang berisi spasi dan bintang ke konsol.
- Untuk memanggil fungsi, menggunakan 'printRightOrientedTriangle(13);' dengan tinggi segitiga 13.


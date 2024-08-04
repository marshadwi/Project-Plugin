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

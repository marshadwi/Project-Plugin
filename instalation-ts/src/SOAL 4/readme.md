// Function to calculate the grade based on score
function getGrade(score: number): string {
    if (score >= 90 && score <= 100) return 'A';
    if (score >= 80 && score < 90) return 'B';
    if (score >= 70 && score < 80) return 'C';
    if (score >= 60 && score < 70) return 'D';
    return 'E';
}

// Function to calculate the average and grade
function calculateAverageAndGrade(
    webProgramming: number,
    computerProgramming: number,
    statistics: number,
    databaseSystems: number
): { average: number; grade: string } {
    // Validate input
    if (
        webProgramming === undefined ||
        computerProgramming === undefined ||
        statistics === undefined ||
        databaseSystems === undefined ||
        isNaN(webProgramming) ||
        isNaN(computerProgramming) ||
        isNaN(statistics) ||
        isNaN(databaseSystems)
    ) {
        throw new Error('All values must be provided and be valid numbers.');
    }

    // Calculate average
    const average = (webProgramming + computerProgramming + statistics + databaseSystems) / 4;

    // Determine grade
    const grade = getGrade(average);

    return { average, grade };
}

// Example usage
try {
    const webProgramming = 85;
    const computerProgramming = 90;
    const statistics = 78;
    const databaseSystems = 88;

    const result = calculateAverageAndGrade(webProgramming, computerProgramming, statistics, databaseSystems);
    console.log(`Average: ${result.average.toFixed(2)}`);
    console.log(`Grade: ${result.grade}`);
} catch (error) {
    console.error(Error);
}

- Menggunakan fungsi 'getGrade' untuk menentukan grade berdasarkan nilai.
- Fungsi 'getGrade' menerima satu parameter 'score' yang merupakan angka (number) dan mengembalikan nilai berupa 'string' yang merepresentasikan grade.
- Untuk menghitung rata-rata nilai dari empat mata pelajaran dan menentukan grade berdasarkan rata-rata tersebut, menggunakan fungsi 'calculateAverageAndGrade'
- Fungsi 'calculateAverageAndGrade' menerima empat nilai sebagai parameternya yaitu 'webProgramming', 'computerProgramming', 'statistics', dan 'databaseSystems'.
- Kode 'undefined' berfungsi untuk memeriksa apakah salah satu dari empat parameter ('webProgramming', 'computerProgramming', 'statistics', 'databaseSystems') tidak diberikan atau tidak terdefinisi ('undefined').
- Jika salah satu parameter tersebut 'undefined', kondisi ini akan menjadi true.
- Menggunakan kode 'isNaN' (Is Not a Number) untuk memeriksa apakah salah satu dari empat parameter bukan angka yang valid.
- 'isNaN' mengembalikan 'true' jika nilai yang diperiksa bukan angka atau tidak dapat dikonversi menjadi angka.
- Jika salah satu dari kondisi bernilai 'true' (artinya ada parameter bukan angka yang valid), maka 'if' akan dijalankan.
- Dalam blok 'if', akan dilempar sebuah Error dengan pesan "All values must be provided and be valid numbers.".
- 'throw new Error' akan menghentikan eksekusi fungsi dan mengeluarkan pesan error.
- Menghitung rata-rata dengan menjumlahkan keempat nilai mata pelajaran dan membaginya dengan 4 menggunakan variabel 'const' dengan diisi parameter 'average'.
- Fungsi 'getGrade' dipanggil dengan rata-rata yang sudah dihitung untuk menentukan gradenya.
- Mengembalikan objek 'average' (rata-rata) dan 'grade' menggunakan 'return'.
- 
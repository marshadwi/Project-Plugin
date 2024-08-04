# SOAL 2A
interface LyricsData {
    artist: string;
    songTitle: string;
    songLyrics: string;
    songLyricsArr: string[];
}

interface LyricsResponse {
    status: boolean;
    data: LyricsData;
}

let lirik_lagu: LyricsResponse = {
    status: true,
    data: {
        artist: "Avenged Sevenfold",
        songTitle: "Little Piece of Heaven",
        songLyrics: "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
        songLyricsArr: [
            "Before the story begins, is it such a sin",
            "For me to take what's mine, until the end of time?",
            "We were more than friends, before the story ends",
            "And I will take what's mine, create what God would never design",
            "Our love had been so strong for far too long",
            // lirik selanjutnya...
        ]
    }
};

let Ubahdata: LyricsResponse = {
    ...lirik_lagu,
    data: {
        ...lirik_lagu.data,
        artist: "Marsha Dwi Lucyana",
        songTitle: "Data Analyst"
    }
};

console.log(Ubahdata);


- LyricsData merupakan struktur yang berisi nama artis, songTitle, songLyrics, songLyricsArr dengan tipe data string
- LyricsResponse merupakan struktur yang berisi status boolean (benar atau salah) dan data lirik lagu.
- status: True atau Benar (karna lirik lagu ditemukan).
- data: Berisi tentang lagu "Little Piece of Heaven" dari Avenged Sevenfold.
- Membuat objek baru 'Ubahdata' dengan menyalin semua data dari 'lirik_lagu' dan kemudian mengubah nama artis menjadi "Marsha Dwi Lucyana" dan judul lagu menjadi "Data Analyst". Menggunakan spread operator '...' untuk menyalin semua isi dari objek 'lirik_lagu' dan 'lirik_lagu.data' agar tidak menuliskannya lagi satu per satu.
- Untuk melihat data yang sudah diubah, dengan mencetak objek 'Ubahdata' ke konsol.

# SOAL 2B
interface LyricsData {
    artist: string;
    songTitle: string;
    songLyrics: string;
    songLyricsArr: string[];
}

interface LyricsResponse {
    status: boolean;
    data: LyricsData;
}

let lirikLagu: LyricsResponse = {
    status: true,
    data: {
        artist: "Avenged Sevenfold",
        songTitle: "Little Piece of Heaven",
        songLyrics: "Before the story begins, is it such a sin\nFor me to take what's mine, until the end of time?\nWe were more than friends, before the story ends\nAnd I will take what's mine, create what God would never design\nOur love had been so strong for far too long",
        songLyricsArr: [
            "Before the story begins, is it such a sin",
            "For me to take what's mine, until the end of time?",
            "We were more than friends, before the story ends",
            "And I will take what's mine, create what God would never design",
            "Our love had been so strong for far too long",
            // lirik selanjutnya...
        ]
    }
};

let ambildata: string | undefined = lirikLagu.data.songLyricsArr.find(line => line.includes("For me to take what's mine, until the end of time?"));

console.log(ambildata);

- LyricsData merupakan struktur yang berisi nama artis, songTitle, songLyrics, songLyricsArr dengan tipe data string
- Status 'boolean' menunjukkan apakah respons berhasil (true) atau tidak 
- Objek 'data' berisi data lirik lagu, sesuai dengan tipe 'LyricsData'.
- lirikLagu.data.songLyricsArr.'find': Metode find digunakan untuk mencari elemen dalam array songLyricsArr.
    line => line.includes("For me to take what's mine, until the end of time?"): Fungsi callback yang mengecek apakah setiap elemen (line) dalam array mengandung substring "For me to take what's mine, until the end of time?".
- Untuk melihat data yang sudah diubah, dengan mencetak objek 'Ubahdata' ke konsol.
    - Jika ditemukan, 'ambildata' akan berisi baris yang mengandung substring tersebut dan akan ditampilkan di konsol.
    - Jika tidak ditemukan, 'ambildata' akan berisi undefined dan undefined akan ditampilkan di konsol.
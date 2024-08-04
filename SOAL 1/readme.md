# html 

- <!DOCTYPE html>: Menyatakan bahwa dokumen ini merupakan dokumen HTML5.
- <html lang="en">: Membuka elemen HTML dan menetapkan bahasa dokumen ke bahasa Inggris.
- <meta charset="UTF-8">: Mengatur encoding karakter ke UTF-8.
- <meta name="viewport" content="width=device-width, initial-scale=1.0">: Mengatur tampilan pada perangkat mobile.
- <title>Profil Saya</title>: Menetapkan judul halaman.
- <link rel="stylesheet" href="style.css">: Menghubungkan dokumen HTML dengan file CSS eksternal untuk styling.
- Membuka bagian utama konten halaman web dengan <body>
    - <header>
        <h1>Profil Saya</h1>
    </header> untuk membuat header halaman dengan judul "Profil Saya".
- Membuat navigasi 'home'(beranda), 'about'(tentang), 'skills'(keahlian), dan 'contact'(kontak)dengan tautan di halaman dengan menggunakan
    <nav>
        <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#skills">Keahlian</a></li>
            <li><a href="#contact">Kontak</a></li>
        </ul>
    </nav>
- Membuat bagian utama konten halaman mnenggunakan <main>
- Menggunakan elemen <section> untuk mengelompokkan konten yang berbeda dari halaman profil. 
- Menambahkan elemen <heading> didalam elemen <section> untuk membuat judul tersendiri.
- Untuk membuat teks dalam setiap <heading>, menggunakan elemen <p>
- Untuk menampilkan gambar dari file atau sumber eksternal dalam dokumen HTML, menggunakan elemen <img>. 
- Menggunakan atribut 'src' untuk menentukan URL dari gambarnya.
- Menggunakan atribut 'alt' untuk memberikan deskripsi pada gambar.
- Memberi informasi hak cipta dengan menggunakan elemen <footer>.

# css

1. Penataan Umum
margin: 0; padding: 0; box-sizing: border-box;: Menghapus margin dan padding default dari semua elemen dan memastikan bahwa padding dan border dimasukkan dalam lebar dan tinggi elemen.
2. Styling HTML dan Body
- html, body: Mengatur tinggi elemen html dan body ke 100% viewport.
- body: Mengatur font, jarak antar baris, warna teks, latar belakang, dan mengatur layout dengan Flexbox untuk menempatkan elemen dalam kolom.
3. Header Styling
- header: Mengatur warna latar belakang, teks, padding, dan perataan teks di tengah untuk elemen header.
- header h1: Mengatur ukuran font dan margin untuk judul di header.
4. Navigation Styling
- nav ul: Menampilkan item daftar navigasi secara horizontal dan menempatkan di tengah.
- nav ul li a: Mengatur gaya link, termasuk warna, padding, transisi efek hover, dan sudut membulat.
5. Section Styling
section: Menetapkan margin bawah, padding, warna latar belakang, sudut membulat, dan bayangan untuk setiap section.
6. Heading and Paragraph Styling
- main h2, section h2: Mengatur ukuran font, margin bawah, warna, dan perataan teks untuk heading di dalam main dan section.
- main p, section p: Mengatur ukuran font, jarak antar baris, margin bawah, dan perataan teks untuk paragraf di dalam main dan section.
7. Skills
- skills ul: Menampilkan item keterampilan secara horizontal dengan pembungkus dan jarak antar item.
- skills ul li: Gaya untuk setiap item keterampilan, termasuk ukuran font, penataan, latar belakang, sudut membulat, padding, bayangan, dan ukuran.
- skill-icon: Menetapkan ukuran gambar ikon keterampilan.
8. Address
- address: Menetapkan gaya teks untuk elemen address, termasuk margin dan perataan teks.
- address p: Jarak bawah pada paragraf di address.
- address a: Gaya tautan dalam address, termasuk warna dan teks tidak bergaris bawah.
9. Footer
Menetapkan warna latar belakang, teks, perataan teks, padding, dan lebar untuk footer.
10. Media Query dan Responsivitas
- Responsivitas: Media query di bawah @media (max-width: 768px) menyesuaikan layout untuk perangkat dengan layar kecil. Mengubah flex-direction dari horizontal ke vertikal di navigasi dan mengurangi padding di elemen main dan footer membantu memastikan halaman tetap teratur dan mudah dibaca di berbagai ukuran layar.
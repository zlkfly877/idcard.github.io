document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai dari input
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const school = document.getElementById('school').value;
    const hobby = document.getElementById('hobby').value;
    const favColor = document.getElementById('favColor').value;

    // Mengisi data di ID card
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardDob').textContent = dob;
    document.getElementById('cardSchool').textContent = school;
    document.getElementById('cardHobby').textContent = hobby;
    document.getElementById('cardFavColor').textContent = favColor;

    // Menampilkan ID card dengan animasi
    const idCardContainer = document.getElementById('idCardContainer');
    idCardContainer.style.display = 'flex';
    document.getElementById('idCard').classList.add('show');
});

// Event listener untuk tombol download
document.getElementById('downloadButton').addEventListener('click', () => {
    const idCard = document.getElementById('idCard');
    
    // Menangkap ID card dengan html2canvas
    html2canvas(idCard, {
        scale: 4, // Skala lebih tinggi untuk kualitas gambar yang lebih baik
        width: 700,  // Tentukan ukuran canvas (lebar)
        height: 350, // Tentukan ukuran canvas (tinggi)
        useCORS: true, // Menghindari masalah dengan CORS (jika ada gambar eksternal)
        logging: true, // Mengaktifkan log untuk debugging
        backgroundColor: null, // Mengatur latar belakang menjadi transparan
        letterRendering: true, // Memastikan teks dirender dengan benar
    }).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'id-card.png'; // Nama file hasil download
        link.href = canvas.toDataURL('image/png'); // Konversi canvas ke URL gambar
        link.click(); // Trigger unduhan
    }).catch((error) => {
        console.error('Terjadi kesalahan saat menggunakan html2canvas:', error);
    });
});

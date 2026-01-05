/**
 * Notifikasi Sosial Media
 * Popup notifikasi yang muncul setelah user berada di dashboard
 * DILARANG muncul saat login berhasil
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah halaman saat ini adalah dashboard
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'dashboard.html') return;
    
    // Tunggu halaman selesai dimuat
    setTimeout(() => {
        showSocialNotification();
    }, 1500); // Delay 1.5 detik setelah dashboard tampil
    
    // Fungsi untuk menampilkan notifikasi sosial media
    function showSocialNotification() {
        const popup = document.getElementById('socialPopup');
        if (popup) {
            popup.style.display = 'block';
            
            // Tambah event listener untuk tombol close
            const closeBtn = document.getElementById('closePopup');
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    popup.style.display = 'none';
                });
            }
            
            // Auto hide setelah 30 detik
            setTimeout(() => {
                if (popup.style.display !== 'none') {
                    popup.style.opacity = '0';
                    popup.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        popup.style.display = 'none';
                    }, 500);
                }
            }, 30000);
        }
    }
});
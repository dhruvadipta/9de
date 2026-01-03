// Fungsi untuk menangani login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const notificationPopup = document.getElementById('notificationPopup');
    const goToDashboardBtn = document.getElementById('goToDashboard');
    const closePopupBtn = document.getElementById('closePopup');
    
    // Kredensial demo (bisa diganti nanti)
    const demoUsername = 'alumni';
    const demoPassword = 'kenangan123';
    
    // Event listener untuk form login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Validasi login sederhana
        if (username.trim() === '' || password.trim() === '') {
            alert('Harap isi username dan password!');
            return;
        }
        
        // Untuk demo, kita terima semua login
        // Tapi khusus kredensial demo akan muncul popup khusus
        if (username === demoUsername && password === demoPassword) {
            // Tampilkan popup notifikasi
            notificationPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Simpan status login di localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
        } else {
            // Login dengan nama pengguna lain
            // Tampilkan popup notifikasi juga
            notificationPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Simpan status login di localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            
            // Update ucapan di popup
            const popupTitle = document.querySelector('.popup-header h2');
            popupTitle.innerHTML = `<i class="fas fa-bell"></i> Selamat Datang, ${username}!`;
        }
    });
    
    // Tombol untuk pergi ke dashboard
    goToDashboardBtn.addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });
    
    // Tombol untuk menutup popup
    closePopupBtn.addEventListener('click', function() {
        notificationPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Tutup popup saat klik di luar konten popup
    notificationPopup.addEventListener('click', function(e) {
        if (e.target === notificationPopup) {
            notificationPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Auto-focus pada input username saat halaman dimuat
    document.getElementById('username').focus();
});
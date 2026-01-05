/**
 * Sistem Autentikasi
 * File ini menangani login, logout, dan validasi pengguna
 * BAGIAN INI BOLEH DIEDIT oleh pemula untuk menyesuaikan username/password
 */

// Data pengguna default (bisa diedit)
const defaultUsers = [
    {
        username: "siswa",
        password: "smptahun2024",
        name: "Siswa SMP"
    },
    {
        username: "guru",
        password: "gurukelas9",
        name: "Guru Kelas"
    },
    {
        username: "admin",
        password: "admin123",
        name: "Admin Kelas"
    }
];

// Inisialisasi data pengguna di localStorage
function initializeUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Cek apakah pengguna sudah login
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Jika di halaman login dan sudah login, redirect ke dashboard
    if (currentPage === 'index.html' && isLoggedIn === 'true') {
        window.location.href = 'dashboard.html';
        return false;
    }
    
    // Jika tidak di halaman login dan belum login, redirect ke login
    if (currentPage !== 'index.html' && isLoggedIn !== 'true') {
        window.location.href = 'index.html';
        return false;
    }
    
    return true;
}

// Fungsi login
function login(username, password) {
    initializeUsers();
    const users = JSON.parse(localStorage.getItem('users'));
    
    // Cari pengguna dengan username dan password yang sesuai
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Set status login dan informasi pengguna
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', user.name);
        localStorage.setItem('currentUsername', username);
        
        // Redirect ke dashboard
        window.location.href = 'dashboard.html';
        return true;
    }
    
    return false;
}

// Fungsi logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUsername');
    window.location.href = 'index.html';
}

// Fungsi tambah pengguna baru (bisa digunakan untuk registrasi sederhana)
function addUser(username, password, name) {
    initializeUsers();
    const users = JSON.parse(localStorage.getItem('users'));
    
    // Cek apakah username sudah ada
    if (users.some(u => u.username === username)) {
        return false;
    }
    
    // Tambah pengguna baru
    users.push({ username, password, name });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

// Event listener untuk form login
document.addEventListener('DOMContentLoaded', function() {
    // Cek autentikasi saat halaman dimuat
    checkAuth();
    
    // Tambah event listener untuk form login jika ada
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (login(username, password)) {
                // Login berhasil, form akan redirect ke dashboard
            } else {
                alert('Username atau password salah!');
            }
        });
    }
    
    // Tambah event listener untuk tombol logout jika ada
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            logout();
        });
    }
});

// Export fungsi untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login, logout, checkAuth, addUser };
}
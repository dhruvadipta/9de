// Data untuk website kenangan kelas 9D
const classData = {
    className: "9D",
    schoolName: "SMP Negeri 1 Kenangan Indah",
    year: "2021-2024",
    totalMembers: 36,
    
    // Data foto dengan kategori
    gallery: [
        { id: 1, title: "Foto Kelas 7", category: "class", description: "Foto pertama kita saat masih kelas 7", url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 24, date: "2021-07-15" },
        { id: 2, title: "Upacara 17 Agustus", category: "activity", description: "Upacara bendera di sekolah", url: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 18, date: "2021-08-17" },
        { id: 3, title: "Study Tour ke Museum", category: "activity", description: "Bersama-sama jalan-jalan ke museum", url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 32, date: "2022-03-22" },
        { id: 4, title: "Pentas Seni", category: "activity", description: "Pentas seni kelas 9D", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 28, date: "2022-10-05" },
        { id: 5, title: "Lomba Basket", category: "activity", description: "Juara 1 lomba basket antar kelas", url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 45, date: "2022-11-12" },
        { id: 6, title: "Foto Studio Kelas", category: "studio", description: "Foto studio resmi kelas 9D", url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 37, date: "2023-01-20" },
        { id: 7, title: "Foto bersama Wali Kelas", category: "class", description: "Foto bersama Bu Sri Mulyani", url: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 29, date: "2023-05-15" },
        { id: 8, title: "Acara Perpisahan", category: "graduation", description: "Acara perpisahan sekolah", url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 52, date: "2024-06-10" },
        { id: 9, title: "Fun Day di Pantai", category: "fun", description: "Liburan bersama ke pantai", url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 41, date: "2023-08-25" },
        { id: 10, title: "Belajar Kelompok", category: "class", description: "Sesi belajar kelompok di perpustakaan", url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 22, date: "2023-09-18" },
        { id: 11, title: "Foto Individual", category: "studio", description: "Foto individual untuk buku kenangan", url: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 19, date: "2024-02-28" },
        { id: 12, title: "Wisuda Kelas 9", category: "graduation", description: "Upacara wisuda sekolah", url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", votes: 67, date: "2024-06-15" }
    ],
    
    // Timeline events
    timeline: [
        { id: 1, date: "Juli 2021", title: "Masuk Kelas 7D", description: "Pertama kali kita bertemu sebagai kelas 7D", icon: "fas fa-school" },
        { id: 2, date: "Agustus 2021", title: "Upacara 17 Agustus", description: "Upacara pertama bersama sebagai kelas", icon: "fas fa-flag" },
        { id: 3, date: "Desember 2021", title: "Pensi Akhir Tahun", description: "Pentas seni pertama kita bersama", icon: "fas fa-music" },
        { id: 4, date: "Maret 2022", title: "Study Tour", description: "Perjalanan ke museum nasional", icon: "fas fa-bus" },
        { id: 5, date: "Juli 2022", title: "Naik ke Kelas 8", description: "Menjadi kelas 8D dengan wali kelas baru", icon: "fas fa-chalkboard-teacher" },
        { id: 6, date: "November 2022", title: "Lomba Olahraga", description: "Juara 1 basket antar kelas", icon: "fas fa-trophy" },
        { id: 7, date: "Januari 2023", title: "Foto Studio", description: "Foto studio kelas untuk buku kenangan", icon: "fas fa-camera" },
        { id: 8, date: "Juli 2023", title: "Kelas 9D", description: "Akhirnya menjadi kakak kelas", icon: "fas fa-user-graduate" },
        { id: 9, date: "September 2023", title: "Try Out Nasional", description: "Persiapan menghadapi ujian", icon: "fas fa-graduation-cap" },
        { id: 10, date: "Juni 2024", title: "Wisuda & Perpisahan", description: "Hari terakhir kita bersama", icon: "fas fa-heart" }
    ],
    
    // Data anggota
    members: [
        { id: 1, name: "Ahmad Fauzi", role: "Ketua Kelas", type: "students", committee: true },
        { id: 2, name: "Budi Santoso", role: "Wakil Ketua", type: "students", committee: true },
        { id: 3, name: "Citra Ayu", role: "Sekretaris", type: "students", committee: true },
        { id: 4, name: "Dewi Lestari", role: "Bendahara", type: "students", committee: true },
        { id: 5, name: "Eko Prasetyo", role: "Anggota", type: "students", committee: false },
        { id: 6, name: "Fitriani", role: "Anggota", type: "students", committee: false },
        { id: 7, name: "Gunawan", role: "Anggota", type: "students", committee: false },
        { id: 8, name: "Hana Sari", role: "Anggota", type: "students", committee: false },
        { id: 9, name: "Indra Jaya", role: "Anggota", type: "students", committee: false },
        { id: 10, name: "Joko Susilo", role: "Anggota", type: "students", committee: false },
        { id: 11, name: "Kartika Dewi", role: "Anggota", type: "students", committee: false },
        { id: 12, name: "Lukman Hakim", role: "Anggota", type: "students", committee: false },
        { id: 13, name: "Maya Sari", role: "Anggota", type: "students", committee: false },
        { id: 14, name: "Nur Hidayat", role: "Anggota", type: "students", committee: false },
        { id: 15, name: "Oki Setiawan", role: "Anggota", type: "students", committee: false },
        { id: 16, name: "Putri Ramadhani", role: "Anggota", type: "students", committee: false }
    ],
    
    teachers: [
        { id: 101, name: "Bu Sri Mulyani", role: "Wali Kelas", type: "teachers", committee: true },
        { id: 102, name: "Pak Budi Santoso", role: "Guru Matematika", type: "teachers", committee: false },
        { id: 103, name: "Bu Siti Aminah", role: "Guru Bahasa Indonesia", type: "teachers", committee: false },
        { id: 104, name: "Pak Joko Widodo", role: "Guru IPA", type: "teachers", committee: false },
        { id: 105, name: "Bu Ratna Sari", role: "Guru Bahasa Inggris", type: "teachers", committee: false }
    ],
    
    // Pesan rahasia
    secretMessages: [
        { id: 1, to: "Semua Teman 9D", message: "Aku akan selalu ingat kalian semua. Terima kasih untuk 3 tahun indah!", password: "kenangan9D", date: "2024-06-01" },
        { id: 2, to: "Ketua Kelas", message: "Terima kasih atas kepemimpinanmu selama ini. Kamu ketua kelas terbaik!", password: "", date: "2024-06-05" },
        { id: 3, to: "Wali Kelas", message: "Terima kasih Bu Sri atas bimbingan dan kasih sayangnya selama ini.", password: "ibuSri", date: "2024-06-10" },
        { id: 4, to: "Seseorang Spesial", message: "Aku suka kamu sejak kelas 7, tapi tak pernah berani mengatakannya.", password: "heart123", date: "2024-06-12" },
        { id: 5, to: "Teman Main Game", message: "Mabar COD sampai subuh adalah kenangan terbaik!", password: "gamer9D", date: "2024-06-08" }
    ],
    
    // Games data
    games: [
        { id: 1, name: "Memory Match", icon: "fas fa-brain", description: "Temukan pasangan foto kelas", highScore: 1500 },
        { id: 2, name: "Quiz 9D", icon: "fas fa-question-circle", description: "Uji pengetahuan tentang kelas", highScore: 850 },
        { id: 3, name: "Typing Race", icon: "fas fa-keyboard", description: "Lomba mengetik cepat", highScore: 320 },
        { id: 4, name: "Photo Puzzle", icon: "fas fa-puzzle-piece", description: "Susun puzzle foto kelas", highScore: 1200 }
    ]
};

// Inisialisasi ketika halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah user sudah login
    checkLoginStatus();
    
    // Inisialisasi berdasarkan halaman
    if (document.querySelector('.login-page')) {
        initLoginPage();
    } else {
        initMainPage();
    }
    
    // Update waktu secara real-time
    updateCurrentTime();
    setInterval(updateCurrentTime, 60000);
});

// Fungsi untuk memeriksa status login
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('9D_loggedIn');
    const currentPage = window.location.pathname.split('/').pop();
    
    // Jika belum login dan bukan di halaman login, redirect ke login
    if (!isLoggedIn && currentPage !== 'login.html' && currentPage !== '') {
        window.location.href = 'login.html';
    }
    
    // Jika sudah login dan di halaman login, redirect ke halaman utama
    if (isLoggedIn && (currentPage === 'login.html' || currentPage === '')) {
        window.location.href = 'index.html';
    }
}

// Update waktu saat ini
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    
    const timeElements = document.querySelectorAll('#currentTime');
    timeElements.forEach(el => {
        if (el) el.textContent = timeString;
    });
}

// Inisialisasi halaman login
function initLoginPage() {
    // Setup login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performLogin();
        });
    }
    
    // Setup show password button
    const showPasswordBtn = document.getElementById('showPasswordBtn');
    if (showPasswordBtn) {
        showPasswordBtn.addEventListener('click', function() {
            const passwordInput = document.getElementById('password');
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                passwordInput.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    }
    
    // Setup quick login buttons
    const quickLoginButtons = document.querySelectorAll('.quick-login-btn');
    quickLoginButtons.forEach(button => {
        button.addEventListener('click', function() {
            const username = this.getAttribute('data-username');
            const password = this.getAttribute('data-password');
            
            document.getElementById('username').value = username;
            document.getElementById('password').value = password;
            
            // Efek visual pada tombol yang diklik
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Auto submit setelah 500ms
            setTimeout(() => {
                performLogin();
            }, 500);
        });
    });
    
    // Easter egg: password "forever9D"
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            if (this.value.toLowerCase() === 'forever9d') {
                showEasterEgg('login');
            }
        });
    }
}

// Fungsi untuk melakukan login
function performLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Animasi loading pada tombol login
    const loginButton = document.getElementById('loginButton');
    const originalText = loginButton.querySelector('.button-text').textContent;
    const originalIcon = loginButton.querySelector('.button-icon').className;
    
    loginButton.querySelector('.button-text').textContent = 'Memproses...';
    loginButton.querySelector('.button-icon').className = 'fas fa-spinner fa-spin';
    loginButton.disabled = true;
    
    // Simulasi proses login dengan delay
    setTimeout(() => {
        // Login sederhana dengan beberapa opsi
        const validLogins = [
            { user: '9D', pass: 'kenangan' },
            { user: 'guru', pass: 'bimbingan' },
            { user: 'admin', pass: 'admin9D' },
            { user: 'siswa', pass: 'siswa9D' }
        ];
        
        const isValid = validLogins.some(login => 
            login.user === username && login.pass === password
        );
        
        if (isValid || password === 'forever9D') {
            // Suara klik untuk feedback
            playSound('click');
            
            // Simpan status login
            localStorage.setItem('9D_loggedIn', 'true');
            localStorage.setItem('9D_username', username);
            if (rememberMe) {
                localStorage.setItem('9D_remember', 'true');
            }
            
            // Redirect dengan animasi
            loginButton.style.background = 'linear-gradient(135deg, #34c759, #30d158)';
            loginButton.querySelector('.button-text').textContent = 'Berhasil!';
            loginButton.querySelector('.button-icon').className = 'fas fa-check';
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            // Reset tombol
            loginButton.querySelector('.button-text').textContent = originalText;
            loginButton.querySelector('.button-icon').className = originalIcon;
            loginButton.disabled = false;
            
            // Animasi shake untuk error
            loginButton.style.animation = 'shake 0.5s';
            setTimeout(() => {
                loginButton.style.animation = '';
            }, 500);
            
            // Tampilkan pesan error
            showNotification('Login gagal', 'Username atau password salah. Coba: 9D / kenangan', 'error');
        }
    }, 1500);
}

// Inisialisasi halaman utama
function initMainPage() {
    // Setup tema (gelap/terang)
    setupTheme();
    
    // Setup sidebar navigation
    setupSidebar();
    
    // Setup music player
    setupMusicPlayer();
    
    // Setup notification center
    setupNotifications();
    
    // Setup countdown timer
    setupCountdownTimer();
    
    // Setup gallery dengan kategori
    setupGallery();
    
    // Setup timeline
    setupTimeline();
    
    // Setup anggota kelas
    setupMembers();
    
    // Setup chat room
    setupChatRoom();
    
    // Setup games
    setupGames();
    
    // Setup voting system
    setupVoting();
    
    // Setup pesan rahasia
    setupSecretMessages();
    
    // Setup pengaturan
    setupSettings();
    
    // Setup action buttons
    setupActionButtons();
    
    // Setup easter eggs
    setupEasterEggs();
    
    // Load initial data
    loadInitialData();
}

// Setup tema gelap/terang
function setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Cek preferensi tema yang disimpan
    const isDarkMode = localStorage.getItem('9D_darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
        if (darkModeToggle) darkModeToggle.checked = true;
    }
    
    // Toggle dari header
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isNowDark = document.body.classList.contains('dark-theme');
            
            // Update icon
            if (themeIcon) {
                themeIcon.className = isNowDark ? 'fas fa-sun' : 'fas fa-moon';
            }
            
            // Simpan preferensi
            localStorage.setItem('9D_darkMode', isNowDark);
            
            // Play sound
            playSound('click');
            
            // Show notification
            showNotification('Tema Diubah', `Mode ${isNowDark ? 'gelap' : 'terang'} diaktifkan`, 'info');
        });
    }
    
    // Toggle dari settings
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-theme', this.checked);
            if (themeIcon) {
                themeIcon.className = this.checked ? 'fas fa-sun' : 'fas fa-moon';
            }
            localStorage.setItem('9D_darkMode', this.checked);
            playSound('click');
        });
    }
}

// Setup sidebar navigation
function setupSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.ios-section');
    
    // Toggle sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('active');
            playSound('click');
        });
    }
    
    // Close sidebar
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('active');
            playSound('click');
        });
    }
    
    // Navigasi antar section
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                return;
            }
            
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Update menu aktif
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Tampilkan section yang sesuai
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
            
            // Tutup sidebar (untuk mobile)
            sidebar.classList.remove('active');
            
            // Scroll ke atas
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Play sound
            playSound('click');
        });
    });
    
    // Quick action cards
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const targetItem = document.querySelector(`.menu-item[data-section="${target}"]`);
            
            if (targetItem) {
                targetItem.click();
            }
        });
    });
}

// Setup music player
function setupMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const musicToggleSetting = document.getElementById('musicToggleSetting');
    const musicPlayer = document.getElementById('musicPlayer');
    const backgroundMusic = document.getElementById('backgroundMusic');
    
    let isPlaying = false;
    const musicTracks = [
        { title: "Kenangan 9D", artist: "Lagu Kenangan", src: "https://assets.mixkit.co/music/preview/mixkit-memories-128.mp3" },
        { title: "Persahabatan", artist: "Lagu Kelas", src: "https://assets.mixkit.co/music/preview/mixkit-school-days-123.mp3" },
        { title: "Masa Indah", artist: "Lagu Nostalgia", src: "https://assets.mixkit.co/music/preview/mixkit-piano-melody-1-125.mp3" }
    ];
    let currentTrack = 0;
    
    // Load volume dari localStorage
    const savedVolume = localStorage.getItem('9D_volume');
    if (savedVolume && volumeSlider) {
        volumeSlider.value = savedVolume;
        backgroundMusic.volume = savedVolume / 100;
    }
    
    // Toggle music dari header
    if (musicToggle) {
        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
            playSound('click');
        });
    }
    
    // Play/pause button
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
            playSound('click');
        });
    }
    
    // Previous track
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentTrack = (currentTrack - 1 + musicTracks.length) % musicTracks.length;
            loadTrack(currentTrack);
            playMusic();
            playSound('click');
        });
    }
    
    // Next track
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentTrack = (currentTrack + 1) % musicTracks.length;
            loadTrack(currentTrack);
            playMusic();
            playSound('click');
        });
    }
    
    // Volume control
    if (volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            backgroundMusic.volume = this.value / 100;
            localStorage.setItem('9D_volume', this.value);
        });
    }
    
    // Toggle dari settings
    if (musicToggleSetting) {
        // Set initial state
        musicToggleSetting.checked = localStorage.getItem('9D_musicEnabled') !== 'false';
        
        musicToggleSetting.addEventListener('change', function() {
            if (this.checked) {
                playMusic();
            } else {
                pauseMusic();
            }
            localStorage.setItem('9D_musicEnabled', this.checked);
            playSound('click');
        });
    }
    
    // Fungsi untuk memutar musik
    function playMusic() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            isPlaying = true;
            if (playIcon) playIcon.className = 'fas fa-pause';
            if (musicIcon) musicIcon.className = 'fas fa-volume-up';
            if (musicPlayer) musicPlayer.classList.add('active');
        }
    }
    
    // Fungsi untuk menjeda musik
    function pauseMusic() {
        if (!backgroundMusic.paused) {
            backgroundMusic.pause();
            isPlaying = false;
            if (playIcon) playIcon.className = 'fas fa-play';
            if (musicIcon) musicIcon.className = 'fas fa-music';
        }
    }
    
    // Fungsi untuk memuat track
    function loadTrack(index) {
        backgroundMusic.src = musicTracks[index].src;
        const playerDetails = document.querySelector('.player-details');
        if (playerDetails) {
            playerDetails.querySelector('h4').textContent = musicTracks[index].title;
            playerDetails.querySelector('p').textContent = musicTracks[index].artist;
        }
    }
    
    // Auto play jika di-setting
    if (localStorage.getItem('9D_musicEnabled') !== 'false') {
        setTimeout(() => {
            loadTrack(0);
            playMusic();
        }, 1000);
    }
}

// Setup notification center
function setupNotifications() {
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationCenter = document.getElementById('notificationCenter');
    const clearNotificationsBtn = document.getElementById('clearNotifications');
    const notificationList = document.getElementById('notificationList');
    
    // Sample notifications
    const notifications = [
        { id: 1, title: "Foto Baru", message: "Ada foto baru di galeri kenangan", time: "10 menit lalu", icon: "fas fa-camera", type: "info" },
        { id: 2, title: "Pesan Rahasia", message: "Kamu menerima pesan rahasia baru", time: "1 jam lalu", icon: "fas fa-lock", type: "secret" },
        { id: 3, title: "Voting Foto", message: "Foto 'Wisuda Kelas 9' memimpin voting", time: "2 jam lalu", icon: "fas fa-star", type: "vote" },
        { id: 4, title: "Chat Room", message: "5 pesan baru di chat room", time: "5 jam lalu", icon: "fas fa-comments", type: "chat" },
        { id: 5, title: "Game Update", message: "Rekor baru di game Memory Match", time: "1 hari lalu", icon: "fas fa-gamepad", type: "game" }
    ];
    
    // Load notifications
    function loadNotifications() {
        if (!notificationList) return;
        
        notificationList.innerHTML = '';
        notifications.forEach(notif => {
            const notifElement = document.createElement('div');
            notifElement.className = 'notification-item';
            notifElement.innerHTML = `
                <div class="notification-icon ${notif.type}">
                    <i class="${notif.icon}"></i>
                </div>
                <div class="notification-content">
                    <h4>${notif.title}</h4>
                    <p>${notif.message}</p>
                    <span class="notification-time">${notif.time}</span>
                </div>
            `;
            notificationList.appendChild(notifElement);
        });
    }
    
    // Toggle notification center
    if (notificationBtn && notificationCenter) {
        notificationBtn.addEventListener('click', function() {
            notificationCenter.classList.toggle('active');
            playSound('click');
        });
        
        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!notificationCenter.contains(e.target) && !notificationBtn.contains(e.target)) {
                notificationCenter.classList.remove('active');
            }
        });
    }
    
    // Clear all notifications
    if (clearNotificationsBtn) {
        clearNotificationsBtn.addEventListener('click', function() {
            notificationList.innerHTML = '<div class="empty-notifications">Tidak ada notifikasi</div>';
            playSound('click');
            showNotification('Notifikasi', 'Semua notifikasi telah dibersihkan', 'info');
        });
    }
    
    // Load initial notifications
    loadNotifications();
}

// Setup countdown timer
function setupCountdownTimer() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    
    // Tanggal kelulusan: 15 Juni 2024
    const graduationDate = new Date('June 15, 2024 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = graduationDate - now;
        
        if (timeLeft < 0) {
            // Kelulusan sudah lewat
            if (daysElement) daysElement.textContent = '00';
            if (hoursElement) hoursElement.textContent = '00';
            if (minutesElement) minutesElement.textContent = '00';
            return;
        }
        
        // Hitung hari, jam, menit
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        // Update display
        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    }
    
    // Update setiap menit
    updateCountdown();
    setInterval(updateCountdown, 60000);
}

// Setup gallery dengan kategori
function setupGallery() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortSelect = document.getElementById('sortSelect');
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const fabMain = document.getElementById('fabMain');
    const fabActions = document.querySelectorAll('.fab-action');
    
    let currentCategory = 'all';
    let currentSort = 'newest';
    let currentPage = 1;
    const itemsPerPage = 6;
    
    // Filter by category
    if (categoryFilter) {
        categoryFilter.addEventListener('click', function(e) {
            if (e.target.classList.contains('category-btn')) {
                // Update active button
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Set category
                currentCategory = e.target.getAttribute('data-category');
                currentPage = 1;
                
                // Reload gallery
                loadGallery();
                
                // Play sound
                playSound('click');
            }
        });
    }
    
    // Sort gallery
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            currentSort = this.value;
            currentPage = 1;
            loadGallery();
            playSound('click');
        });
    }
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            loadGallery(true);
            playSound('click');
        });
    }
    
    // Floating action button
    if (fabMain) {
        fabMain.addEventListener('click', function() {
            const fabContainer = this.closest('.floating-action-button');
            fabContainer.classList.toggle('active');
            playSound('click');
        });
    }
    
    // FAB actions
    fabActions.forEach(action => {
        action.addEventListener('click', function() {
            const title = this.getAttribute('title');
            showNotification('Fitur Demo', `${title} - Fitur ini masih dalam pengembangan`, 'info');
            playSound('click');
        });
    });
    
    // Load gallery function
    function loadGallery(append = false) {
        if (!galleryGrid) return;
        
        // Filter photos by category
        let filteredPhotos = classData.gallery;
        if (currentCategory !== 'all') {
            filteredPhotos = classData.gallery.filter(photo => 
                photo.category === currentCategory
            );
        }
        
        // Sort photos
        filteredPhotos.sort((a, b) => {
            if (currentSort === 'newest') {
                return new Date(b.date) - new Date(a.date);
            } else if (currentSort === 'oldest') {
                return new Date(a.date) - new Date(b.date);
            } else if (currentSort === 'popular') {
                return b.votes - a.votes;
            }
            return 0;
        });
        
        // Calculate pagination
        const startIndex = 0;
        const endIndex = currentPage * itemsPerPage;
        const photosToShow = filteredPhotos.slice(startIndex, endIndex);
        
        // Clear grid if not appending
        if (!append) {
            galleryGrid.innerHTML = '';
        }
        
        // Check if no photos
        if (photosToShow.length === 0) {
            galleryGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-images"></i>
                    <h3>Tidak ada foto</h3>
                    <p>Tidak ada foto dalam kategori "${currentCategory}"</p>
                </div>
            `;
            loadMoreContainer.style.display = 'none';
            return;
        }
        
        // Create gallery items
        photosToShow.forEach(photo => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}" loading="lazy">
                <div class="gallery-overlay">
                    <h4>${photo.title}</h4>
                    <p>${photo.description}</p>
                    <div class="gallery-stats">
                        <span><i class="fas fa-heart"></i> ${photo.votes}</span>
                        <span><i class="fas fa-calendar"></i> ${formatDate(photo.date)}</span>
                    </div>
                    <button class="download-btn" data-id="${photo.id}">
                        <i class="fas fa-download"></i> Unduh
                    </button>
                </div>
            `;
            
            // Add click event for download
            const downloadBtn = galleryItem.querySelector('.download-btn');
            downloadBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                downloadPhoto(photo);
            });
            
            // Add click event for viewing
            galleryItem.addEventListener('click', function() {
                viewPhoto(photo);
            });
            
            galleryGrid.appendChild(galleryItem);
        });
        
        // Show/hide load more button
        if (loadMoreContainer) {
            if (endIndex >= filteredPhotos.length) {
                loadMoreContainer.style.display = 'none';
            } else {
                loadMoreContainer.style.display = 'block';
            }
        }
    }
    
    // Download photo function
    function downloadPhoto(photo) {
        showNotification('Mengunduh Foto', `Mengunduh "${photo.title}"...`, 'info');
        playSound('click');
        
        // Simulate download
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = photo.url;
            link.download = `kenangan-9D-${photo.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification('Berhasil', `"${photo.title}" berhasil diunduh`, 'success');
        }, 1000);
    }
    
    // View photo function
    function viewPhoto(photo) {
        // Create modal for photo view
        const modal = document.createElement('div');
        modal.className = 'photo-modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${photo.title}</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="${photo.url}" alt="${photo.title}">
                    <div class="photo-info">
                        <p>${photo.description}</p>
                        <div class="photo-meta">
                            <span><i class="fas fa-calendar"></i> ${formatDate(photo.date)}</span>
                            <span><i class="fas fa-heart"></i> ${photo.votes} suka</span>
                            <span><i class="fas fa-folder"></i> ${getCategoryName(photo.category)}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="ios-button" id="votePhotoBtn">
                        <i class="fas fa-heart"></i> Suka (${photo.votes})
                    </button>
                    <button class="ios-button outline" id="sharePhotoBtn">
                        <i class="fas fa-share"></i> Bagikan
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', function() {
            modal.remove();
            playSound('click');
        });
        
        // Vote button
        const voteBtn = modal.querySelector('#votePhotoBtn');
        voteBtn.addEventListener('click', function() {
            photo.votes++;
            this.innerHTML = `<i class="fas fa-heart"></i> Suka (${photo.votes})`;
            playSound('click');
            showNotification('Terima Kasih!', 'Suara Anda telah direkam', 'success');
            
            // Update localStorage
            updatePhotoVotes(photo.id, photo.votes);
        });
        
        // Share button
        const shareBtn = modal.querySelector('#sharePhotoBtn');
        shareBtn.addEventListener('click', function() {
            showNotification('Berbagi', 'Fitur berbagi akan segera hadir!', 'info');
            playSound('click');
        });
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        playSound('click');
    }
    
    // Get category name
    function getCategoryName(category) {
        const categories = {
            'class': 'Foto Kelas',
            'activity': 'Kegiatan',
            'studio': 'Studio',
            'graduation': 'Wisuda',
            'fun': 'Fun Moment'
        };
        return categories[category] || category;
    }
    
    // Format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
    
    // Update photo votes in localStorage
    function updatePhotoVotes(photoId, newVotes) {
        let votesData = JSON.parse(localStorage.getItem('9D_photoVotes')) || {};
        votesData[photoId] = newVotes;
        localStorage.setItem('9D_photoVotes', JSON.stringify(votesData));
    }
    
    // Load initial gallery
    loadGallery();
}

// Setup timeline
function setupTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    if (!timelineContainer) return;
    
    // Clear container
    timelineContainer.innerHTML = '';
    
    // Add timeline items
    classData.timeline.forEach(event => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${event.date}</div>
                <h3 class="timeline-title">
                    <i class="${event.icon}"></i> ${event.title}
                </h3>
                <p>${event.description}</p>
            </div>
        `;
        timelineContainer.appendChild(timelineItem);
    });
}

// Setup anggota kelas
function setupMembers() {
    const membersGrid = document.getElementById('membersGrid');
    const memberSearch = document.getElementById('memberSearch');
    const clearSearch = document.getElementById('clearSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';
    let searchQuery = '';
    
    // Load members function
    function loadMembers() {
        if (!membersGrid) return;
        
        // Clear grid
        membersGrid.innerHTML = '';
        
        // Combine students and teachers
        const allMembers = [...classData.members, ...classData.teachers];
        
        // Filter members
        let filteredMembers = allMembers.filter(member => {
            // Apply category filter
            if (currentFilter === 'students' && member.type !== 'students') return false;
            if (currentFilter === 'teachers' && member.type !== 'teachers') return false;
            if (currentFilter === 'committee' && !member.committee) return false;
            
            // Apply search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                return member.name.toLowerCase().includes(query) || 
                       member.role.toLowerCase().includes(query);
            }
            
            return true;
        });
        
        // Check if no members
        if (filteredMembers.length === 0) {
            membersGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-users"></i>
                    <h3>Tidak ada anggota</h3>
                    <p>Tidak ada anggota yang sesuai dengan filter</p>
                </div>
            `;
            return;
        }
        
        // Create member cards
        filteredMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            
            // Get initials for avatar
            const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
            
            // Determine background color based on type
            let bgColor = 'linear-gradient(135deg, var(--ios-primary), var(--ios-accent))';
            if (member.type === 'teachers') {
                bgColor = 'linear-gradient(135deg, var(--ios-warning), var(--ios-danger))';
            } else if (member.committee) {
                bgColor = 'linear-gradient(135deg, var(--ios-success), var(--ios-accent))';
            }
            
            memberCard.innerHTML = `
                <div class="member-avatar" style="background: ${bgColor}">
                    ${initials}
                </div>
                <h4>${member.name}</h4>
                <p class="member-role">${member.role}</p>
                <div class="member-type ${member.type}">
                    ${member.type === 'teachers' ? 'Guru' : 'Siswa'}
                </div>
            `;
            
            // Add click event
            memberCard.addEventListener('click', function() {
                viewMemberProfile(member);
            });
            
            membersGrid.appendChild(memberCard);
        });
    }
    
    // Search functionality
    if (memberSearch) {
        memberSearch.addEventListener('input', function() {
            searchQuery = this.value;
            loadMembers();
        });
    }
    
    // Clear search
    if (clearSearch) {
        clearSearch.addEventListener('click', function() {
            memberSearch.value = '';
            searchQuery = '';
            loadMembers();
            playSound('click');
        });
    }
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Set filter
            currentFilter = this.getAttribute('data-filter');
            loadMembers();
            playSound('click');
        });
    });
    
    // View member profile
    function viewMemberProfile(member) {
        const modal = document.createElement('div');
        modal.className = 'member-modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Profil Anggota</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="member-profile">
                        <div class="profile-avatar-large">
                            ${member.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)}
                        </div>
                        <h2>${member.name}</h2>
                        <p class="profile-role">${member.role}</p>
                        <div class="profile-details">
                            <div class="detail-item">
                                <i class="fas fa-users"></i>
                                <span>${member.type === 'teachers' ? 'Guru' : 'Siswa'} Kelas 9D</span>
                            </div>
                            <div class="detail-item">
                                <i class="fas fa-calendar"></i>
                                <span>Anggota sejak 2021</span>
                            </div>
                            ${member.committee ? `
                            <div class="detail-item">
                                <i class="fas fa-star"></i>
                                <span>Pengurus Kelas</span>
                            </div>` : ''}
                        </div>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="ios-button">
                        <i class="fas fa-envelope"></i> Kirim Pesan
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', function() {
            modal.remove();
            playSound('click');
        });
        
        // Close on outside click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        playSound('click');
    }
    
    // Load initial members
    loadMembers();
}

// Setup chat room
function setupChatRoom() {
    const chatInput = document.getElementById('chatInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatInput || !sendMessageBtn || !chatMessages) return;
    
    // Sample chat messages
    const sampleMessages = [
        { sender: "Ahmad", text: "Hai semua! Siapa yang masih ingat pelajaran matematika kemarin?", time: "14:30", type: "incoming" },
        { sender: "You", text: "Aku masih ingat! Soal nomor 5 yang susah banget", time: "14:32", type: "outgoing" },
        { sender: "Citra", text: "Iya, soalnya tentang phytagoras kan?", time: "14:33", type: "incoming" },
        { sender: "Budi", text: "Besok ada tugas bahasa Indonesia nggak?", time: "14:35", type: "incoming" },
        { sender: "You", text: "Kayaknya nggak ada, cuma ada tugas IPA", time: "14:36", type: "outgoing" }
    ];
    
    // Load chat messages
    function loadChatMessages() {
        chatMessages.innerHTML = `
            <div class="message-date">Hari ini</div>
        `;
        
        sampleMessages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${msg.type}`;
            
            if (msg.type === 'incoming') {
                messageDiv.innerHTML = `
                    <div class="message-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="message-content">
                        <div class="message-sender">${msg.sender}</div>
                        <div class="message-text">${msg.text}</div>
                        <div class="message-time">${msg.time}</div>
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="message-content">
                        <div class="message-text">${msg.text}</div>
                        <div class="message-time">${msg.time}</div>
                    </div>
                `;
            }
            
            chatMessages.appendChild(messageDiv);
        });
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add message to chat
        const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message outgoing';
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-text">${message}</div>
                <div class="message-time">${time}</div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        
        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Play sound
        playSound('click');
        
        // Simulate reply after 1-3 seconds
        setTimeout(() => {
            const replies = [
                "Wah, bagus sekali!",
                "Aku setuju dengan pendapatmu",
                "Benar sekali!",
                "Haha, lucu banget!",
                "Kapan kita ketemu lagi?"
            ];
            
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const replyTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
            
            const replyDiv = document.createElement('div');
            replyDiv.className = 'message incoming';
            replyDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="message-content">
                    <div class="message-sender">Teman 9D</div>
                    <div class="message-text">${randomReply}</div>
                    <div class="message-time">${replyTime}</div>
                </div>
            `;
            
            chatMessages.appendChild(replyDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            playSound('notification');
        }, 1000 + Math.random() * 2000);
    }
    
    // Event listeners
    sendMessageBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Load initial messages
    loadChatMessages();
}

// Setup games
function setupGames() {
    const playButtons = document.querySelectorAll('.play-btn');
    const gameDisplay = document.getElementById('gameDisplay');
    const leaderboard = document.getElementById('leaderboard');
    
    // Sample leaderboard data
    const leaderboardData = [
        { name: "Ahmad", score: 1500, game: "Memory Match" },
        { name: "Budi", score: 1450, game: "Memory Match" },
        { name: "Citra", score: 1400, game: "Memory Match" },
        { name: "Dewi", score: 850, game: "Quiz 9D" },
        { name: "Eko", score: 800, game: "Quiz 9D" }
    ];
    
    // Load leaderboard
    function loadLeaderboard() {
        if (!leaderboard) return;
        
        leaderboard.innerHTML = '';
        leaderboardData.forEach(player => {
            const item = document.createElement('div');
            item.className = 'leaderboard-item';
            item.innerHTML = `
                <div class="player-info">
                    <div class="player-avatar">
                        ${player.name.charAt(0)}
                    </div>
                    <div class="player-details">
                        <h4>${player.name}</h4>
                        <p>${player.game}</p>
                    </div>
                </div>
                <div class="player-score">
                    ${player.score} pts
                </div>
            `;
            leaderboard.appendChild(item);
        });
    }
    
    // Play game function
    function playGame(gameType) {
        if (!gameDisplay) return;
        
        let gameHTML = '';
        let gameInstructions = '';
        
        switch(gameType) {
            case 'memory':
                gameInstructions = 'Temukan pasangan foto yang sama. Klik dua kartu untuk mencocokkan.';
                gameHTML = createMemoryGame();
                break;
            case 'quiz':
                gameInstructions = 'Jawab pertanyaan tentang kelas 9D. Pilih jawaban yang benar.';
                gameHTML = createQuizGame();
                break;
            case 'typing':
                gameInstructions = 'Ketik kata secepat mungkin sebelum waktu habis.';
                gameHTML = createTypingGame();
                break;
            case 'puzzle':
                gameInstructions = 'Susun potongan puzzle menjadi foto yang utuh.';
                gameHTML = createPuzzleGame();
                break;
            default:
                gameHTML = '<p>Game tidak ditemukan.</p>';
        }
        
        gameDisplay.innerHTML = `
            <div class="game-header">
                <h3>${getGameName(gameType)}</h3>
                <p>${gameInstructions}</p>
            </div>
            <div class="game-content">
                ${gameHTML}
            </div>
            <div class="game-controls">
                <button class="ios-button" id="startGame">Mulai Game</button>
                <button class="ios-button outline" id="backToGames">Kembali</button>
            </div>
        `;
        
        // Start game button
        const startBtn = gameDisplay.querySelector('#startGame');
        startBtn.addEventListener('click', function() {
            startGame(gameType);
        });
        
        // Back button
        const backBtn = gameDisplay.querySelector('#backToGames');
        backBtn.addEventListener('click', function() {
            gameDisplay.innerHTML = `
                <div class="game-welcome">
                    <i class="fas fa-gamepad"></i>
                    <h3>Pilih game untuk mulai bermain</h3>
                    <p>Score tertinggi akan ditampilkan di leaderboard</p>
                </div>
            `;
        });
        
        playSound('click');
    }
    
    // Get game name
    function getGameName(gameType) {
        const games = {
            'memory': 'Memory Match',
            'quiz': 'Quiz 9D',
            'typing': 'Typing Race',
            'puzzle': 'Photo Puzzle'
        };
        return games[gameType] || gameType;
    }
    
    // Create memory game
    function createMemoryGame() {
        return `
            <div class="memory-game">
                <div class="memory-grid" id="memoryGrid">
                    <!-- Cards will be generated by JavaScript -->
                </div>
                <div class="game-info">
                    <div class="score">Score: <span id="memoryScore">0</span></div>
                    <div class="timer">Waktu: <span id="memoryTimer">60</span>s</div>
                    <div class="matches">Pasangan: <span id="memoryMatches">0/6</span></div>
                </div>
            </div>
        `;
    }
    
    // Create quiz game
    function createQuizGame() {
        return `
            <div class="quiz-game">
                <div class="question" id="quizQuestion">
                    Loading pertanyaan...
                </div>
                <div class="options" id="quizOptions">
                    <!-- Options will be generated by JavaScript -->
                </div>
                <div class="game-info">
                    <div class="score">Score: <span id="quizScore">0</span></div>
                    <div class="question-count">Pertanyaan: <span id="quizQuestionCount">1/5</span></div>
                </div>
            </div>
        `;
    }
    
    // Start game function
    function startGame(gameType) {
        switch(gameType) {
            case 'memory':
                startMemoryGame();
                break;
            case 'quiz':
                startQuizGame();
                break;
            // Add other games here
        }
        playSound('click');
    }
    
    // Start memory game
    function startMemoryGame() {
        const memoryGrid = document.getElementById('memoryGrid');
        if (!memoryGrid) return;
        
        // Create cards (6 pairs = 12 cards)
        const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F'];
        
        // Shuffle cards
        cards.sort(() => Math.random() - 0.5);
        
        // Clear grid
        memoryGrid.innerHTML = '';
        
        // Create card elements
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'memory-card';
            cardElement.dataset.card = card;
            cardElement.dataset.index = index;
            cardElement.innerHTML = '<div class="card-front">?</div><div class="card-back">' + card + '</div>';
            memoryGrid.appendChild(cardElement);
        });
        
        // Initialize game state
        let firstCard = null;
        let secondCard = null;
        let lockBoard = false;
        let matches = 0;
        let score = 0;
        let timeLeft = 60;
        
        // Update display
        document.getElementById('memoryScore').textContent = score;
        document.getElementById('memoryMatches').textContent = `${matches}/6`;
        document.getElementById('memoryTimer').textContent = timeLeft;
        
        // Timer
        const timer = setInterval(() => {
            timeLeft--;
            document.getElementById('memoryTimer').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                endMemoryGame(score);
            }
        }, 1000);
        
        // Card click event
        const cardElements = memoryGrid.querySelectorAll('.memory-card');
        cardElements.forEach(card => {
            card.addEventListener('click', function() {
                if (lockBoard || this.classList.contains('flipped') || this === firstCard) return;
                
                this.classList.add('flipped');
                
                if (!firstCard) {
                    firstCard = this;
                    return;
                }
                
                secondCard = this;
                lockBoard = true;
                
                // Check for match
                if (firstCard.dataset.card === secondCard.dataset.card) {
                    // Match found
                    matches++;
                    score += 100;
                    
                    document.getElementById('memoryScore').textContent = score;
                    document.getElementById('memoryMatches').textContent = `${matches}/6`;
                    
                    setTimeout(() => {
                        firstCard.classList.add('matched');
                        secondCard.classList.add('matched');
                        resetBoard();
                        
                        // Check if all matches found
                        if (matches === 6) {
                            clearInterval(timer);
                            score += timeLeft * 10; // Bonus time
                            endMemoryGame(score);
                        }
                    }, 500);
                } else {
                    // No match
                    setTimeout(() => {
                        firstCard.classList.remove('flipped');
                        secondCard.classList.remove('flipped');
                        resetBoard();
                    }, 1000);
                }
            });
        });
        
        function resetBoard() {
            [firstCard, secondCard, lockBoard] = [null, null, false];
        }
    }
    
    // End memory game
    function endMemoryGame(score) {
        const gameDisplay = document.getElementById('gameDisplay');
        if (!gameDisplay) return;
        
        gameDisplay.querySelector('.game-content').innerHTML = `
            <div class="game-over">
                <h2>Game Selesai!</h2>
                <p class="final-score">Score Akhir: ${score}</p>
                ${score > 1000 ? '<p class="congrats">Rekor baru! 🎉</p>' : ''}
                <button class="ios-button" id="playAgain">Main Lagi</button>
            </div>
        `;
        
        // Play again button
        const playAgainBtn = gameDisplay.querySelector('#playAgain');
        playAgainBtn.addEventListener('click', function() {
            startMemoryGame();
        });
    }
    
    // Start quiz game
    function startQuizGame() {
        const questions = [
            {
                question: "Siapa nama wali kelas 9D?",
                options: ["Bu Siti Aminah", "Bu Sri Mulyani", "Pak Budi Santoso", "Pak Joko Widodo"],
                answer: 1
            },
            {
                question: "Berapa jumlah anggota kelas 9D?",
                options: ["30", "34", "36", "38"],
                answer: 2
            },
            {
                question: "Kapan kita pertama kali masuk kelas 7D?",
                options: ["Juli 2020", "Juli 2021", "Juli 2022", "Juli 2023"],
                answer: 1
            },
            {
                question: "Apa nama acara pentas seni kita?",
                options: ["Pensi", "Karnaval", "Festival", "Pentas Seni"],
                answer: 0
            },
            {
                question: "Siapa ketua kelas 9D?",
                options: ["Budi Santoso", "Ahmad Fauzi", "Citra Ayu", "Dewi Lestari"],
                answer: 1
            }
        ];
        
        let currentQuestion = 0;
        let score = 0;
        
        function loadQuestion() {
            const question = questions[currentQuestion];
            const quizQuestion = document.getElementById('quizQuestion');
            const quizOptions = document.getElementById('quizOptions');
            
            if (!quizQuestion || !quizOptions) return;
            
            quizQuestion.textContent = question.question;
            quizOptions.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.className = 'quiz-option';
                optionButton.textContent = option;
                optionButton.addEventListener('click', function() {
                    checkAnswer(index);
                });
                quizOptions.appendChild(optionButton);
            });
            
            // Update display
            document.getElementById('quizScore').textContent = score;
            document.getElementById('quizQuestionCount').textContent = `${currentQuestion + 1}/${questions.length}`;
        }
        
        function checkAnswer(selectedIndex) {
            const question = questions[currentQuestion];
            const options = document.querySelectorAll('.quiz-option');
            
            // Disable all options
            options.forEach(option => option.disabled = true);
            
            // Highlight correct and incorrect answers
            options.forEach((option, index) => {
                if (index === question.answer) {
                    option.classList.add('correct');
                } else if (index === selectedIndex && selectedIndex !== question.answer) {
                    option.classList.add('incorrect');
                }
            });
            
            // Check if answer is correct
            if (selectedIndex === question.answer) {
                score += 100;
                playSound('correct');
            } else {
                playSound('wrong');
            }
            
            // Next question after delay
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    loadQuestion();
                } else {
                    endQuizGame(score);
                }
            }, 1500);
        }
        
        // Load first question
        loadQuestion();
    }
    
    // End quiz game
    function endQuizGame(score) {
        const gameDisplay = document.getElementById('gameDisplay');
        if (!gameDisplay) return;
        
        gameDisplay.querySelector('.game-content').innerHTML = `
            <div class="game-over">
                <h2>Quiz Selesai!</h2>
                <p class="final-score">Score Akhir: ${score}</p>
                <p class="accuracy">Akurasi: ${Math.round((score / 500) * 100)}%</p>
                ${score === 500 ? '<p class="congrats">Semua jawaban benar! 🎉</p>' : ''}
                <button class="ios-button" id="playAgainQuiz">Main Lagi</button>
            </div>
        `;
        
        // Play again button
        const playAgainBtn = gameDisplay.querySelector('#playAgainQuiz');
        playAgainBtn.addEventListener('click', function() {
            startQuizGame();
        });
    }
    
    // Create typing game
    function createTypingGame() {
        return `
            <div class="typing-game">
                <div class="word-display" id="wordDisplay">
                    <!-- Words will appear here -->
                </div>
                <input type="text" class="typing-input" id="typingInput" placeholder="Ketik kata di atas...">
                <div class="game-info">
                    <div class="score">Score: <span id="typingScore">0</span></div>
                    <div class="timer">Waktu: <span id="typingTimer">30</span>s</div>
                    <div class="accuracy">Akurasi: <span id="typingAccuracy">100%</span></div>
                </div>
            </div>
        `;
    }
    
    // Create puzzle game
    function createPuzzleGame() {
        return `
            <div class="puzzle-game">
                <div class="puzzle-container" id="puzzleContainer">
                    <!-- Puzzle pieces will appear here -->
                </div>
                <div class="game-info">
                    <div class="score">Score: <span id="puzzleScore">0</span></div>
                    <div class="timer">Waktu: <span id="puzzleTimer">120</span>s</div>
                    <div class="moves">Langkah: <span id="puzzleMoves">0</span></div>
                </div>
            </div>
        `;
    }
    
    // Event listeners for play buttons
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gameType = this.getAttribute('data-game');
            playGame(gameType);
        });
    });
    
    // Load initial leaderboard
    loadLeaderboard();
}

// Setup voting system
function setupVoting() {
    const votingGrid = document.getElementById('votingGrid');
    const voteCategoryButtons = document.querySelectorAll('.vote-category-btn');
    const totalPhotosElement = document.getElementById('totalPhotos');
    const totalVotesElement = document.getElementById('totalVotes');
    const leadingPhotoElement = document.getElementById('leadingPhoto');
    
    let currentVoteCategory = 'all';
    
    // Load voting photos
    function loadVotingPhotos() {
        if (!votingGrid) return;
        
        // Clear grid
        votingGrid.innerHTML = '';
        
        // Filter photos
        let filteredPhotos = [...classData.gallery];
        
        if (currentVoteCategory === 'most-voted') {
            filteredPhotos.sort((a, b) => b.votes - a.votes);
        } else if (currentVoteCategory === 'recent') {
            filteredPhotos.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
        
        // Take top 6 for voting
        filteredPhotos = filteredPhotos.slice(0, 6);
        
        // Update stats
        if (totalPhotosElement) {
            totalPhotosElement.textContent = classData.gallery.length;
        }
        
        if (totalVotesElement) {
            const totalVotes = classData.gallery.reduce((sum, photo) => sum + photo.votes, 0);
            totalVotesElement.textContent = totalVotes;
        }
        
        if (leadingPhotoElement) {
            const leadingPhoto = classData.gallery.reduce((prev, current) => 
                (prev.votes > current.votes) ? prev : current
            );
            leadingPhotoElement.textContent = leadingPhoto.title;
        }
        
        // Check if no photos
        if (filteredPhotos.length === 0) {
            votingGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-images"></i>
                    <h3>Tidak ada foto</h3>
                    <p>Tidak ada foto untuk kategori ini</p>
                </div>
            `;
            return;
        }
        
        // Create voting cards
        filteredPhotos.forEach(photo => {
            const voteCard = document.createElement('div');
            voteCard.className = 'vote-card';
            voteCard.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}">
                <div class="vote-info">
                    <h4>${photo.title}</h4>
                    <p>${photo.description}</p>
                    <div class="vote-stats">
                        <span class="votes-count">
                            <i class="fas fa-heart"></i> ${photo.votes} suka
                        </span>
                        <button class="vote-btn" data-id="${photo.id}">
                            <i class="fas fa-heart"></i> Suka
                        </button>
                    </div>
                </div>
            `;
            
            // Add vote button event
            const voteBtn = voteCard.querySelector('.vote-btn');
            voteBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                voteForPhoto(photo.id, voteBtn);
            });
            
            votingGrid.appendChild(voteCard);
        });
    }
    
    // Vote for photo
    function voteForPhoto(photoId, button) {
        // Check if already voted (using localStorage)
        const votes = JSON.parse(localStorage.getItem('9D_userVotes')) || {};
        
        if (votes[photoId]) {
            showNotification('Sudah Vote', 'Anda sudah memberikan suara untuk foto ini', 'info');
            return;
        }
        
        // Update vote count
        const photo = classData.gallery.find(p => p.id === photoId);
        if (photo) {
            photo.votes++;
            
            // Update button text
            const votesCount = button.previousElementSibling;
            votesCount.innerHTML = `<i class="fas fa-heart"></i> ${photo.votes} suka`;
            
            // Disable button
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-check"></i> Terima Kasih!';
            
            // Save vote
            votes[photoId] = true;
            localStorage.setItem('9D_userVotes', JSON.stringify(votes));
            
            // Show notification
            showNotification('Terima Kasih!', 'Suara Anda telah direkam', 'success');
            playSound('click');
            
            // Update total votes
            if (totalVotesElement) {
                const totalVotes = classData.gallery.reduce((sum, p) => sum + p.votes, 0);
                totalVotesElement.textContent = totalVotes;
            }
        }
    }
    
    // Vote category buttons
    voteCategoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            voteCategoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Set category
            currentVoteCategory = this.getAttribute('data-category');
            loadVotingPhotos();
            playSound('click');
        });
    });
    
    // Load initial voting photos
    loadVotingPhotos();
}

// Setup secret messages
function setupSecretMessages() {
    const secretForm = document.getElementById('secretForm');
    const openSecretsBtn = document.getElementById('openSecretsBtn');
    const secretMessages = document.getElementById('secretMessages');
    const eggSurprise = document.getElementById('eggSurprise');
    
    // Send secret message
    if (secretForm) {
        secretForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const to = document.getElementById('secretTo').value;
            const message = document.getElementById('secretMessage').value;
            const password = document.getElementById('secretPassword').value;
            
            if (!message.trim()) {
                showNotification('Pesan Kosong', 'Silakan tulis pesan terlebih dahulu', 'error');
                return;
            }
            
            // Create new secret message
            const newMessage = {
                id: Date.now(),
                to: to,
                message: message,
                password: password,
                date: new Date().toISOString().split('T')[0],
                sender: 'Anonymous'
            };
            
            // Save to localStorage
            let secrets = JSON.parse(localStorage.getItem('9D_secrets')) || [];
            secrets.unshift(newMessage);
            localStorage.setItem('9D_secrets', JSON.stringify(secrets.slice(0, 20))); // Keep only 20
            
            // Clear form
            secretForm.reset();
            
            // Show notification
            showNotification('Pesan Terkirim', 'Pesan rahasia Anda telah dikirim', 'success');
            playSound('click');
            
            // Easter egg: if message contains certain keywords
            const lowerMessage = message.toLowerCase();
            if (lowerMessage.includes('cinta') || lowerMessage.includes('sayang')) {
                setTimeout(() => {
                    showEasterEgg('love');
                }, 1000);
            }
        });
    }
    
    // Open secret messages
    if (openSecretsBtn) {
        openSecretsBtn.addEventListener('click', function() {
            const password = document.getElementById('openPassword').value;
            loadSecretMessages(password);
            playSound('click');
        });
    }
    
    // Load secret messages
    function loadSecretMessages(password = '') {
        if (!secretMessages) return;
        
        // Get messages from localStorage
        let secrets = JSON.parse(localStorage.getItem('9D_secrets')) || classData.secretMessages;
        
        // Clear container
        secretMessages.innerHTML = '';
        
        // Filter messages based on password
        const accessibleMessages = secrets.filter(msg => 
            !msg.password || msg.password === password
        );
        
        if (accessibleMessages.length === 0) {
            secretMessages.innerHTML = `
                <div class="secret-message locked">
                    <div class="secret-icon">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="secret-content">
                        <h4>Tidak ada pesan</h4>
                        <p>Tidak ada pesan yang dapat diakses dengan password ini</p>
                    </div>
                </div>
            `;
            return;
        }
        
        // Display accessible messages
        accessibleMessages.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'secret-message';
            messageDiv.innerHTML = `
                <div class="secret-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="secret-content">
                    <h4>Untuk: ${msg.to}</h4>
                    <p>${msg.message}</p>
                    <div class="secret-meta">
                        <span>${formatDate(msg.date)}</span>
                        ${msg.password ? '<span class="locked-badge"><i class="fas fa-lock"></i> Terkunci</span>' : ''}
                    </div>
                </div>
            `;
            secretMessages.appendChild(messageDiv);
        });
        
        // Clear password field if successful
        if (accessibleMessages.length > 0) {
            document.getElementById('openPassword').value = '';
        }
    }
    
    // Easter egg area
    if (eggSurprise) {
        let tapCount = 0;
        let tapTimer = null;
        
        eggSurprise.addEventListener('click', function() {
            tapCount++;
            
            // Reset counter after 1 second
            clearTimeout(tapTimer);
            tapTimer = setTimeout(() => {
                tapCount = 0;
            }, 1000);
            
            // Check for triple tap
            if (tapCount === 3) {
                showEasterEgg('surprise');
                tapCount = 0;
            }
        });
    }
}

// Setup pengaturan
function setupSettings() {
    const exportDataBtn = document.getElementById('exportData');
    const clearCacheBtn = document.getElementById('clearCache');
    const notificationToggle = document.getElementById('notificationToggle');
    
    // Export data
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', function() {
            // Create data to export
            const exportData = {
                metadata: {
                    exportedAt: new Date().toISOString(),
                    appName: 'Kenangan 9D',
                    version: '2.0.1'
                },
                classData: {
                    className: classData.className,
                    schoolName: classData.schoolName,
                    year: classData.year,
                    totalMembers: classData.totalMembers
                },
                userData: {
                    username: localStorage.getItem('9D_username'),
                    settings: {
                        darkMode: localStorage.getItem('9D_darkMode'),
                        musicEnabled: localStorage.getItem('9D_musicEnabled'),
                        volume: localStorage.getItem('9D_volume')
                    }
                }
            };
            
            // Create and download JSON file
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `kenangan-9D-backup-${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            showNotification('Data Diekspor', 'Backup data berhasil diunduh', 'success');
            playSound('click');
        });
    }
    
    // Clear cache
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', function() {
            if (confirm('Apakah Anda yakin ingin menghapus cache? Ini akan menghapus semua data sementara.')) {
                // Clear localStorage except login data
                const username = localStorage.getItem('9D_username');
                const loggedIn = localStorage.getItem('9D_loggedIn');
                const remember = localStorage.getItem('9D_remember');
                
                localStorage.clear();
                
                // Restore login data if needed
                if (loggedIn) localStorage.setItem('9D_loggedIn', loggedIn);
                if (username) localStorage.setItem('9D_username', username);
                if (remember) localStorage.setItem('9D_remember', remember);
                
                showNotification('Cache Dihapus', 'Data sementara telah dibersihkan', 'success');
                playSound('click');
                
                // Refresh page
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        });
    }
    
    // Notification toggle
    if (notificationToggle) {
        notificationToggle.addEventListener('change', function() {
            localStorage.setItem('9D_notifications', this.checked);
            playSound('click');
            
            if (this.checked) {
                showNotification('Notifikasi', 'Notifikasi diaktifkan', 'info');
            }
        });
    }
}

// Setup action buttons
function setupActionButtons() {
    const exploreBtn = document.getElementById('exploreBtn');
    const addMemoryBtn = document.getElementById('addMemoryBtn');
    const viewAllMemories = document.getElementById('viewAllMemories');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Explore button
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Navigate to gallery
            const galleryItem = document.querySelector('.menu-item[data-section="gallery"]');
            if (galleryItem) galleryItem.click();
            playSound('click');
        });
    }
    
    // Add memory button
    if (addMemoryBtn) {
        addMemoryBtn.addEventListener('click', function() {
            showNotification('Tambah Kenangan', 'Fitur ini akan segera hadir!', 'info');
            playSound('click');
        });
    }
    
    // View all memories
    if (viewAllMemories) {
        viewAllMemories.addEventListener('click', function() {
            const timelineItem = document.querySelector('.menu-item[data-section="timeline"]');
            if (timelineItem) timelineItem.click();
            playSound('click');
        });
    }
    
    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (confirm('Apakah Anda yakin ingin keluar?')) {
                localStorage.removeItem('9D_loggedIn');
                localStorage.removeItem('9D_username');
                window.location.href = 'login.html';
                playSound('click');
            }
        });
    }
}

// Setup easter eggs
function setupEasterEggs() {
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-konamiSequence.length);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showEasterEgg('konami');
            konamiCode = [];
        }
    });
    
    // Secret key combinations
    document.addEventListener('keydown', function(e) {
        // Ctrl + Shift + 9
        if (e.ctrlKey && e.shiftKey && e.key === '9') {
            showEasterEgg('secret9D');
        }
        
        // Alt + 9 + D
        if (e.altKey && e.key === '9') {
            setTimeout(() => {
                if (e.altKey && e.key === 'd') {
                    showEasterEgg('alt9D');
                }
            }, 500);
        }
    });
}

// Show easter egg
function showEasterEgg(type) {
    playSound('surprise');
    
    switch(type) {
        case 'konami':
            // Konami code activated
            createConfetti();
            showNotification('Konami Code!', 'Cheat code activated! 🎮', 'success');
            break;
            
        case 'secret9D':
            // Secret 9D combination
            createFireworks();
            showNotification('Kelas 9D!', 'Selalu bersama selamanya! ❤️', 'success');
            break;
            
        case 'login':
            // Special login
            createConfetti();
            showNotification('Selamat Datang!', 'Anda menemukan easter egg login! 🥚', 'success');
            break;
            
        case 'love':
            // Love message
            createHearts();
            showNotification('Cinta 9D', 'Cinta dan persahabatan abadi! 💖', 'success');
            break;
            
        case 'surprise':
            // Triple tap surprise
            createConfetti();
            showNotification('Kejutan!', 'Anda menemukan easter egg! 🎉', 'success');
            break;
            
        case 'alt9D':
            // Alt + 9 + D
            createFireworks();
            showNotification('Kelas Terbaik!', '9D selamanya di hati! ✨', 'success');
            break;
    }
}

// Create confetti effect
function createConfetti() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 1 + 's';
        
        document.getElementById('confettiContainer').appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Create fireworks effect
function createFireworks() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    
    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.boxShadow = `0 0 10px ${firework.style.backgroundColor}`;
        
        document.getElementById('confettiContainer').appendChild(firework);
        
        // Animate
        firework.animate([
            { transform: 'scale(0)', opacity: 1 },
            { transform: 'scale(1)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        // Remove after animation
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Create hearts effect
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        
        document.body.appendChild(heart);
        
        // Animate
        heart.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(-${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Get random color
function getRandomColor() {
    const colors = ['#ff5e62', '#ff9966', '#00b09b', '#96c93d', '#6a11cb', '#2575fc', '#ff3b30', '#34c759', '#ff9500', '#5856d6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Play sound
function playSound(type) {
    // In a real app, you would play actual sound files
    // This is a simplified version
    console.log(`Playing sound: ${type}`);
}

// Show notification
function showNotification(title, message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="close-notification">&times;</button>
    `;
    
    // Add to notification center if open
    const notificationCenter = document.getElementById('notificationCenter');
    if (notificationCenter && notificationCenter.classList.contains('active')) {
        const notificationList = document.getElementById('notificationList');
        if (notificationList) {
            notificationList.prepend(notification);
        }
    }
    
    // Show as toast notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--ios-card-bg);
        border-radius: var(--ios-radius);
        padding: 16px;
        box-shadow: var(--ios-shadow);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 9999;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Get notification icon
function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'warning': return 'exclamation-triangle';
        case 'info': return 'info-circle';
        case 'secret': return 'lock';
        case 'vote': return 'star';
        case 'chat': return 'comments';
        case 'game': return 'gamepad';
        default: return 'bell';
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Hari ini';
    } else if (diffDays === 1) {
        return 'Kemarin';
    } else if (diffDays < 7) {
        return `${diffDays} hari lalu`;
    } else {
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }
}

// Load initial data
function loadInitialData() {
    // Load recent memories
    loadRecentMemories();
    
    // Check for new notifications
    checkForNewContent();
}

// Load recent memories
function loadRecentMemories() {
    const recentMemories = document.getElementById('recentMemories');
    if (!recentMemories) return;
    
    // Get 3 most recent photos
    const recentPhotos = [...classData.gallery]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    
    recentMemories.innerHTML = '';
    
    recentPhotos.forEach(photo => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-card-small';
        memoryCard.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}">
            <div class="memory-info">
                <h4>${photo.title}</h4>
                <p>${formatDate(photo.date)}</p>
            </div>
        `;
        
        recentMemories.appendChild(memoryCard);
    });
}

// Check for new content
function checkForNewContent() {
    // Simulate checking for new content
    setTimeout(() => {
        // Randomly show new content notification
        if (Math.random() > 0.5) {
            showNotification('Konten Baru', 'Ada foto baru di galeri!', 'info');
        }
    }, 5000);
}
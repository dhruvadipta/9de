// Fungsi untuk dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Periksa apakah user sudah login
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username') || 'Alumni';
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirect ke halaman login jika belum login
        window.location.href = 'index.html';
        return;
    }
    
    // Tampilkan nama user di dashboard
    document.getElementById('currentUser').textContent = username;
    document.getElementById('greetingName').textContent = username;
    
    // Update tanggal
    updateDate();
    
    // Inisialisasi event listener
    initEventListeners();
    
    // Load data awal
    loadInitialData();
});

// Fungsi untuk update tanggal
function updateDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('id-ID', options);
    document.getElementById('welcomeDate').textContent = dateString;
}

// Fungsi untuk inisialisasi event listener
function initEventListeners() {
    // Tombol edit ucapan
    const editWelcomeBtn = document.getElementById('editWelcomeBtn');
    const changeWelcomeBtn = document.getElementById('changeWelcomeBtn');
    const editWelcomeModal = document.getElementById('editWelcomeModal');
    const closeEditModal = document.getElementById('closeEditModal');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const saveWelcomeBtn = document.getElementById('saveWelcomeBtn');
    
    // Tombol ganti background
    const changeBgBtn = document.getElementById('changeBgBtn');
    const changeBgModal = document.getElementById('changeBgModal');
    const closeBgModal = document.getElementById('closeBgModal');
    const cancelBgBtn = document.getElementById('cancelBgBtn');
    const saveBgBtn = document.getElementById('saveBgBtn');
    const bgOptions = document.querySelectorAll('.bg-option');
    
    // Event untuk membuka modal edit ucapan
    editWelcomeBtn.addEventListener('click', openEditWelcomeModal);
    changeWelcomeBtn.addEventListener('click', openEditWelcomeModal);
    
    // Event untuk menutup modal edit ucapan
    closeEditModal.addEventListener('click', closeEditWelcomeModal);
    cancelEditBtn.addEventListener('click', closeEditWelcomeModal);
    
    // Event untuk menyimpan perubahan ucapan
    saveWelcomeBtn.addEventListener('click', saveWelcomeMessage);
    
    // Event untuk membuka modal ganti background
    changeBgBtn.addEventListener('click', openChangeBgModal);
    
    // Event untuk menutup modal ganti background
    closeBgModal.addEventListener('click', closeChangeBgModal);
    cancelBgBtn.addEventListener('click', closeChangeBgModal);
    
    // Event untuk memilih background
    bgOptions.forEach(option => {
        option.addEventListener('click', function() {
            bgOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Event untuk menyimpan background
    saveBgBtn.addEventListener('click', saveBackground);
    
    // Tutup modal saat klik di luar konten modal
    window.addEventListener('click', function(e) {
        if (e.target === editWelcomeModal) {
            closeEditWelcomeModal();
        }
        if (e.target === changeBgModal) {
            closeChangeBgModal();
        }
    });
}

// Fungsi untuk membuka modal edit ucapan
function openEditWelcomeModal() {
    const modal = document.getElementById('editWelcomeModal');
    const welcomeMessage = document.getElementById('welcomeMessage').innerHTML;
    const greetingName = document.getElementById('greetingName').textContent;
    
    // Isi modal dengan data saat ini
    document.getElementById('newWelcomeMessage').value = extractTextFromHTML(welcomeMessage);
    document.getElementById('greetingNameInput').value = greetingName;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal edit ucapan
function closeEditWelcomeModal() {
    const modal = document.getElementById('editWelcomeModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fungsi untuk menyimpan ucapan baru
function saveWelcomeMessage() {
    const newMessage = document.getElementById('newWelcomeMessage').value;
    const newName = document.getElementById('greetingNameInput').value;
    
    // Update ucapan di halaman
    document.getElementById('welcomeMessage').innerHTML = 
        `<p>${newMessage.replace(/\n/g, '</p><p>')}</p>`;
    document.getElementById('greetingName').textContent = newName;
    
    // Simpan ke localStorage
    localStorage.setItem('welcomeMessage', newMessage);
    localStorage.setItem('greetingName', newName);
    
    // Tutup modal
    closeEditWelcomeModal();
    
    // Tampilkan notifikasi
    alert('Ucapan sambutan berhasil diperbarui!');
}

// Fungsi untuk membuka modal ganti background
function openChangeBgModal() {
    const modal = document.getElementById('changeBgModal');
    
    // Tandai background yang sedang aktif
    const currentBg = localStorage.getItem('dashboardBg') || 'class-bg.jpg';
    const bgOptions = document.querySelectorAll('.bg-option');
    
    bgOptions.forEach(option => {
        if (option.getAttribute('data-bg') === currentBg) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal ganti background
function closeChangeBgModal() {
    const modal = document.getElementById('changeBgModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fungsi untuk menyimpan background
function saveBackground() {
    const activeBgOption = document.querySelector('.bg-option.active');
    const customBgUrl = document.getElementById('customBgUrl').value;
    
    let bgImage = '';
    
    if (customBgUrl) {
        // Gunakan custom URL
        bgImage = `url('${customBgUrl}')`;
        localStorage.setItem('dashboardBg', 'custom');
        localStorage.setItem('customBgUrl', customBgUrl);
    } else if (activeBgOption) {
        // Gunakan background yang dipilih
        const bgName = activeBgOption.getAttribute('data-bg');
        bgImage = `url('assets/backgrounds/${bgName}')`;
        localStorage.setItem('dashboardBg', bgName);
        localStorage.removeItem('customBgUrl');
    } else {
        alert('Pilih background atau masukkan URL custom!');
        return;
    }
    
    // Terapkan background
    document.querySelector('.dashboard-page .bg-image').style.backgroundImage = bgImage;
    
    // Tutup modal
    closeChangeBgModal();
    
    // Tampilkan notifikasi
    alert('Background berhasil diganti!');
}

// Fungsi untuk load data awal
function loadInitialData() {
    // Load ucapan dari localStorage jika ada
    const savedMessage = localStorage.getItem('welcomeMessage');
    const savedName = localStorage.getItem('greetingName');
    
    if (savedMessage) {
        document.getElementById('welcomeMessage').innerHTML = 
            `<p>${savedMessage.replace(/\n/g, '</p><p>')}</p>`;
    }
    
    if (savedName) {
        document.getElementById('greetingName').textContent = savedName;
    }
    
    // Load background dari localStorage jika ada
    const savedBg = localStorage.getItem('dashboardBg');
    const customBgUrl = localStorage.getItem('customBgUrl');
    
    if (savedBg === 'custom' && customBgUrl) {
        document.querySelector('.dashboard-page .bg-image').style.backgroundImage = 
            `url('${customBgUrl}')`;
    } else if (savedBg && savedBg !== 'custom') {
        document.querySelector('.dashboard-page .bg-image').style.backgroundImage = 
            `url('assets/backgrounds/${savedBg}')`;
    }
    
    // Load data statistik
    updateStats();
}

// Fungsi untuk update statistik
function updateStats() {
    // Di sini Anda bisa menambahkan logika untuk menghitung
    // jumlah foto, teman sekelas, dan kenangan
    // Untuk sekarang kita gunakan angka statis
    const totalPhotos = 24;
    const totalClassmates = 32;
    const totalMemories = 12;
    
    document.getElementById('totalPhotos').textContent = totalPhotos;
    document.getElementById('totalClassmates').textContent = totalClassmates;
    document.getElementById('totalMemories').textContent = totalMemories;
}

// Fungsi utilitas untuk mengekstrak teks dari HTML
function extractTextFromHTML(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
}
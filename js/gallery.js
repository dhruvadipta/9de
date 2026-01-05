/**
 * Galeri Foto Kenangan
 * Menampilkan struktur folder dan foto-foto kenangan
 * Foto WAJIB bisa diunduh
 * Deskripsi MUDAH diubah
 * DILARANG menambahkan fitur komentar
 */

// Data galeri foto
const galleryData = {
    "studio": [
        {
            "id": 1,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio ",
            "path": "assets/images/gallery/studio/studio1.jpg"
        },
        {
            "id": 2,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto kelas 9 di studio profesional",
            "path": "assets/images/gallery/studio/studio2.jpg"
        },
        {
            "id": 3,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio3.jpg"
        },
        {
            "id": 4,
            "filename": "studio2.jpg",
            "title": "Foto dengan Guru Wali",
            "date": "15 Maret 2024",
            "description": "Bersama Pak Budi dan Ibu Sari, wali kelas 9A dan 9B.",
            "path": "assets/images/gallery/studio/studio4.jpg"
        },
        {
            "id": 5,
            "filename": "studio3.jpg",
            "title": "Foto Perpisahan Studio",
            "date": "20 Mei 2024",
            "description": "Foto studio untuk kenangan perpisahan kelas 9.",
            "path": "assets/images/gallery/studio/studio5.jpg"
        },
        {
            "id": 6,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio6.jpg"
        },
        {
            "id": 7,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio7.jpg"
        },
        {
            "id": 8,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio8.jpg"
        },
        {
            "id": 9,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio9.jpg"
        },
        {
            "id": 10,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio10.jpg"
        },
        {
            "id": 11,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio11.jpg"
        },
        {
            "id": 12,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio12.jpg"
        },
        {
            "id": 13,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio13.jpg"
        },
        {
            "id": 14,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio14.jpg"
        },
        {
            "id": 15,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio15.jpg"
        },
        {
            "id": 16,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio16.jpg"
        },
        {
            "id": 17,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio17.jpg"
        },
        {
            "id": 18,
            "filename": "studio1.jpg",
            "title": "Foto Kelas Studio",
            "date": "15 Maret 2024",
            "description": "Foto studio seluruh kelas 9 di studio profesional. Pakai seragam putih abu-abu lengkap.",
            "path": "assets/images/gallery/studio/studio18.jpg"
        },
        
        
        
    ],
    "class": [
        {
            "id": 19,
            "filename": "class1.jpg",
            "title": "Belajar di Kelas",
            "date": "10 Januari 2024",
            "description": "Kegiatan belajar matematika di pagi hari.",
            "path": "assets/images/gallery/class/class1.jpg"
        },
        {
            "id": 20,
            "filename": "class2.jpg",
            "title": "Presentasi Kelompok",
            "date": "22 Februari 2024",
            "description": "Presentasi kelompok IPA tentang ekosistem.",
            "path": "assets/images/gallery/class/class2.jpg"
        },
        {
            "id": 6,
            "filename": "class3.jpg",
            "title": "Ujian Semester",
            "date": "5 Maret 2024",
            "description": "Suasana ujian semester genap di kelas.",
            "path": "assets/images/gallery/class/class3.jpg"
        }
    ],
    "activities": [
        {
            "id": 7,
            "filename": "activity1.jpg",
            "title": "Upacara Bendera",
            "date": "17 Agustus 2023",
            "description": "Upacara HUT RI ke-78 di lapangan sekolah.",
            "path": "assets/images/gallery/activities/activity1.jpg"
        },
        {
            "id": 8,
            "filename": "activity2.jpg",
            "title": "Lomba 17-an",
            "date": "18 Agustus 2023",
            "description": "Lomba makan kerupuk saat perayaan 17 Agustusan.",
            "path": "assets/images/gallery/activities/activity2.jpg"
        },
        {
            "id": 9,
            "filename": "activity3.jpg",
            "title": "Peringatan Hari Guru",
            "date": "25 November 2023",
            "description": "Persembahan untuk guru-guru tercinta.",
            "path": "assets/images/gallery/activities/activity3.jpg"
        }
    ],
    "graduation": [
        {
            "id": 10,
            "filename": "graduation1.jpg",
            "title": "Wisuda Kelas 9",
            "date": "15 Juni 2024",
            "description": "Acara wisuda dan pelepasan siswa kelas 9.",
            "path": "assets/images/gallery/graduation/graduation1.jpg"
        },
        {
            "id": 10,
            "filename": "graduation1.jpg",
            "title": "Wisuda Kelas 9",
            "date": "15 Juni 2024",
            "description": "Acara wisuda dan pelepasan siswa kelas 9.",
            "path": "assets/images/gallery/graduation/graduation1.jpg"
        },
        {
            "id": 11,
            "filename": "graduation2.jpg",
            "title": "Serah Terima Raport",
            "date": "15 Juni 2024",
            "description": "Penyerahan raport oleh wali kelas.",
            "path": "assets/images/gallery/graduation/graduation2.jpg"
        },
        {
            "id": 12,
            "filename": "graduation3.jpg",
            "title": "Foto Bersama setelah Wisuda",
            "date": "15 Juni 2024",
            "description": "Momen bahagia setelah acara wisuda.",
            "path": "assets/images/gallery/graduation/graduation3.jpg"
        }
    ]
};

// Folder names for display
const folderNames = {
    "studio": "Foto Studio",
    "class": "Foto Kelas",
    "activities": "Kegiatan Sekolah",
    "graduation": "Wisuda & Perpisahan"
};

let currentFolder = null;

// Load gallery data
function loadGalleryData() {
    // Add event listeners to folder cards
    const folderCards = document.querySelectorAll('.folder-card');
    folderCards.forEach(card => {
        card.addEventListener('click', function() {
            const folder = this.getAttribute('data-folder');
            openFolder(folder);
        });
    });
    
    // Back to folders button
    const backBtn = document.getElementById('backToFolders');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            showFolders();
        });
    }
    
    // Modal close button
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            closeModal();
        });
    }
    
    // Edit description button
    const editDescBtn = document.getElementById('editDescBtn');
    if (editDescBtn) {
        editDescBtn.addEventListener('click', editDescription);
    }
}

// Open folder and show photos
function openFolder(folder) {
    currentFolder = folder;
    
    // Hide folders, show photos
    document.querySelector('.folders-container').style.display = 'none';
    document.getElementById('photosContainer').style.display = 'block';
    
    // Set folder title
    document.getElementById('photosTitle').textContent = folderNames[folder];
    
    // Clear and populate photos grid
    const photosGrid = document.getElementById('photosGrid');
    photosGrid.innerHTML = '';
    
    const photos = galleryData[folder] || [];
    
    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card glass';
        photoCard.setAttribute('data-id', photo.id);
        
        photoCard.innerHTML = `
            <img src="${photo.path}" alt="${photo.title}" class="photo-image">
            <div class="photo-info">
                <h4 class="photo-name">${photo.title}</h4>
                <p class="photo-date">${photo.date}</p>
                <p class="photo-preview-desc">${photo.description}</p>
            </div>
        `;
        
        photoCard.addEventListener('click', function() {
            openPhotoModal(photo);
        });
        
        photosGrid.appendChild(photoCard);
    });
}

// Show folders (back from photos)
function showFolders() {
    document.querySelector('.folders-container').style.display = 'block';
    document.getElementById('photosContainer').style.display = 'none';
    currentFolder = null;
}

// Open photo modal
// Di fungsi openPhotoModal, tambahkan:
modalImage.onerror = function() {
    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23667eea"/><text x="200" y="150" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Foto Tidak Ditemukan</text></svg>';
    this.alt = 'Foto tidak tersedia';
};

// Atau gunakan placeholder lokal
modalImage.onerror = function() {
    this.src = 'assets/images/placeholder.jpg';
    this.alt = 'Foto placeholder';
};
function openPhotoModal(photo) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const photoDesc = document.getElementById('photoDesc');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Set modal content
    modalImage.src = photo.path;
    modalImage.alt = photo.title;
    modalTitle.textContent = photo.title;
    photoDesc.textContent = photo.description;
    
    // Set download link
    downloadBtn.href = photo.path;
    downloadBtn.download = photo.filename;
    
    // Store current photo ID in modal for editing
    modal.setAttribute('data-photo-id', photo.id);
    
    // Show modal
    modal.style.display = 'flex';
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close photo modal
function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
}

// Edit photo description
function editDescription() {
    const modal = document.getElementById('photoModal');
    const photoId = parseInt(modal.getAttribute('data-photo-id'));
    const currentDesc = document.getElementById('photoDesc').textContent;
    
    const newDesc = prompt('Edit deskripsi foto:', currentDesc);
    
    if (newDesc !== null && newDesc.trim() !== '') {
        // Update in gallery data
        if (currentFolder) {
            const photos = galleryData[currentFolder];
            const photoIndex = photos.findIndex(p => p.id === photoId);
            
            if (photoIndex !== -1) {
                photos[photoIndex].description = newDesc;
                
                // Update modal
                document.getElementById('photoDesc').textContent = newDesc;
                
                // Update in the grid if visible
                const photoCard = document.querySelector(`.photo-card[data-id="${photoId}"] .photo-preview-desc`);
                if (photoCard) {
                    photoCard.textContent = newDesc;
                }
                
                // Save to localStorage
                saveGalleryData();
                
                alert('Deskripsi berhasil diubah!');
            }
        }
    }
}

// Save gallery data to localStorage
function saveGalleryData() {
    localStorage.setItem('galleryData', JSON.stringify(galleryData));
}

// Load gallery data from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedData = localStorage.getItem('galleryData');
    if (savedData) {
        // Update galleryData with saved descriptions
        const savedGalleryData = JSON.parse(savedData);
        
        // Merge saved descriptions with existing data
        for (const folder in savedGalleryData) {
            if (galleryData[folder]) {
                galleryData[folder].forEach((photo, index) => {
                    if (savedGalleryData[folder] && savedGalleryData[folder][index]) {
                        photo.description = savedGalleryData[folder][index].description;
                    }
                });
            }
        }
    }
});
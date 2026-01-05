// Script untuk membuat foto placeholder otomatis
const fs = require('fs');
const path = require('path');

const folders = ['studio', 'class', 'activities', 'graduation'];
const photoCounts = {
    studio: 4,
    class: 3,
    activities: 3,
    graduation: 3
};

// Create folders if not exists
folders.forEach(folder => {
    const folderPath = path.join(__dirname, 'assets', 'images', 'gallery', folder);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
    }
});

// Create HTML page with placeholder images
let html = `<!DOCTYPE html>
<html>
<head>
    <title>Placeholder Photos - Galeri SMP</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        .container { max-width: 1000px; margin: 0 auto; }
        .folder-section { margin: 30px 0; padding: 20px; background: #f5f5f5; border-radius: 10px; }
        .photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 15px 0; }
        .photo-item img { width: 100%; border: 2px solid #ddd; border-radius: 5px; }
        .download-link { display: block; margin-top: 5px; color: #667eea; text-decoration: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Placeholder Photos untuk Galeri Kenangan SMP</h1>
        <p>Klik kanan pada gambar → Save image as... → Simpan dengan nama yang sesuai</p>`;

folders.forEach(folder => {
    html += `
        <div class="folder-section">
            <h2>Folder: ${folder.toUpperCase()} (${photoCounts[folder]} foto)</h2>
            <div class="photo-grid">`;
    
    for (let i = 1; i <= photoCounts[folder]; i++) {
        const filename = `${folder}${i}.jpg`;
        const colors = ['667eea', '764ba2', '4facfe', '00f2fe', '43e97b', 'fa709a'];
        const color = colors[(i-1) % colors.length];
        
        html += `
                <div class="photo-item">
                    <img src="https://via.placeholder.com/400x300/${color}/ffffff?text=${folder}+${i}" alt="${filename}">
                    <a href="https://via.placeholder.com/400x300/${color}/ffffff?text=${folder}+${i}" class="download-link" download="${filename}">
                        Download ${filename}
                    </a>
                </div>`;
    }
    
    html += `
            </div>
        </div>`;
});

html += `
    </div>
</body>
</html>`;

// Save HTML file
const htmlPath = path.join(__dirname, 'download-placeholders.html');
fs.writeFileSync(htmlPath, html);
console.log(`Created placeholder download page: ${htmlPath}`);
console.log('\n📸 CARA PAKAI:');
console.log('1. Buka file download-placeholders.html di browser');
console.log('2. Download semua foto dengan klik kanan → Save image as...');
console.log('3. Simpan dengan nama yang sesuai di folder assets/images/gallery/');
console.log('4. Foto siap ditampilkan di galeri!');
document.addEventListener("DOMContentLoaded", () => {

  /* ================= GALERI DATA ================= */
  const galleryData = [
    { src: "images/foto-kelas.jpg", category: "foto-kelas", caption: "Foto Kelas" },
    { src: "images/foto-kelas.jpg", category: "kegiatan", caption: "Kegiatan Belajar" },
    { src: "images/foto-kelas.jpg", category: "prestasi", caption: "Prestasi Kelas" },
    { src: "images/foto-kelas.jpg", category: "liburan", caption: "Liburan Bersama" }
  ];

  const galleryContainer = document.querySelector(".gallery-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderGallery(filter) {
    galleryContainer.innerHTML = "";

    galleryData
      .filter(item => filter === "all" || item.category === filter)
      .forEach(item => {
        const div = document.createElement("div");
        div.className = "gallery-item";
        div.innerHTML = `
          <img src="${item.src}" alt="${item.caption}">
          <span>${item.caption}</span>
        `;
        galleryContainer.appendChild(div);
      });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery("all");

  /* ================= MUSIC ================= */
  const musicBtn = document.getElementById("musicToggle");
  const music = document.getElementById("backgroundMusic");

  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.classList.add("playing");
    } else {
      music.pause();
      musicBtn.classList.remove("playing");
    }
  });

});
/* ================= PESAN & KESAN ================= */

const senderInput = document.getElementById("senderName");
const messageInput = document.getElementById("messageText");
const submitBtn = document.getElementById("submitMessage");
const messagesList = document.getElementById("messagesList");

let messages = JSON.parse(localStorage.getItem("classMessages")) || [];

function renderMessages() {
  messagesList.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message-item";
    div.innerHTML = `
      <strong>${msg.name}</strong>
      <p>${msg.text}</p>
    `;
    messagesList.prepend(div);
  });
}

submitBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const name = senderInput.value.trim();
  const text = messageInput.value.trim();

  if (!name || !text) {
    alert("Nama dan pesan tidak boleh kosong!");
    return;
  }

  const time = new Date().toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  messages.push({ name, text, time });
  localStorage.setItem("classMessages", JSON.stringify(messages));

  senderInput.value = "";
  messageInput.value = "";

  renderMessages();
}
messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
function renderMessages() {
  messagesList.innerHTML = "";

  messages.forEach((msg, index) => {
    const div = document.createElement("div");
    div.className = "message-item";
    div.innerHTML = `
      <div class="message-header">
        <strong>${msg.name}</strong>
        <span>${msg.time}</span>
      </div>
      <p>${msg.text}</p>
      <button class="delete-btn" onclick="deleteMessage(${index})">
        Hapus
      </button>
    `;
    messagesList.prepend(div);
  });
}

function deleteMessage(index) {
  if (confirm("Hapus pesan ini?")) {
    messages.splice(index, 1);
    localStorage.setItem("classMessages", JSON.stringify(messages));
    renderMessages();
  }
}
document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     DATA GALERI
     ===================== */
  const galleryData = [
    { img: "images/1.jpg", category: "foto-kelas",title: "hhahaa" },
     { img: "images/44.jpg", category: "foto-kelas", },
    { img: "images/2.jpg", category: "foto-kelas", },
    { img: "images/3.jpg", category: "kegiatan",},
    { img: "images/4.jpg", category: "kegiatan", },
    { img: "images/5.jpg", category: "prestasi", },
    { img: "images/6.jpg", category: "prestasi",  },
    { img: "images/7.jpg", category: "liburan", },
    { img: "images/8.jpg", category: "liburan", title: "Study Tour" }
  ];

  const galleryContainer = document.querySelector(".gallery-container");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderGallery(filter = "all") {
    galleryContainer.innerHTML = "";

    galleryData.forEach(item => {
      if (filter === "all" || item.category === filter) {
        const div = document.createElement("div");
        div.className = `gallery-item ${item.category}`;
        div.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <div class="gallery-caption">${item.title}</div>
        `;
        galleryContainer.appendChild(div);
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery();


  /* =====================
     MODAL GAMBAR
     ===================== */
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("modalCaption");
  const closeModal = document.querySelector(".close-modal");

  document.addEventListener("click", e => {
    if (e.target.closest(".gallery-item img")) {
      modal.style.display = "block";
      modalImg.src = e.target.src;
      captionText.innerText = e.target.alt;
    }
  });

  closeModal.onclick = () => modal.style.display = "none";
  modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };


  /* =====================
     MUSIC PLAYER
     ===================== */
  const musicBtn = document.getElementById("musicToggle");
  const music = document.getElementById("backgroundMusic");
  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play();
      musicBtn.classList.add("active");
      musicBtn.querySelector("span").innerText = "Hentikan Lagu";
    } else {
      music.pause();
      musicBtn.classList.remove("active");
      musicBtn.querySelector("span").innerText = "Putar Lagu Kenangan";
    }
    isPlaying = !isPlaying;
  });

});

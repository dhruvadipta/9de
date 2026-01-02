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

submitBtn.addEventListener("click", () => {
  const name = senderInput.value.trim();
  const text = messageInput.value.trim();

  if (!name || !text) {
    alert("Nama dan pesan tidak boleh kosong!");
    return;
  }

  messages.push({ name, text });
  localStorage.setItem("classMessages", JSON.stringify(messages));

  senderInput.value = "";
  messageInput.value = "";

  renderMessages();
});

renderMessages();

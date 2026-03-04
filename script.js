const video = document.getElementById("bgVideo");
const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

// tenta dar play no vídeo
async function ensureVideoPlaying() {
  try {
    video.muted = true;        // essencial
    video.playsInline = true;  // essencial iPhone
    await video.play();
  } catch (e) {
    // se bloquear, a gente tenta novamente no primeiro toque do usuário
  }
}

// tenta assim que carregar
document.addEventListener("DOMContentLoaded", ensureVideoPlaying);
window.addEventListener("pageshow", ensureVideoPlaying);

// no primeiro toque, força o vídeo iniciar (mata o play nativo)
function firstTouchStart() {
  ensureVideoPlaying();
  // também “desbloqueia” áudio no iPhone
  music.play().then(() => music.pause()).catch(() => {});
  window.removeEventListener("touchstart", firstTouchStart);
  window.removeEventListener("click", firstTouchStart);
}
window.addEventListener("touchstart", firstTouchStart, { once: true });
window.addEventListener("click", firstTouchStart, { once: true });

// botão de música
playBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    music.currentTime = 0;
    await music.play();
  } catch (err) {
    alert("Toca na tela uma vez e tenta de novo 🙂");
  }
});

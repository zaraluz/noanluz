const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");
const openBtn = document.getElementById("openInvite");
const part2 = document.getElementById("part2");

// iPhone/WhatsApp: precisa “desbloquear” o áudio no primeiro toque,
// mas vamos fazer isso MUDO (sem tocar de verdade).
async function unlockAudioOnce() {
  try {
    music.muted = true;
    await music.play();
    music.pause();
    music.currentTime = 0;
    music.muted = false;
  } catch (e) {
    // ok, alguns browsers bloqueiam mesmo; play button resolve
  }
}

// Desbloqueia no primeiro toque em qualquer lugar, mas NÃO toca música
window.addEventListener("touchstart", unlockAudioOnce, { once: true });
window.addEventListener("click", unlockAudioOnce, { once: true });

// Abrir convite: rolar para tela 2 (não toca música)
openBtn?.addEventListener("click", () => {
  part2.scrollIntoView({ behavior: "smooth" });
});

// Botão play: aqui sim toca a música
playBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    music.currentTime = 0;
    await music.play();
  } catch (err) {
    alert("Se estiver no WhatsApp, toque na tela uma vez e aperte o play de novo 🙂");
  }
});

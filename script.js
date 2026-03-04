const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");
const openBtn = document.getElementById("openInvite");
const part2 = document.getElementById("part2");

// iPhone: destrava áudio no primeiro toque em qualquer lugar
function unlockOnce(){
  music.play().then(()=>music.pause()).catch(()=>{});
  window.removeEventListener("touchstart", unlockOnce);
  window.removeEventListener("click", unlockOnce);
}
window.addEventListener("touchstart", unlockOnce, { once:true });
window.addEventListener("click", unlockOnce, { once:true });

// Abrir convite: rolar para tela 2
openBtn?.addEventListener("click", () => {
  part2.scrollIntoView({ behavior: "smooth" });
});

// Tocar música
playBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  try{
    music.currentTime = 0;
    await music.play();
  }catch(err){
    alert("Toca na tela uma vez e tenta de novo 🙂");
  }
});

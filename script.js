const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

// iPhone: destrava áudio no primeiro toque em qualquer lugar
function unlockOnce(){
  music.play().then(()=>music.pause()).catch(()=>{});
  window.removeEventListener("touchstart", unlockOnce);
  window.removeEventListener("click", unlockOnce);
}
window.addEventListener("touchstart", unlockOnce, { once:true });
window.addEventListener("click", unlockOnce, { once:true });

playBtn.addEventListener("click", async () => {
  try{
    music.currentTime = 0;
    await music.play();
  }catch(e){
    alert("Toca na tela uma vez e tenta de novo 🙂");
  }
});

// Popup
const modal=document.getElementById("popupModal");
const popupImg=document.getElementById("popupImg");
const popupTitle=document.getElementById("popupTitle");
const popupDesc=document.getElementById("popupDesc");
const closeBtn=document.getElementsByClassName("close-popup")[0];

function loadGallery(){
  const fridge=document.getElementById("gallery-fridge");
  // Ladda sparad HTML om finns
  if(localStorage.getItem("galleryHTML")){
    fridge.innerHTML = localStorage.getItem("galleryHTML");
  }
  fridge.querySelectorAll(".photo").forEach(photo=>{
    photo.addEventListener("click",()=>{
      popupImg.src=photo.querySelector("img").src;
      popupTitle.textContent=photo.dataset.title;
      popupDesc.textContent=photo.dataset.desc;
      modal.style.display="flex";
    });
  });
}

// Popup close
closeBtn.onclick=()=>modal.style.display="none";
window.onclick=(e)=>{if(e.target==modal) modal.style.display="none";}

// Server status
const statusText=document.getElementById("status-text");
const playersText=document.getElementById("players-text");
setTimeout(()=>{
  statusText.textContent = localStorage.getItem("serverStatus")||"Online";
  playersText.textContent = localStorage.getItem("serverPlayers")||"12/100 spelare online";
},100);

// Hero och kontakt
if(localStorage.getItem("heroTitle")) document.getElementById("hero-title").textContent=localStorage.getItem("heroTitle");
if(localStorage.getItem("heroSubtitle")) document.getElementById("hero-subtitle").textContent=localStorage.getItem("heroSubtitle");
if(localStorage.getItem("heroText")) document.getElementById("hero-text").textContent=localStorage.getItem("heroText");
if(localStorage.getItem("heroBg")) document.querySelector(".hero").style.backgroundImage=`url('${localStorage.getItem("heroBg")}')`;
if(localStorage.getItem("contactText")) document.getElementById("contact-text").textContent=localStorage.getItem("contactText");

// Meny
const navLinks = document.querySelectorAll("#navMenu a");
if(localStorage.getItem("menuHome")) navLinks[0].textContent=localStorage.getItem("menuHome");
if(localStorage.getItem("menuGallery")) navLinks[1].textContent=localStorage.getItem("menuGallery");
if(localStorage.getItem("menuLore")) navLinks[2].textContent=localStorage.getItem("menuLore");
if(localStorage.getItem("menuContact")) navLinks[3].textContent=localStorage.getItem("menuContact");

loadGallery();

// Popup
const modal=document.getElementById("popupModal");
const popupImg=document.getElementById("popupImg");
const popupTitle=document.getElementById("popupTitle");
const popupDesc=document.getElementById("popupDesc");
const closeBtn=document.getElementsByClassName("close-popup")[0];

document.querySelectorAll(".photo").forEach((photo,i)=>{
  photo.addEventListener("click",()=>{
    popupImg.src=photo.querySelector("img").src;
    popupTitle.textContent=photo.dataset.title;
    popupDesc.textContent=photo.dataset.desc;
    modal.style.display="flex";
  });

  // Load saved gallery
  if(localStorage.getItem("galleryTitle"+(i+1))) photo.dataset.title = localStorage.getItem("galleryTitle"+(i+1));
  if(localStorage.getItem("galleryDesc"+(i+1))) photo.dataset.desc = localStorage.getItem("galleryDesc"+(i+1));
  if(localStorage.getItem("galleryImg"+(i+1))) photo.querySelector("img").src = localStorage.getItem("galleryImg"+(i+1));
});

closeBtn.onclick=()=>modal.style.display="none";
window.onclick=(e)=>{if(e.target==modal) modal.style.display="none";}

// Server Status (dummy)
const statusText=document.getElementById("status-text");
const playersText=document.getElementById("players-text");
setTimeout(()=>{
  const savedStatus = localStorage.getItem("serverStatus") || "Online";
  const savedPlayers = localStorage.getItem("serverPlayers") || "12/100 spelare online";
  statusText.textContent = savedStatus;
  playersText.textContent = savedPlayers;
},1000);

// Hero / contact text from admin panel
if(localStorage.getItem("heroTitle")) document.getElementById("hero-title").textContent=localStorage.getItem("heroTitle");
if(localStorage.getItem("heroSubtitle")) document.getElementById("hero-subtitle").textContent=localStorage.getItem("heroSubtitle");
if(localStorage.getItem("heroText")) document.getElementById("hero-text").textContent=localStorage.getItem("heroText");
if(localStorage.getItem("heroBg")) document.querySelector(".hero").style.backgroundImage=`url('img/${localStorage.getItem("heroBg")}')`;
if(localStorage.getItem("contactText")) document.getElementById("contact-text").textContent=localStorage.getItem("contactText");

// Menu updates
const navLinks = document.querySelectorAll("#navMenu a");
if(localStorage.getItem("menuHome")) navLinks[0].textContent=localStorage.getItem("menuHome");
if(localStorage.getItem("menuGallery")) navLinks[1].textContent=localStorage.getItem("menuGallery");
if(localStorage.getItem("menuLore")) navLinks[2].textContent=localStorage.getItem("menuLore");
if(localStorage.getItem("menuContact")) navLinks[3].textContent=localStorage.getItem("menuContact");

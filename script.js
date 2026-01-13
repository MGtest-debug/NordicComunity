// Popup
const modal=document.getElementById("popupModal");
const popupImg=document.getElementById("popupImg");
const popupTitle=document.getElementById("popupTitle");
const popupDesc=document.getElementById("popupDesc");
const closeBtn=document.getElementsByClassName("close-popup")[0];

document.querySelectorAll(".photo").forEach(photo=>{
  photo.addEventListener("click",()=>{
    popupImg.src=photo.querySelector("img").src;
    popupTitle.textContent=photo.dataset.title;
    popupDesc.textContent=photo.dataset.desc;
    modal.style.display="flex";
  });
});

closeBtn.onclick=()=>modal.style.display="none";
window.onclick=(e)=>{if(e.target==modal) modal.style.display="none";}

// Server Status (dummy)
const statusText=document.getElementById("status-text");
const playersText=document.getElementById("players-text");
setTimeout(()=>{
  statusText.textContent="Online";
  playersText.textContent="12/100 spelare online";
},1000);

// Apply saved hero/contact texts from admin panel
if(localStorage.getItem("heroTitle")) document.getElementById("hero-title").textContent=localStorage.getItem("heroTitle");
if(localStorage.getItem("heroSubtitle")) document.getElementById("hero-subtitle").textContent=localStorage.getItem("heroSubtitle");
if(localStorage.getItem("heroText")) document.getElementById("hero-text").textContent=localStorage.getItem("heroText");
if(localStorage.getItem("contactText")) document.getElementById("contact-text").textContent=localStorage.getItem("contactText");

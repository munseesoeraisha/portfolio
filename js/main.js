const contactBtn =
document.querySelector(".contact-btn");

const contactSidebar =
document.querySelector(".contact-sidebar");

const closeSidebar =
document.querySelector(".close-sidebar");


contactBtn.onclick = function(){

    contactSidebar.classList.add("show");

};


closeSidebar.onclick = function(){

    contactSidebar.classList.remove("show");

};
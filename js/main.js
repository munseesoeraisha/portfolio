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

const menuIcon =
document.querySelector(".menu-icon");

const navLinks =
document.querySelector(".nav-links");


menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
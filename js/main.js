const menuIcon =
document.querySelector(".menu-icon");

const navLinks =
document.querySelector(".nav-links");

const navItems =
document.querySelectorAll(".nav-links a");


// ONLY RUN IF MENU EXISTS

if(menuIcon && navLinks){

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// CLOSE MENU WHEN CLICKING LINKS

if(navItems){

    navItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}
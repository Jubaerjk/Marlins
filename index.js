// ================================
// MOBILE NAV TOGGLE
// ================================
const btnNav = document.querySelector(".btn-mobile-nav");
const navbar = document.querySelector(".navbar");

btnNav.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
});


// ================================
// CLOSE MENU WHEN CLICK LINK
// ================================
document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("nav-open");
    });
});


// ================================
// SLIDER BUTTONS (placeholder)
// ================================
document.querySelector(".slider-btn-prev").addEventListener("click", () => {
    console.log("Previous slide");
});

document.querySelector(".slider-btn-next").addEventListener("click", () => {
    console.log("Next slide");
});



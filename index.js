const mobileNav = document.getElementsByClassName("btn-mobile-nav");
const navmenu = document.querySelector(".navmenu");

mobileNav.addEventListener("click", () => {
    navmenu.classList.toggle("active");

    // Update accessibility attribute
    const expanded = mobileNav.getAttribute("aria-expanded") === "true";
    mobileNav.setAttribute("aria-expanded", !expanded);
});

const hamburger = document.getElementById("hamburger");
const navmenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("active");

    // Update accessibility attribute
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
});

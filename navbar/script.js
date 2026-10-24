const toggle = document.querySelector(".menu_toggle");
const menu = document.getElementById("menu");

const setMenu = (open) => {
    toggle.classList.toggle("active", open);
    menu.classList.toggle("active", open);
}
toggle.addEventListener("click", () => {
    setMenu(!menu.classList.contains("active"))
})
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false))
})
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenu(false);
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
});

function redirectTo(page) {
    window.location.href = page;
}

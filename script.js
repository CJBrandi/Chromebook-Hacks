document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const toggleSidebar = document.querySelector(".menu-toggle");

    toggleSidebar?.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
});

function redirectToPage(page) {
    if (page) {
        window.location.href = page;
    }
}

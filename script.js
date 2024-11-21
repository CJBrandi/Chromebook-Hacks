document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const themeToggle = document.getElementById("theme-toggle");
    let isLightMode = false;

    // Ensure Sidebar is Closed by Default
    sidebar.classList.add("hidden");

    // Toggle Sidebar Visibility
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });

    // Toggle Theme
    themeToggle.addEventListener("click", () => {
        isLightMode = !isLightMode;
        document.body.classList.toggle("light-mode", isLightMode);
        themeToggle.textContent = isLightMode ? "🌑" : "🌙";
    });
});

// Redirect Function
function redirectToPage(page) {
    if (page) {
        window.location.href = page;
    }
}

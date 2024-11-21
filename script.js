document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    const themeToggle = document.getElementById("theme-toggle");
    let isLightMode = false;

    // Ensure Sidebar is Closed by Default on Load
    sidebar.classList.add("hidden");

    // Toggle Sidebar Visibility
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });

    // Toggle Theme (Dark and Light Mode)
    themeToggle.addEventListener("click", () => {
        isLightMode = !isLightMode;
        document.body.classList.toggle("light-mode", isLightMode);

        // Update Emoji for Theme Toggle Button
        themeToggle.textContent = isLightMode ? "☀️" : "🌙";
    });

    // Set the Initial State for Dark Mode Button
    themeToggle.textContent = isLightMode ? "☀️" : "🌙";
});

// Redirect Function
function redirectToPage(page) {
    if (page) {
        window.location.href = page;
    }
}

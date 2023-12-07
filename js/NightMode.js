const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

document.getElementById("toggleNightModeBtn").addEventListener("click", toggleDarkMode);
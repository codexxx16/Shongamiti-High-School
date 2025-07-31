document.addEventListener("DOMContentLoaded", () => { const themeToggle = document.getElementById("themeToggle"); if (themeToggle) { themeToggle.addEventListener("click", () => { document.body.classList.toggle("dark-theme"); }); }

const hamburger = document.getElementById("hamburger"); const navWrapper = document.querySelector(".nav-wrapper"); if (hamburger && navWrapper) { hamburger.addEventListener("click", () => { navWrapper.classList.toggle("open-nav"); }); } });

/* Optional: Dark Theme Styles */ body.dark-theme { background-color: #121212; color: #fff; }

body.dark-theme .content-box, body.dark-theme .review-card { background-color: #1e1e1e; color: #eee; }

body.dark-theme header.main-header, body.dark-theme footer, body.dark-theme .nav-wrapper { background-color: #222; }

body.dark-theme .scrolling-nav a:hover, body.dark-theme footer a:hover { color: #ffd54f; }


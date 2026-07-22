// Welcome Alert
window.addEventListener("load", () => {
    console.log("Portfolio loaded successfully.");
});

// Smooth Scroll for Nav Links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Active Navigation Link Indicator
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a[href^='#']");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Interactive Project Card Buttons
document.querySelectorAll(".demo-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const projectTitle = e.target.getAttribute("data-title");
        alert(`Opening Live Demo for: ${projectTitle}`);
    });
});

document.querySelectorAll(".code-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const projectTitle = e.target.getAttribute("data-title");
        alert(`Redirecting to source code repository for: ${projectTitle}`);
    });
});

// Resume Download Button Action
const resumeBtn = document.getElementById("download-resume-btn");
if (resumeBtn) {
    resumeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Resume download requested! File will download shortly.");
    });
}

// Scroll Intersection Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Light / Dark Theme Switcher Logic
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

function applyTheme(theme) {
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.textContent = "☀️";
        themeText.textContent = "Light";
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.textContent = "🌙";
        themeText.textContent = "Dark";
        localStorage.setItem("theme", "dark");
    }
}

// Check stored theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// Toggle Theme Event Listener
themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
});
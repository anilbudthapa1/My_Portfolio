// app.js
(function () {
  const root = document.documentElement;

  // Theme
  const toggle = document.getElementById("themeToggle");
  const themeLabel = document.getElementById("themeLabel");
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;

  function setTheme(next) {
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle?.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    if (themeLabel) themeLabel.textContent = `Theme: ${next[0].toUpperCase()}${next.slice(1)}`;
  }

  setTheme(saved || (prefersLight ? "light" : "dark"));

  toggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
  });

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  function setMobileNav(open) {
    if (!mobileNav || !navToggle) return;
    mobileNav.classList.toggle("open", open);
    mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = mobileNav?.classList.contains("open");
    setMobileNav(!isOpen);
  });

  mobileNav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMobileNav(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMobileNav(false);
  });

  // Scrollspy (active nav link)
  const sectionIds = ["projects", "skills", "certs", "about", "contact"];
  const navLinks = Array.from(document.querySelectorAll('.nav a'))
    .filter(a => a.getAttribute("href")?.startsWith("#"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0.01 });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Copy email
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyStatus = document.getElementById("copyStatus");
  const email = "hypemsltech@gmail.com";

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      if (copyStatus) copyStatus.textContent = "Copied email to clipboard.";
    } catch {
      if (copyStatus) copyStatus.textContent = "Copy failed. Please copy manually: " + email;
    }
    window.setTimeout(() => { if (copyStatus) copyStatus.textContent = ""; }, 2500);
  });
})();

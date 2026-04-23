(function () {
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  function setMobileNav(open) {
    if (!mobileNav || !navToggle) return;
    mobileNav.classList.toggle("open", open);
    mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");

    const icon = navToggle.querySelector(".material-symbols-outlined");
    if (icon) icon.textContent = open ? "close" : "menu";
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = mobileNav?.classList.contains("open");
    setMobileNav(!isOpen);
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileNav(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMobileNav(false);
  });

  document.querySelectorAll('a[href="assets/resume.pdf"]').forEach((link) => {
    link.setAttribute("href", "resume.html");
    link.setAttribute("target", "_self");
    link.removeAttribute("rel");
  });
})();

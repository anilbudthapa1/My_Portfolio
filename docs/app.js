

(function () {
  // ---------------------------
  // Mobile nav
  // ---------------------------
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

  mobileNav?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setMobileNav(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMobileNav(false);
  });

  // ---------------------------
  // Fast scroll over Spline (wheel)
  // ---------------------------
  let velocity = 0;
  let rafId = null;

  // Tuned for "fast" feel:
  const FRICTION = 0.84;        // inertia decay (lower = longer)
  const MAX_STEP = 6500;        // max pixels per frame
  const STOP_EPS = 0.6;         // stop threshold
  const BOOST_TRACKPAD = 0.10;   // small deltas boost (try 8–12)
  const BOOST_WHEEL = 0.4;      // large deltas boost (try 2.5–4)

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function normalizeWheelDelta(e) {
    let dy = e.deltaY;
    if (e.deltaMode === 1) dy *= 16; // lines -> px
    if (e.deltaMode === 2) dy *= window.innerHeight; // pages -> px
    return dy;
  }

  function isOverSpline(target) {
    return !!(target && typeof target.closest === "function" && target.closest("spline-viewer"));
  }

  function tick() {
    const step = clamp(velocity, -MAX_STEP, MAX_STEP);
    if (step !== 0) window.scrollBy({ top: step, left: 0, behavior: "auto" });

    velocity *= FRICTION;

    if (Math.abs(velocity) < STOP_EPS) {
      velocity = 0;
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  document.addEventListener(
    "wheel",
    (e) => {
      if (!isOverSpline(e.target)) return;

      // Prevent Spline from zooming/orbiting on wheel
      e.preventDefault();

      const dy = normalizeWheelDelta(e);
      const abs = Math.abs(dy);

      // Trackpad usually emits small deltas, wheel mouse emits larger jumps
      const boost = abs < 15 ? BOOST_TRACKPAD : BOOST_WHEEL;

      velocity += dy * boost;
      velocity = clamp(velocity, -14000, 14000);

      if (!rafId) rafId = requestAnimationFrame(tick);
    },
    { passive: false, capture: true }
  );

  // ---------------------------
  // Touch scroll over Spline (mobile)
  // ---------------------------
  let touchLastY = null;

  document.addEventListener(
    "touchstart",
    (e) => {
      if (!isOverSpline(e.target)) return;
      touchLastY = e.touches?.[0]?.clientY ?? null;
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      if (!isOverSpline(e.target)) return;

      const y = e.touches?.[0]?.clientY ?? null;
      if (y == null || touchLastY == null) return;

      const delta = touchLastY - y; // finger up => scroll down
      touchLastY = y;

      e.preventDefault();
      window.scrollBy({ top: delta * 1.6, left: 0, behavior: "auto" });
    },
    { passive: false, capture: true }
  );
})();

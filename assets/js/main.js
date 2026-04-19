window.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const footerYear = document.getElementById("footerYear");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  const updateNavState = () => {
    if (!nav) {
      return;
    }

    nav.classList.toggle("navbar-shrink", window.scrollY > 12);
  };

  const closeMobileNav = () => {
    if (!toggle || !navLinks) {
      return;
    }

    navLinks.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");
  };

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    document.addEventListener("click", (event) => {
      if (!toggle.contains(event.target) && !navLinks.contains(event.target)) {
        closeMobileNav();
      }
    });
  }

  updateNavState();
  document.addEventListener("scroll", updateNavState, { passive: true });

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".fade-up").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".fade-up").forEach((element) => element.classList.add("visible"));
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const footerYear = document.getElementById("footerYear");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lastFocusedElement = null;

  const syncNavHeight = () => {
    if (!nav) {
      return;
    }

    document.documentElement.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
  };

  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  const updateNavState = () => {
    if (!nav) {
      return;
    }

    nav.classList.toggle("navbar-shrink", window.scrollY > 12);
  };

  const closeMobileNav = ({ returnFocus = false } = {}) => {
    if (!toggle || !navLinks) {
      return;
    }

    navLinks.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menü öffnen");

    if (returnFocus && lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const openMobileNav = () => {
    if (!toggle || !navLinks) {
      return;
    }

    lastFocusedElement = document.activeElement;
    navLinks.classList.add("open");
    toggle.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menü schließen");

    const firstLink = navLinks.querySelector("a");
    if (firstLink) {
      firstLink.focus();
    }
  };

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("open");
      if (isOpen) {
        closeMobileNav({ returnFocus: true });
      } else {
        openMobileNav();
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileNav);
    });

    document.addEventListener("keydown", (event) => {
      if (!navLinks.classList.contains("open")) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileNav({ returnFocus: true });
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = [...navLinks.querySelectorAll("a, button, [tabindex]:not([tabindex='-1'])")];
      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!toggle.contains(event.target) && !navLinks.contains(event.target)) {
        closeMobileNav();
      }
    });
  }

  syncNavHeight();
  updateNavState();
  window.addEventListener("resize", syncNavHeight);
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

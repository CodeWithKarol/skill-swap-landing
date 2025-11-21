// SkillSwap Hub Landing Page Script

document.addEventListener("DOMContentLoaded", function () {
  // State management for menu and scroll
  let menuState = {
    isOpen: false,
    isAnimating: false,
    scrollPosition: 0,
  };
  const signupForm = document.querySelector(".signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      const learnSkill = this.querySelectorAll("select")[0].value;
      const teachSkill = this.querySelectorAll("select")[1].value;

      if (
        email &&
        learnSkill &&
        teachSkill &&
        learnSkill !== "Skills to Learn" &&
        teachSkill !== "Skills to Teach"
      ) {
        alert(
          `Thank you for signing up, ${email}! We'll match you with users interested in: ${learnSkill} and looking to learn: ${teachSkill}.`
        );
        this.reset();
      } else {
        alert("Please fill in all fields and select skills.");
      }
    });
  }

  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      // Only prevent default for anchor links
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        if (targetSection) {
          menuState.isAnimating = true;
          targetSection.scrollIntoView({
            behavior: "smooth",
          });
          // Close mobile menu after navigation
          const navUl = document.querySelector("nav ul");
          if (navUl) {
            navUl.classList.remove("active");
            const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
            if (mobileMenuBtn) {
              mobileMenuBtn.textContent = "☰";
            }
          }
          // Close modern mobile menu
          if (mobileNavOverlay && mobileMenuToggle) {
            mobileMenuToggle.classList.remove("active");
            mobileNavOverlay.classList.remove("active");
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            menuState.isOpen = false;
          }
          // Reset flag after smooth scroll completes
          setTimeout(() => {
            menuState.isAnimating = false;
          }, 800);
        }
      }
    });
  });

  // Logo click scrolls to top
  const logoSection = document.querySelector(".logo-section");
  if (logoSection) {
    logoSection.addEventListener("click", function (e) {
      e.preventDefault();
      menuState.isAnimating = true;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Close mobile menu if open
      if (menuState.isOpen) {
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove("active");
        }
        if (mobileNavOverlay) {
          mobileNavOverlay.classList.remove("active");
        }
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        menuState.isOpen = false;
      }
      // Reset flag after scroll completes
      setTimeout(() => {
        menuState.isAnimating = false;
      }, 800);
    });
  }

  // Modern Mobile menu toggle with responsive handling
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");

  // Function to close mobile menu
  const closeMobileMenu = () => {
    if (!menuState.isOpen || menuState.isAnimating) return;

    menuState.isAnimating = true;
    menuState.isOpen = false;

    if (mobileMenuToggle) {
      mobileMenuToggle.classList.remove("active");
    }
    if (mobileNavOverlay) {
      mobileNavOverlay.classList.remove("active");
    }

    // Restore scroll after animation completes
    setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, menuState.scrollPosition);
      menuState.isAnimating = false;
    }, 300);
  };

  // Function to open mobile menu
  const openMobileMenu = () => {
    if (menuState.isOpen || menuState.isAnimating) return;

    menuState.isAnimating = true;
    menuState.isOpen = true;
    menuState.scrollPosition = window.pageYOffset;

    if (mobileMenuToggle) {
      mobileMenuToggle.classList.add("active");
    }
    if (mobileNavOverlay) {
      mobileNavOverlay.classList.add("active");
    }

    // Disable scroll immediately
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    menuState.isAnimating = false;
  };

  if (mobileMenuToggle && mobileNavOverlay) {
    // Toggle mobile menu
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (mobileNavOverlay.classList.contains("active")) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu when clicking overlay
    mobileNavOverlay.addEventListener("click", function (e) {
      if (e.target === mobileNavOverlay) {
        closeMobileMenu();
      }
    });

    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#")) {
          menuState.isAnimating = true;
          if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove("active");
          }
          if (mobileNavOverlay) {
            mobileNavOverlay.classList.remove("active");
          }
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";
          menuState.isOpen = false;
          // Reset flag after smooth scroll animation completes
          setTimeout(() => {
            menuState.isAnimating = false;
          }, 800);
        } else {
          closeMobileMenu();
        }
      });
    });

    // Close mobile menu when clicking action buttons
    const mobileNavButtons = document.querySelectorAll(".btn-mobile-nav");
    mobileNavButtons.forEach((button) => {
      button.addEventListener("click", function () {
        closeMobileMenu();
      });
    });

    // Close on escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNavOverlay.classList.contains("active")) {
        closeMobileMenu();
      }
    });
  }

  // Close mobile menu on window resize to desktop
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth > 767) {
        closeMobileMenu();
      }
    }, 250);
  });

  // Handle orientation change
  window.addEventListener("orientationchange", function () {
    setTimeout(function () {
      if (window.innerWidth > 767) {
        closeMobileMenu();
      }
    }, 200);
  });

  // Add scroll effect to header
  const mainHeader = document.querySelector(".main-header");
  let lastScroll = 0;
  let ticking = false;

  const updateHeaderOnScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
    ticking = false;
  };

  window.addEventListener("scroll", function () {
    // Skip scroll updates while menu is animating
    if (menuState.isAnimating) {
      return;
    }
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderOnScroll);
      ticking = true;
    }
  });

  // Placeholder for chat integration - in a real app, integrate with a chat service
  console.log(
    "Chat integration placeholder: Implement real-time chat for mobile users."
  );

  // Placeholder for event RSVP - in a real app, handle RSVP logic
  const eventButtons = document.querySelectorAll(".event-calendar button");
  eventButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Event calendar integration: Redirect to full calendar view.");
    });
  });

  // Placeholder for profile management - in a real app, link to user profiles
  console.log(
    "Profile management placeholder: Easy profile management for mobile users."
  );

  // Viewport animations with enhanced effects
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Calculate staggered delay based on element position
            const staggerDelay = index * 80;
            setTimeout(() => {
              entry.target.classList.add("animate");
            }, staggerDelay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((element, index) => {
      // Set CSS variable for nth-child calculations
      element.style.setProperty("--index", index + 1);
      observer.observe(element);
    });
  };

  // Initialize animations
  animateOnScroll();
});

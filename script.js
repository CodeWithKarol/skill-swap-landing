// SkillSwap Hub Landing Page Script

document.addEventListener(
	"DOMContentLoaded",
	function () {
		// Flag to prevent scroll events during menu operations
		let isMenuClosing = false;

		// Sign-up form handling
		const signupForm = document.querySelector(
			".signup-form"
		);
		if (signupForm) {
			signupForm.addEventListener(
				"submit",
				function (e) {
					e.preventDefault();
					const email = this.querySelector(
						'input[type="email"]'
					).value;
					const learnSkill =
						this.querySelectorAll("select")[0]
							.value;
					const teachSkill =
						this.querySelectorAll("select")[1]
							.value;

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
						alert(
							"Please fill in all fields and select skills."
						);
					}
				}
			);
		}

		// Smooth scrolling for nav links
		const navLinks =
			document.querySelectorAll("nav a");
		navLinks.forEach((link) => {
			link.addEventListener(
				"click",
				function (e) {
					const href = this.getAttribute("href");
					// Only prevent default for anchor links
					if (href && href.startsWith("#")) {
						e.preventDefault();
						const targetSection =
							document.querySelector(href);
						if (targetSection) {
							// Set flag to prevent scroll events during smooth scroll
							isMenuClosing = true;
							targetSection.scrollIntoView({
								behavior: "smooth",
							});
							// Close mobile menu after navigation
							const navUl =
								document.querySelector("nav ul");
							if (navUl) {
								navUl.classList.remove("active");
								const mobileMenuBtn =
									document.querySelector(
										".mobile-menu-btn"
									);
								if (mobileMenuBtn) {
									mobileMenuBtn.textContent = "☰";
								}
							}
							// Close modern mobile menu
							const mobileNavOverlay =
								document.querySelector(
									".mobile-nav-overlay"
								);
							const mobileMenuToggle =
								document.querySelector(
									".mobile-menu-toggle"
								);
							if (
								mobileNavOverlay &&
								mobileMenuToggle
							) {
								mobileMenuToggle.classList.remove(
									"active"
								);
								mobileNavOverlay.classList.remove(
									"active"
								);
								document.body.style.overflow = "";
								document.documentElement.style.overflow =
									"";
							}
							// Reset flag after smooth scroll completes
							setTimeout(() => {
								isMenuClosing = false;
							}, 800);
						}
					}
				}
			);
		});

		// Modern Mobile menu toggle with responsive handling
		const mobileMenuToggle =
			document.querySelector(
				".mobile-menu-toggle"
			);
		const mobileNavOverlay =
			document.querySelector(
				".mobile-nav-overlay"
			);

		// Function to close mobile menu
		const closeMobileMenu = () => {
			isMenuClosing = true;
			if (mobileMenuToggle) {
				mobileMenuToggle.classList.remove(
					"active"
				);
			}
			if (mobileNavOverlay) {
				mobileNavOverlay.classList.remove(
					"active"
				);
			}
			document.body.style.overflow = "";
			document.documentElement.style.overflow =
				"";
			// Reset flag after brief delay
			setTimeout(() => {
				isMenuClosing = false;
			}, 150);
		};

		// Function to open mobile menu
		const openMobileMenu = () => {
			if (mobileMenuToggle) {
				mobileMenuToggle.classList.add("active");
			}
			if (mobileNavOverlay) {
				mobileNavOverlay.classList.add("active");
			}
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow =
				"hidden";
		};

		if (mobileMenuToggle && mobileNavOverlay) {
			// Toggle mobile menu
			mobileMenuToggle.addEventListener(
				"click",
				function (e) {
					e.stopPropagation();
					if (
						mobileNavOverlay.classList.contains(
							"active"
						)
					) {
						closeMobileMenu();
					} else {
						openMobileMenu();
					}
				}
			);

			// Close mobile menu when clicking overlay
			mobileNavOverlay.addEventListener(
				"click",
				function (e) {
					if (e.target === mobileNavOverlay) {
						closeMobileMenu();
					}
				}
			);

			// Close mobile menu when clicking nav links
			const mobileNavLinks =
				document.querySelectorAll(
					".mobile-nav-link"
				);
			mobileNavLinks.forEach((link) => {
				link.addEventListener(
					"click",
					function (e) {
						// Allow default behavior for smooth scroll handling
						const href =
							this.getAttribute("href");
						if (href && href.startsWith("#")) {
							// Prevent scroll event from firing during smooth scroll
							isMenuClosing = true;
							// Don't call closeMobileMenu with its own timeout - reset flag after smooth scroll completes
							if (mobileMenuToggle) {
								mobileMenuToggle.classList.remove(
									"active"
								);
							}
							if (mobileNavOverlay) {
								mobileNavOverlay.classList.remove(
									"active"
								);
							}
							document.body.style.overflow = "";
							document.documentElement.style.overflow =
								"";
							// Reset flag after smooth scroll animation completes
							setTimeout(() => {
								isMenuClosing = false;
							}, 800);
						} else {
							closeMobileMenu();
						}
					}
				);
			});

			// Close mobile menu when clicking action buttons
			const mobileNavButtons =
				document.querySelectorAll(
					".btn-mobile-nav"
				);
			mobileNavButtons.forEach((button) => {
				button.addEventListener(
					"click",
					function () {
						closeMobileMenu();
					}
				);
			});

			// Close on escape key
			document.addEventListener(
				"keydown",
				function (e) {
					if (
						e.key === "Escape" &&
						mobileNavOverlay.classList.contains(
							"active"
						)
					) {
						closeMobileMenu();
					}
				}
			);
		}

		// Close mobile menu on window resize to desktop
		let resizeTimer;
		window.addEventListener(
			"resize",
			function () {
				clearTimeout(resizeTimer);
				resizeTimer = setTimeout(function () {
					if (window.innerWidth > 767) {
						closeMobileMenu();
					}
				}, 250);
			}
		);

		// Handle orientation change
		window.addEventListener(
			"orientationchange",
			function () {
				setTimeout(function () {
					if (window.innerWidth > 767) {
						closeMobileMenu();
					}
				}, 200);
			}
		);

		// Add scroll effect to header
		const mainHeader = document.querySelector(
			".main-header"
		);
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

		window.addEventListener(
			"scroll",
			function () {
				// Skip scroll handler if menu is currently closing
				if (isMenuClosing) {
					return;
				}
				if (!ticking) {
					window.requestAnimationFrame(
						updateHeaderOnScroll
					);
					ticking = true;
				}
			}
		);

		// Prevent body scroll when mobile menu is open (iOS fix)
		let scrollPosition = 0;
		const preventBodyScroll = (enable) => {
			if (enable) {
				scrollPosition = window.pageYOffset;
				document.body.style.position = "fixed";
				document.body.style.top = `-${scrollPosition}px`;
				document.body.style.width = "100%";
			} else {
				document.body.style.position = "";
				document.body.style.top = "";
				document.body.style.width = "";
				window.scrollTo(0, scrollPosition);
			}
		};

		// Update mobile menu functions to use preventBodyScroll
		if (mobileNavOverlay) {
			const observer = new MutationObserver(
				(mutations) => {
					mutations.forEach((mutation) => {
						if (
							mutation.attributeName === "class"
						) {
							const isActive =
								mobileNavOverlay.classList.contains(
									"active"
								);
							if (window.innerWidth <= 767) {
								preventBodyScroll(isActive);
							}
						}
					});
				}
			);

			observer.observe(mobileNavOverlay, {
				attributes: true,
			});
		}

		// Placeholder for chat integration - in a real app, integrate with a chat service
		console.log(
			"Chat integration placeholder: Implement real-time chat for mobile users."
		);

		// Placeholder for event RSVP - in a real app, handle RSVP logic
		const eventButtons =
			document.querySelectorAll(
				".event-calendar button"
			);
		eventButtons.forEach((button) => {
			button.addEventListener(
				"click",
				function () {
					alert(
						"Event calendar integration: Redirect to full calendar view."
					);
				}
			);
		});

		// Placeholder for profile management - in a real app, link to user profiles
		console.log(
			"Profile management placeholder: Easy profile management for mobile users."
		);

		// Viewport animations with enhanced effects
		const animateOnScroll = () => {
			const elements = document.querySelectorAll(
				".animate-on-scroll"
			);

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry, index) => {
						if (entry.isIntersecting) {
							// Calculate staggered delay based on element position
							const staggerDelay = index * 80;
							setTimeout(() => {
								entry.target.classList.add(
									"animate"
								);
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
				element.style.setProperty(
					"--index",
					index + 1
				);
				observer.observe(element);
			});
		};

		// Initialize animations
		animateOnScroll();
	}
);

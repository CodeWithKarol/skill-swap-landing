// SkillSwap Hub Landing Page Script

document.addEventListener(
	"DOMContentLoaded",
	function () {
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
					e.preventDefault();
					const targetId =
						this.getAttribute("href");
					const targetSection =
						document.querySelector(targetId);
					if (targetSection) {
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
					}
				}
			);
		});

		// Mobile menu toggle
		const mobileMenuBtn = document.querySelector(
			".mobile-menu-btn"
		);
		const navUl =
			document.querySelector("nav ul");
		if (mobileMenuBtn && navUl) {
			mobileMenuBtn.addEventListener(
				"click",
				function () {
					navUl.classList.toggle("active");
					this.textContent =
						navUl.classList.contains("active")
							? "✕"
							: "☰";
				}
			);
		}

		// Close mobile menu on window resize to desktop
		window.addEventListener(
			"resize",
			function () {
				if (window.innerWidth > 767) {
					const navUl =
						document.querySelector("nav ul");
					if (navUl) {
						navUl.classList.remove("active");
					}
					const mobileMenuBtn =
						document.querySelector(
							".mobile-menu-btn"
						);
					if (mobileMenuBtn) {
						mobileMenuBtn.textContent = "☰";
					}
				}
			}
		);

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

		// Viewport animations
		const animateOnScroll = () => {
			const elements = document.querySelectorAll(
				".animate-on-scroll"
			);

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry, index) => {
						if (entry.isIntersecting) {
							// Add staggered delay based on element position
							setTimeout(() => {
								entry.target.classList.add(
									"animate"
								);
							}, index * 100);
						}
					});
				},
				{
					threshold: 0.1,
					rootMargin: "0px 0px -50px 0px",
				}
			);

			elements.forEach((element) => {
				observer.observe(element);
			});
		};

		// Initialize animations
		animateOnScroll();
	}
);

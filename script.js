// // // // DOM Content Loaded Event
// // // document.addEventListener("DOMContentLoaded", () => {
// // //   // Initialize all functionality
// // //   initThemeToggle()
// // //   initNavigation()
// // //   initBusinessCard3D()
// // //   initWhatsAppIntegration()
// // //   initPortfolioLightbox()
// // //   initContactForm()
// // //   initScrollReveal()
// // //   initSmoothScrolling()
// // //   initCopyPhone()
// // // })

// // // // Theme Toggle Functionality
// // // function initThemeToggle() {
// // //   const themeToggle = document.getElementById("theme-toggle")
// // //   const themeIcon = themeToggle.querySelector(".theme-icon")

// // //   // Check for saved theme preference or default to 'light'
// // //   const currentTheme = localStorage.getItem("theme") || "light"
// // //   document.documentElement.setAttribute("data-theme", currentTheme)
// // //   updateThemeIcon(currentTheme)

// // //   themeToggle.addEventListener("click", () => {
// // //     const currentTheme = document.documentElement.getAttribute("data-theme")
// // //     const newTheme = currentTheme === "dark" ? "light" : "dark"

// // //     document.documentElement.setAttribute("data-theme", newTheme)
// // //     localStorage.setItem("theme", newTheme)
// // //     updateThemeIcon(newTheme)
// // //   })

// // //   function updateThemeIcon(theme) {
// // //     themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"
// // //   }
// // // }

// // // // Navigation Functionality
// // // function initNavigation() {
// // //   const navToggle = document.getElementById("nav-toggle")
// // //   const navMenu = document.getElementById("nav-menu")
// // //   const navLinks = document.querySelectorAll(".nav-link")

// // //   // Mobile menu toggle
// // //   navToggle.addEventListener("click", () => {
// // //     navMenu.classList.toggle("active")

// // //     // Animate hamburger menu
// // //     const spans = navToggle.querySelectorAll("span")
// // //     spans.forEach((span, index) => {
// // //       if (navMenu.classList.contains("active")) {
// // //         if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)"
// // //         if (index === 1) span.style.opacity = "0"
// // //         if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)"
// // //       } else {
// // //         span.style.transform = "none"
// // //         span.style.opacity = "1"
// // //       }
// // //     })
// // //   })

// // //   // Close mobile menu when clicking on links
// // //   navLinks.forEach((link) => {
// // //     link.addEventListener("click", () => {
// // //       navMenu.classList.remove("active")
// // //       const spans = navToggle.querySelectorAll("span")
// // //       spans.forEach((span) => {
// // //         span.style.transform = "none"
// // //         span.style.opacity = "1"
// // //       })
// // //     })
// // //   })

// // //   // Navbar scroll effect
// // //   window.addEventListener("scroll", () => {
// // //     const navbar = document.getElementById("navbar")
// // //     if (window.scrollY > 50) {
// // //       navbar.style.background = "rgba(255, 255, 255, 0.1)"
// // //       navbar.style.backdropFilter = "blur(30px)"
// // //     } else {
// // //       navbar.style.background = "rgba(255, 255, 255, 0.06)"
// // //       navbar.style.backdropFilter = "blur(20px)"
// // //     }
// // //   })
// // // }

// // // // Business Card 3D Effect
// // // function initBusinessCard3D() {
// // //   const businessCard = document.getElementById("business-card")

// // //   if (!businessCard) return

// // //   businessCard.addEventListener("mousemove", (e) => {
// // //     // Check if user prefers reduced motion
// // //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// // //       return
// // //     }

// // //     const rect = businessCard.getBoundingClientRect()
// // //     const x = e.clientX - rect.left
// // //     const y = e.clientY - rect.top

// // //     const centerX = rect.width / 2
// // //     const centerY = rect.height / 2

// // //     const rotateX = (y - centerY) / 10
// // //     const rotateY = (centerX - x) / 10

// // //     businessCard.style.transform = `
// // //             perspective(1000px) 
// // //             rotateX(${rotateX}deg) 
// // //             rotateY(${rotateY}deg) 
// // //             translateZ(20px)
// // //         `
// // //   })

// // //   businessCard.addEventListener("mouseleave", () => {
// // //     businessCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
// // //   })
// // // }

// // // // WhatsApp Integration
// // // function initWhatsAppIntegration() {
// // //   const whatsappNumber = "923174433711" // Pakistan format without leading zero
// // //   const whatsappMessage = `Assalam o Alaikum 🤝

// // // Welcome to PRINT HUB

// // // It's Advertising Agency.
// // // We provide our services all over Pakistan with the Facility of Home Delivery.

// // // Our Expertise Are:
// // // ✓ Professional Visiting Cards
// // // ✓ Logo & 3D Mockup
// // // ✓ Letter Head
// // // ✓ Bill Books
// // // ✓ Stickers
// // // ✓ PVC Cards
// // // ✓ Envelops

// // // & Much More.
// // // (Note: Except cards, we also design other items)`

// // //   const encodedMessage = encodeURIComponent(whatsappMessage)
// // //   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

// // //   // WhatsApp buttons
// // //   const whatsappButtons = [
// // //     document.getElementById("whatsapp-hero"),
// // //     document.getElementById("whatsapp-float"),
// // //     document.getElementById("footer-whatsapp"),
// // //   ]

// // //   whatsappButtons.forEach((button) => {
// // //     if (button) {
// // //       button.addEventListener("click", (e) => {
// // //         e.preventDefault()
// // //         window.open(whatsappURL, "_blank")
// // //       })
// // //     }
// // //   })
// // // }

// // // // Portfolio Lightbox
// // // function initPortfolioLightbox() {
// // //   const portfolioItems = document.querySelectorAll(".portfolio-item")
// // //   const lightbox = document.getElementById("lightbox")
// // //   const lightboxImage = document.getElementById("lightbox-image")
// // //   const lightboxCaption = document.getElementById("lightbox-caption")
// // //   const lightboxClose = document.getElementById("lightbox-close")

// // //   portfolioItems.forEach((item) => {
// // //     item.addEventListener("click", () => {
// // //       const img = item.querySelector("img")
// // //       const caption = item.getAttribute("data-caption")

// // //       lightboxImage.src = img.src
// // //       lightboxImage.alt = img.alt
// // //       lightboxCaption.textContent = caption
// // //       lightbox.style.display = "block"

// // //       // Prevent body scroll
// // //       document.body.style.overflow = "hidden"
// // //     })
// // //   })

// // //   // Close lightbox
// // //   function closeLightbox() {
// // //     lightbox.style.display = "none"
// // //     document.body.style.overflow = "auto"
// // //   }

// // //   lightboxClose.addEventListener("click", closeLightbox)

// // //   lightbox.addEventListener("click", (e) => {
// // //     if (e.target === lightbox) {
// // //       closeLightbox()
// // //     }
// // //   })

// // //   // Close with Escape key
// // //   document.addEventListener("keydown", (e) => {
// // //     if (e.key === "Escape" && lightbox.style.display === "block") {
// // //       closeLightbox()
// // //     }
// // //   })
// // // }

// // // // Contact Form
// // // function initContactForm() {
// // //   const contactForm = document.getElementById("contact-form")

// // //   contactForm.addEventListener("submit", (e) => {
// // //     e.preventDefault()

// // //     // Get form data
// // //     const formData = new FormData(contactForm)
// // //     const name = formData.get("name")
// // //     const email = formData.get("email")
// // //     const service = formData.get("service")
// // //     const message = formData.get("message")

// // //     // Basic validation
// // //     if (!name || !email || !service || !message) {
// // //       alert("Please fill in all fields.")
// // //       return
// // //     }

// // //     // Email validation
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// // //     if (!emailRegex.test(email)) {
// // //       alert("Please enter a valid email address.")
// // //       return
// // //     }

// // //     // Create mailto link as fallback
// // //     const subject = `PRINT HUB Inquiry - ${service}`
// // //     const body = `Name: ${name}
// // // Email: ${email}
// // // Service: ${service}

// // // Message:
// // // ${message}`

// // //     const mailtoLink = `mailto:info@printhub.pk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

// // //     // Show success message
// // //     alert("Thank you for your inquiry! Your default email client will open to send the message.")

// // //     // Open email client
// // //     window.location.href = mailtoLink

// // //     // Reset form
// // //     contactForm.reset()
// // //   })
// // // }

// // // // Scroll Reveal Animation
// // // function initScrollReveal() {
// // //   const revealElements = document.querySelectorAll(".section-padding, .service-card, .portfolio-item, .pricing-card")

// // //   // Check if user prefers reduced motion
// // //   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// // //     revealElements.forEach((el) => el.classList.add("active"))
// // //     return
// // //   }

// // //   const observer = new IntersectionObserver(
// // //     (entries) => {
// // //       entries.forEach((entry) => {
// // //         if (entry.isIntersecting) {
// // //           entry.target.classList.add("reveal", "active")
// // //         }
// // //       })
// // //     },
// // //     {
// // //       threshold: 0.1,
// // //       rootMargin: "0px 0px -50px 0px",
// // //     },
// // //   )

// // //   revealElements.forEach((el) => {
// // //     el.classList.add("reveal")
// // //     observer.observe(el)
// // //   })
// // // }

// // // // Smooth Scrolling
// // // function initSmoothScrolling() {
// // //   const navLinks = document.querySelectorAll('a[href^="#"]')

// // //   navLinks.forEach((link) => {
// // //     link.addEventListener("click", function (e) {
// // //       e.preventDefault()

// // //       const targetId = this.getAttribute("href")
// // //       const targetSection = document.querySelector(targetId)

// // //       if (targetSection) {
// // //         const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

// // //         window.scrollTo({
// // //           top: offsetTop,
// // //           behavior: "smooth",
// // //         })
// // //       }
// // //     })
// // //   })
// // // }

// // // // Copy Phone Number
// // // function initCopyPhone() {
// // //   const copyPhoneBtn = document.getElementById("copy-phone")

// // //   if (copyPhoneBtn) {
// // //     copyPhoneBtn.addEventListener("click", () => {
// // //       const phoneNumber = "0317-4433711"

// // //       // Try to use the Clipboard API
// // //       if (navigator.clipboard && window.isSecureContext) {
// // //         navigator.clipboard
// // //           .writeText(phoneNumber)
// // //           .then(() => {
// // //             showCopySuccess()
// // //           })
// // //           .catch(() => {
// // //             fallbackCopyTextToClipboard(phoneNumber)
// // //           })
// // //       } else {
// // //         fallbackCopyTextToClipboard(phoneNumber)
// // //       }
// // //     })
// // //   }

// // //   function fallbackCopyTextToClipboard(text) {
// // //     const textArea = document.createElement("textarea")
// // //     textArea.value = text
// // //     textArea.style.position = "fixed"
// // //     textArea.style.left = "-999999px"
// // //     textArea.style.top = "-999999px"
// // //     document.body.appendChild(textArea)
// // //     textArea.focus()
// // //     textArea.select()

// // //     try {
// // //       document.execCommand("copy")
// // //       showCopySuccess()
// // //     } catch (err) {
// // //       console.error("Fallback: Oops, unable to copy", err)
// // //       alert("Unable to copy phone number. Please copy manually: 0317-4433711")
// // //     }

// // //     document.body.removeChild(textArea)
// // //   }

// // //   function showCopySuccess() {
// // //     const originalText = copyPhoneBtn.textContent
// // //     copyPhoneBtn.textContent = "Copied!"
// // //     copyPhoneBtn.style.background = "#22c55e"

// // //     setTimeout(() => {
// // //       copyPhoneBtn.textContent = originalText
// // //       copyPhoneBtn.style.background = ""
// // //     }, 2000)
// // //   }
// // // }

// // // // Utility Functions
// // // function debounce(func, wait) {
// // //   let timeout
// // //   return function executedFunction(...args) {
// // //     const later = () => {
// // //       clearTimeout(timeout)
// // //       func(...args)
// // //     }
// // //     clearTimeout(timeout)
// // //     timeout = setTimeout(later, wait)
// // //   }
// // // }

// // // // Performance optimization for scroll events
// // // const debouncedScrollHandler = debounce(() => {
// // //   // Any scroll-based functionality can be added here
// // // }, 10)

// // // window.addEventListener("scroll", debouncedScrollHandler)

// // // // Error handling for images
// // // document.addEventListener("DOMContentLoaded", () => {
// // //   const images = document.querySelectorAll("img")

// // //   images.forEach((img) => {
// // //     img.addEventListener("error", function () {
// // //       // Create a placeholder if image fails to load
// // //       this.src =
// // //         "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4="
// // //       this.alt = "Image not found"
// // //     })
// // //   })
// // // })

// // // // Console log for debugging
// // // console.log("[v0] PRINT HUB website initialized successfully")



// // // DOM Content Loaded Event
// // document.addEventListener("DOMContentLoaded", () => {
// //   // Initialize all functionality
// //   initThemeToggle()
// //   initNavigation()
// //   initBusinessCard3D()
// //   initWhatsAppIntegration()
// //   initPortfolioLightbox()
// //   initContactForm()
// //   initScrollReveal()
// //   initSmoothScrolling()
// //   initCopyPhone()
// // })

// // // Theme Toggle Functionality
// // function initThemeToggle() {
// //   const themeToggle = document.getElementById("theme-toggle")
// //   const themeIcon = themeToggle.querySelector(".theme-icon")

// //   // Check for saved theme preference or default to 'light'
// //   const currentTheme = localStorage.getItem("theme") || "light"
// //   document.documentElement.setAttribute("data-theme", currentTheme)
// //   updateThemeIcon(currentTheme)

// //   themeToggle.addEventListener("click", () => {
// //     const currentTheme = document.documentElement.getAttribute("data-theme")
// //     const newTheme = currentTheme === "dark" ? "light" : "dark"

// //     document.documentElement.setAttribute("data-theme", newTheme)
// //     localStorage.setItem("theme", newTheme)
// //     updateThemeIcon(newTheme)
// //   })

// //   function updateThemeIcon(theme) {
// //     themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"
// //   }
// // }

// // // Navigation Functionality
// // function initNavigation() {
// //   const navToggle = document.getElementById("nav-toggle")
// //   const navMenu = document.getElementById("nav-menu")
// //   const navLinks = document.querySelectorAll(".nav-link")

// //   // Mobile menu toggle
// //   navToggle.addEventListener("click", () => {
// //     navMenu.classList.toggle("active")

// //     // Animate hamburger menu
// //     const spans = navToggle.querySelectorAll("span")
// //     spans.forEach((span, index) => {
// //       if (navMenu.classList.contains("active")) {
// //         if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)"
// //         if (index === 1) span.style.opacity = "0"
// //         if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)"
// //       } else {
// //         span.style.transform = "none"
// //         span.style.opacity = "1"
// //       }
// //     })
// //   })

// //   // Close mobile menu when clicking on links
// //   navLinks.forEach((link) => {
// //     link.addEventListener("click", () => {
// //       navMenu.classList.remove("active")
// //       const spans = navToggle.querySelectorAll("span")
// //       spans.forEach((span) => {
// //         span.style.transform = "none"
// //         span.style.opacity = "1"
// //       })
// //     })
// //   })

// //   // Navbar scroll effect
// //   window.addEventListener("scroll", () => {
// //     const navbar = document.getElementById("navbar")
// //     if (window.scrollY > 50) {
// //       navbar.style.background = "rgba(255, 255, 255, 0.1)"
// //       navbar.style.backdropFilter = "blur(30px)"
// //     } else {
// //       navbar.style.background = "rgba(255, 255, 255, 0.06)"
// //       navbar.style.backdropFilter = "blur(20px)"
// //     }
// //   })
// // }

// // // Business Card 3D Effect
// // function initBusinessCard3D() {
// //   const businessCard = document.getElementById("business-card")

// //   if (!businessCard) return

// //   businessCard.addEventListener("mousemove", (e) => {
// //     // Check if user prefers reduced motion
// //     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// //       return
// //     }

// //     const rect = businessCard.getBoundingClientRect()
// //     const x = e.clientX - rect.left
// //     const y = e.clientY - rect.top

// //     const centerX = rect.width / 2
// //     const centerY = rect.height / 2

// //     const rotateX = (y - centerY) / 10
// //     const rotateY = (centerX - x) / 10

// //     businessCard.style.transform = `
// //             perspective(1000px) 
// //             rotateX(${rotateX}deg) 
// //             rotateY(${rotateY}deg) 
// //             translateZ(20px)
// //         `
// //   })

// //   businessCard.addEventListener("mouseleave", () => {
// //     businessCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
// //   })
// // }

// // // WhatsApp Integration
// // function initWhatsAppIntegration() {
// //   const whatsappNumber = "923318796718" // Pakistan format without leading zero (03318796718)
// //   const whatsappMessage = `Assalam o Alaikum 🤝

// // Welcome to PRINT HUB

// // It's Advertising Agency.
// // We provide our services all over Pakistan with the Facility of Home Delivery.

// // Our Expertise Are:
// // ✓ Professional Visiting Cards
// // ✓ Logo & 3D Mockup
// // ✓ Letter Head
// // ✓ Bill Books
// // ✓ Stickers
// // ✓ PVC Cards
// // ✓ Envelops

// // & Much More.
// // (Note: Except cards, we also design other items)`

// //   const encodedMessage = encodeURIComponent(whatsappMessage)
// //   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

// //   // WhatsApp buttons
// //   const whatsappButtons = [
// //     document.getElementById("whatsapp-hero"),
// //     document.getElementById("whatsapp-float"),
// //     document.getElementById("footer-whatsapp"),
// //   ]

// //   whatsappButtons.forEach((button) => {
// //     if (button) {
// //       button.addEventListener("click", (e) => {
// //         e.preventDefault()
// //         window.open(whatsappURL, "_blank")
// //       })
// //     }
// //   })
// // }

// // // Portfolio Lightbox
// // function initPortfolioLightbox() {
// //   const portfolioItems = document.querySelectorAll(".portfolio-item")
// //   const lightbox = document.getElementById("lightbox")
// //   const lightboxImage = document.getElementById("lightbox-image")
// //   const lightboxCaption = document.getElementById("lightbox-caption")
// //   const lightboxClose = document.getElementById("lightbox-close")

// //   portfolioItems.forEach((item) => {
// //     item.addEventListener("click", () => {
// //       const img = item.querySelector("img")
// //       const caption = item.getAttribute("data-caption")

// //       lightboxImage.src = img.src
// //       lightboxImage.alt = img.alt
// //       lightboxCaption.textContent = caption
// //       lightbox.style.display = "block"

// //       // Prevent body scroll
// //       document.body.style.overflow = "hidden"
// //     })
// //   })

// //   // Close lightbox
// //   function closeLightbox() {
// //     lightbox.style.display = "none"
// //     document.body.style.overflow = "auto"
// //   }

// //   lightboxClose.addEventListener("click", closeLightbox)

// //   lightbox.addEventListener("click", (e) => {
// //     if (e.target === lightbox) {
// //       closeLightbox()
// //     }
// //   })

// //   // Close with Escape key
// //   document.addEventListener("keydown", (e) => {
// //     if (e.key === "Escape" && lightbox.style.display === "block") {
// //       closeLightbox()
// //     }
// //   })
// // }

// // // Contact Form
// // function initContactForm() {
// //   const contactForm = document.getElementById("contact-form")

// //   contactForm.addEventListener("submit", (e) => {
// //     e.preventDefault()

// //     // Get form data
// //     const formData = new FormData(contactForm)
// //     const name = formData.get("name")
// //     const email = formData.get("email")
// //     const service = formData.get("service")
// //     const message = formData.get("message")

// //     // Basic validation
// //     if (!name || !email || !service || !message) {
// //       alert("Please fill in all fields.")
// //       return
// //     }

// //     // Email validation
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// //     if (!emailRegex.test(email)) {
// //       alert("Please enter a valid email address.")
// //       return
// //     }

// //     // Create mailto link as fallback
// //     const subject = `PRINT HUB Inquiry - ${service}`
// //     const body = `Name: ${name}
// // Email: ${email}
// // Service: ${service}

// // Message:
// // ${message}`

// //     const mailtoLink = `mailto:printhub319@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

// //     // Show success message
// //     alert("Thank you for your inquiry! Your default email client will open to send the message.")

// //     // Open email client
// //     window.location.href = mailtoLink

// //     // Reset form
// //     contactForm.reset()
// //   })
// // }

// // // Scroll Reveal Animation
// // function initScrollReveal() {
// //   const revealElements = document.querySelectorAll(".section-padding, .service-card, .portfolio-item, .pricing-card")

// //   // Check if user prefers reduced motion
// //   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// //     revealElements.forEach((el) => el.classList.add("active"))
// //     return
// //   }

// //   const observer = new IntersectionObserver(
// //     (entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("reveal", "active")
// //         }
// //       })
// //     },
// //     {
// //       threshold: 0.1,
// //       rootMargin: "0px 0px -50px 0px",
// //     },
// //   )

// //   revealElements.forEach((el) => {
// //     el.classList.add("reveal")
// //     observer.observe(el)
// //   })
// // }

// // // Smooth Scrolling
// // function initSmoothScrolling() {
// //   const navLinks = document.querySelectorAll('a[href^="#"]')

// //   navLinks.forEach((link) => {
// //     link.addEventListener("click", function (e) {
// //       e.preventDefault()

// //       const targetId = this.getAttribute("href")
// //       const targetSection = document.querySelector(targetId)

// //       if (targetSection) {
// //         const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

// //         window.scrollTo({
// //           top: offsetTop,
// //           behavior: "smooth",
// //         })
// //       }
// //     })
// //   })
// // }

// // // Copy Phone Number
// // function initCopyPhone() {
// //   const copyPhoneBtn = document.getElementById("copy-phone")

// //   if (copyPhoneBtn) {
// //     copyPhoneBtn.addEventListener("click", () => {
// //       const phoneNumber = "0317-4433711"

// //       // Try to use the Clipboard API
// //       if (navigator.clipboard && window.isSecureContext) {
// //         navigator.clipboard
// //           .writeText(phoneNumber)
// //           .then(() => {
// //             showCopySuccess()
// //           })
// //           .catch(() => {
// //             fallbackCopyTextToClipboard(phoneNumber)
// //           })
// //       } else {
// //         fallbackCopyTextToClipboard(phoneNumber)
// //       }
// //     })
// //   }

// //   function fallbackCopyTextToClipboard(text) {
// //     const textArea = document.createElement("textarea")
// //     textArea.value = text
// //     textArea.style.position = "fixed"
// //     textArea.style.left = "-999999px"
// //     textArea.style.top = "-999999px"
// //     document.body.appendChild(textArea)
// //     textArea.focus()
// //     textArea.select()

// //     try {
// //       document.execCommand("copy")
// //       showCopySuccess()
// //     } catch (err) {
// //       console.error("Fallback: Oops, unable to copy", err)
// //       alert("Unable to copy phone number. Please copy manually: 0317-4433711")
// //     }

// //     document.body.removeChild(textArea)
// //   }

// //   function showCopySuccess() {
// //     const originalText = copyPhoneBtn.textContent
// //     copyPhoneBtn.textContent = "Copied!"
// //     copyPhoneBtn.style.background = "#22c55e"

// //     setTimeout(() => {
// //       copyPhoneBtn.textContent = originalText
// //       copyPhoneBtn.style.background = ""
// //     }, 2000)
// //   }
// // }

// // // Utility Functions
// // function debounce(func, wait) {
// //   let timeout
// //   return function executedFunction(...args) {
// //     const later = () => {
// //       clearTimeout(timeout)
// //       func(...args)
// //     }
// //     clearTimeout(timeout)
// //     timeout = setTimeout(later, wait)
// //   }
// // }

// // // Performance optimization for scroll events
// // const debouncedScrollHandler = debounce(() => {
// //   // Any scroll-based functionality can be added here
// // }, 10)

// // window.addEventListener("scroll", debouncedScrollHandler)

// // // Error handling for images
// // document.addEventListener("DOMContentLoaded", () => {
// //   const images = document.querySelectorAll("img")

// //   images.forEach((img) => {
// //     img.addEventListener("error", function () {
// //       // Create a placeholder if image fails to load
// //       this.src =
// //         "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4="
// //       this.alt = "Image not found"
// //     })
// //   })
// // })

// // // Console log for debugging
// // console.log("[v0] PRINT HUB website initialized successfully")


// // DOM Content Loaded Event
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize all functionality
//   initThemeToggle()
//   initNavigation()
//   initBusinessCard3D()
//   initWhatsAppIntegration()
//   initPortfolioLightbox()
//   initContactForm()
//   initScrollReveal()
//   initSmoothScrolling()
//   initCopyPhone()

//   const emailjs = window.emailjs
//   emailjs.init("8dOswuJe48i7Dp2nt")
// })

// // Theme Toggle Functionality
// function initThemeToggle() {
//   const themeToggle = document.getElementById("theme-toggle")
//   const themeIcon = themeToggle.querySelector(".theme-icon")

//   // Check for saved theme preference or default to 'light'
//   const currentTheme = localStorage.getItem("theme") || "light"
//   document.documentElement.setAttribute("data-theme", currentTheme)
//   updateThemeIcon(currentTheme)

//   themeToggle.addEventListener("click", () => {
//     const currentTheme = document.documentElement.getAttribute("data-theme")
//     const newTheme = currentTheme === "dark" ? "light" : "dark"

//     document.documentElement.setAttribute("data-theme", newTheme)
//     localStorage.setItem("theme", newTheme)
//     updateThemeIcon(newTheme)
//   })

//   function updateThemeIcon(theme) {
//     themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"
//   }
// }

// // Navigation Functionality
// function initNavigation() {
//   const navToggle = document.getElementById("nav-toggle")
//   const navMenu = document.getElementById("nav-menu")
//   const navLinks = document.querySelectorAll(".nav-link")

//   // Mobile menu toggle
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("active")

//     // Animate hamburger menu
//     const spans = navToggle.querySelectorAll("span")
//     spans.forEach((span, index) => {
//       if (navMenu.classList.contains("active")) {
//         if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)"
//         if (index === 1) span.style.opacity = "0"
//         if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)"
//       } else {
//         span.style.transform = "none"
//         span.style.opacity = "1"
//       }
//     })
//   })

//   // Close mobile menu when clicking on links
//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       navMenu.classList.remove("active")
//       const spans = navToggle.querySelectorAll("span")
//       spans.forEach((span) => {
//         span.style.transform = "none"
//         span.style.opacity = "1"
//       })
//     })
//   })

//   // Navbar scroll effect
//   window.addEventListener("scroll", () => {
//     const navbar = document.getElementById("navbar")
//     if (window.scrollY > 50) {
//       navbar.style.background = "rgba(255, 255, 255, 0.1)"
//       navbar.style.backdropFilter = "blur(30px)"
//     } else {
//       navbar.style.background = "rgba(255, 255, 255, 0.06)"
//       navbar.style.backdropFilter = "blur(20px)"
//     }
//   })
// }

// // Business Card 3D Effect
// function initBusinessCard3D() {
//   const businessCard = document.getElementById("business-card")

//   if (!businessCard) return

//   businessCard.addEventListener("mousemove", (e) => {
//     // Check if user prefers reduced motion
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       return
//     }

//     const rect = businessCard.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const centerX = rect.width / 2
//     const centerY = rect.height / 2

//     const rotateX = (y - centerY) / 10
//     const rotateY = (centerX - x) / 10

//     businessCard.style.transform = `
//             perspective(1000px) 
//             rotateX(${rotateX}deg) 
//             rotateY(${rotateY}deg) 
//             translateZ(20px)
//         `
//   })

//   businessCard.addEventListener("mouseleave", () => {
//     businessCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
//   })
// }

// // WhatsApp Integration
// function initWhatsAppIntegration() {
//   const whatsappNumber = "923318796718" // Pakistan format without leading zero (03318796718)
//   const whatsappMessage = `Assalam o Alaikum 🤝

// Welcome to PRINT HUB

// It's Advertising Agency.
// We provide our services all over Pakistan with the Facility of Home Delivery.

// Our Expertise Are:
// ✓ Professional Visiting Cards
// ✓ Logo & 3D Mockup
// ✓ Letter Head
// ✓ Bill Books
// ✓ Stickers
// ✓ PVC Cards
// ✓ Envelops

// & Much More.
// (Note: Except cards, we also design other items)`

//   const encodedMessage = encodeURIComponent(whatsappMessage)
//   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

//   // WhatsApp buttons
//   const whatsappButtons = [
//     document.getElementById("whatsapp-hero"),
//     document.getElementById("whatsapp-float"),
//     document.getElementById("footer-whatsapp"),
//   ]

//   whatsappButtons.forEach((button) => {
//     if (button) {
//       button.addEventListener("click", (e) => {
//         e.preventDefault()
//         window.open(whatsappURL, "_blank")
//       })
//     }
//   })
// }

// // Portfolio Lightbox
// function initPortfolioLightbox() {
//   const portfolioItems = document.querySelectorAll(".portfolio-item")
//   const lightbox = document.getElementById("lightbox")
//   const lightboxImage = document.getElementById("lightbox-image")
//   const lightboxCaption = document.getElementById("lightbox-caption")
//   const lightboxClose = document.getElementById("lightbox-close")

//   portfolioItems.forEach((item) => {
//     item.addEventListener("click", () => {
//       const img = item.querySelector("img")
//       const caption = item.getAttribute("data-caption")

//       lightboxImage.src = img.src
//       lightboxImage.alt = img.alt
//       lightboxCaption.textContent = caption
//       lightbox.style.display = "block"

//       // Prevent body scroll
//       document.body.style.overflow = "hidden"
//     })
//   })

//   // Close lightbox
//   function closeLightbox() {
//     lightbox.style.display = "none"
//     document.body.style.overflow = "auto"
//   }

//   lightboxClose.addEventListener("click", closeLightbox)

//   lightbox.addEventListener("click", (e) => {
//     if (e.target === lightbox) {
//       closeLightbox()
//     }
//   })

//   // Close with Escape key
//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape" && lightbox.style.display === "block") {
//       closeLightbox()
//     }
//   })
// }

// // Contact Form
// function initContactForm() {
//   const contactForm = document.getElementById("contact-form")

//   contactForm.addEventListener("submit", async (e) => {
//     e.preventDefault()

//     // Get form data
//     const formData = new FormData(contactForm)
//     const name = formData.get("name")
//     const email = formData.get("email")
//     const service = formData.get("service")
//     const message = formData.get("message")

//     // Basic validation
//     if (!name || !email || !service || !message) {
//       alert("Please fill in all fields.")
//       return
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.")
//       return
//     }

//     try {
//       const emailjs = window.emailjs
//       const response = await emailjs.send("service_print_hub", "template_print_hub", {
//         to_email: "printhub319@gmail.com",
//         from_name: name,
//         from_email: email,
//         service_type: service,
//         message: message,
//         reply_to: email,
//       })

//       console.log("[v0] Email sent successfully:", response)
//       alert("Thank you for your inquiry! Your message has been sent to our team. We'll contact you soon.")
//       contactForm.reset()
//     } catch (error) {
//       console.error("[v0] Email sending failed:", error)
//       alert("Error sending message. Please try again or contact us directly on WhatsApp.")
//     }
//   })
// }

// // Scroll Reveal Animation
// function initScrollReveal() {
//   const revealElements = document.querySelectorAll(".section-padding, .service-card, .portfolio-item, .pricing-card")

//   // Check if user prefers reduced motion
//   if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//     revealElements.forEach((el) => el.classList.add("active"))
//     return
//   }

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal", "active")
//         }
//       })
//     },
//     {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     },
//   )

//   revealElements.forEach((el) => {
//     el.classList.add("reveal")
//     observer.observe(el)
//   })
// }

// // Smooth Scrolling
// function initSmoothScrolling() {
//   const navLinks = document.querySelectorAll('a[href^="#"]')

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault()

//       const targetId = this.getAttribute("href")
//       const targetSection = document.querySelector(targetId)

//       if (targetSection) {
//         const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

//         window.scrollTo({
//           top: offsetTop,
//           behavior: "smooth",
//         })
//       }
//     })
//   })
// }

// // Copy Phone Number
// function initCopyPhone() {
//   const copyPhoneBtn = document.getElementById("copy-phone")

//   if (copyPhoneBtn) {
//     copyPhoneBtn.addEventListener("click", () => {
//       const phoneNumber = "0317-4433711"

//       // Try to use the Clipboard API
//       if (navigator.clipboard && window.isSecureContext) {
//         navigator.clipboard
//           .writeText(phoneNumber)
//           .then(() => {
//             showCopySuccess()
//           })
//           .catch(() => {
//             fallbackCopyTextToClipboard(phoneNumber)
//           })
//       } else {
//         fallbackCopyTextToClipboard(phoneNumber)
//       }
//     })
//   }

//   function fallbackCopyTextToClipboard(text) {
//     const textArea = document.createElement("textarea")
//     textArea.value = text
//     textArea.style.position = "fixed"
//     textArea.style.left = "-999999px"
//     textArea.style.top = "-999999px"
//     document.body.appendChild(textArea)
//     textArea.focus()
//     textArea.select()

//     try {
//       document.execCommand("copy")
//       showCopySuccess()
//     } catch (err) {
//       console.error("Fallback: Oops, unable to copy", err)
//       alert("Unable to copy phone number. Please copy manually: 0317-4433711")
//     }

//     document.body.removeChild(textArea)
//   }

//   function showCopySuccess() {
//     const originalText = copyPhoneBtn.textContent
//     copyPhoneBtn.textContent = "Copied!"
//     copyPhoneBtn.style.background = "#22c55e"

//     setTimeout(() => {
//       copyPhoneBtn.textContent = originalText
//       copyPhoneBtn.style.background = ""
//     }, 2000)
//   }
// }

// // Utility Functions
// function debounce(func, wait) {
//   let timeout
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout)
//       func(...args)
//     }
//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//   }
// }

// // Performance optimization for scroll events
// const debouncedScrollHandler = debounce(() => {
//   // Any scroll-based functionality can be added here
// }, 10)

// window.addEventListener("scroll", debouncedScrollHandler)

// // Error handling for images
// document.addEventListener("DOMContentLoaded", () => {
//   const images = document.querySelectorAll("img")

//   images.forEach((img) => {
//     img.addEventListener("error", function () {
//       // Create a placeholder if image fails to load
//       this.src =
//         "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4="
//       this.alt = "Image not found"
//     })
//   })
// })

// // Console log for debugging
// console.log("[v0] PRINT HUB website initialized successfully")



// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initThemeToggle()
  initNavigation()
  initBusinessCard3D()
  initWhatsAppIntegration()
  initPortfolioLightbox()
  initContactForm()
  initScrollReveal()
  initSmoothScrolling()
  initCopyPhone()

  const emailjs = window.emailjs
  emailjs.init("8dOswuJe48i7Dp2nt")
})

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = themeToggle.querySelector(".theme-icon")

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", currentTheme)
  updateThemeIcon(currentTheme)

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon(newTheme)
  })

  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙"
  }
}

// Navigation Functionality
function initNavigation() {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")

    // Animate hamburger menu
    const spans = navToggle.querySelectorAll("span")
    spans.forEach((span, index) => {
      if (navMenu.classList.contains("active")) {
        if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)"
        if (index === 1) span.style.opacity = "0"
        if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        span.style.transform = "none"
        span.style.opacity = "1"
      }
    })
  })

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      const spans = navToggle.querySelectorAll("span")
      spans.forEach((span) => {
        span.style.transform = "none"
        span.style.opacity = "1"
      })
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.1)"
      navbar.style.backdropFilter = "blur(30px)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.06)"
      navbar.style.backdropFilter = "blur(20px)"
    }
  })
}

// Business Card 3D Effect
function initBusinessCard3D() {
  const businessCard = document.getElementById("business-card")

  if (!businessCard) return

  businessCard.addEventListener("mousemove", (e) => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const rect = businessCard.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    businessCard.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            translateZ(20px)
        `
  })

  businessCard.addEventListener("mouseleave", () => {
    businessCard.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
  })
}

// WhatsApp Integration
function initWhatsAppIntegration() {
  const whatsappNumber = "923318796718" // Pakistan format (03318796718)
  const whatsappURL = `https://wa.me/${whatsappNumber}`

  // WhatsApp buttons
  const whatsappButtons = [
    document.getElementById("whatsapp-hero"),
    document.getElementById("whatsapp-float"),
    document.getElementById("footer-whatsapp"),
  ]

  whatsappButtons.forEach((button) => {
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault()
        window.open(whatsappURL, "_blank")
      })
    }
  })
}

// Portfolio Lightbox
function initPortfolioLightbox() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  const lightbox = document.getElementById("lightbox")
  const lightboxImage = document.getElementById("lightbox-image")
  const lightboxCaption = document.getElementById("lightbox-caption")
  const lightboxClose = document.getElementById("lightbox-close")

  portfolioItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img")
      const caption = item.getAttribute("data-caption")

      lightboxImage.src = img.src
      lightboxImage.alt = img.alt
      lightboxCaption.textContent = caption
      lightbox.style.display = "block"

      // Prevent body scroll
      document.body.style.overflow = "hidden"
    })
  })

  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = "none"
    document.body.style.overflow = "auto"
  }

  lightboxClose.addEventListener("click", closeLightbox)

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })

  // Close with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.style.display === "block") {
      closeLightbox()
    }
  })
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const service = formData.get("service")
    const message = formData.get("message")

    // Basic validation
    if (!name || !email || !service || !message) {
      alert("Please fill in all fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    try {
      const emailjs = window.emailjs

      // Using a simple form submission approach for reliability
      const formElement = document.createElement("form")
      formElement.method = "POST"
      formElement.action = "https://formspree.io/f/mwpwjozd"
      formElement.style.display = "none"

      const fields = {
        name: name,
        email: email,
        service: service,
        message: message,
      }

      for (const [key, value] of Object.entries(fields)) {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = value
        formElement.appendChild(input)
      }

      document.body.appendChild(formElement)
      formElement.submit()
      document.body.removeChild(formElement)

      console.log("[v0] Email submitted successfully")
      alert("Thank you for your inquiry! Your message has been sent to our team. We'll contact you soon.")
      contactForm.reset()
    } catch (error) {
      console.error("[v0] Email sending failed:", error)
      alert("Error sending message. Please try again or contact us directly on WhatsApp: 03318796718")
    }
  })
}

// Scroll Reveal Animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".section-padding, .service-card, .portfolio-item, .pricing-card")

  // Check if user prefers reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach((el) => el.classList.add("active"))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal", "active")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  revealElements.forEach((el) => {
    el.classList.add("reveal")
    observer.observe(el)
  })
}

// Smooth Scrolling
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Copy Phone Number
function initCopyPhone() {
  const copyPhoneBtn = document.getElementById("copy-phone")

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener("click", () => {
      const phoneNumber = "03318796718"

      // Try to use the Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(phoneNumber)
          .then(() => {
            showCopySuccess()
          })
          .catch(() => {
            fallbackCopyTextToClipboard(phoneNumber)
          })
      } else {
        fallbackCopyTextToClipboard(phoneNumber)
      }
    })
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.position = "fixed"
    textArea.style.left = "-999999px"
    textArea.style.top = "-999999px"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      document.execCommand("copy")
      showCopySuccess()
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err)
      alert("Unable to copy phone number. Please copy manually: 03318796718")
    }

    document.body.removeChild(textArea)
  }

  function showCopySuccess() {
    const originalText = copyPhoneBtn.textContent
    copyPhoneBtn.textContent = "Copied!"
    copyPhoneBtn.style.background = "#22c55e"

    setTimeout(() => {
      copyPhoneBtn.textContent = originalText
      copyPhoneBtn.style.background = ""
    }, 2000)
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(() => {
  // Any scroll-based functionality can be added here
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)

// Error handling for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")

  images.forEach((img) => {
    img.addEventListener("error", function () {
      // Create a placeholder if image fails to load
      this.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4="
      this.alt = "Image not found"
    })
  })
})

// Console log for debugging
console.log("[v0] PRINT HUB website initialized successfully")

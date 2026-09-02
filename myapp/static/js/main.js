(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);













document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE NAVIGATION
    ========================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

            const isOpen = navLinks.classList.contains("mobile-open");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.innerHTML = isOpen ? "✕" : "☰";
        });


        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-open");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute("aria-expanded", "false");
            });

        });

    }


    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const header = document.querySelector("header");

    function handleNavbarScroll() {

        if (!header) return;

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                15;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ==========================================
       ACTIVE NAVIGATION LINK
    ========================================== */

    const sections = document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentSection =
                        entry.target.getAttribute("id");

                    navigationLinks.forEach(link => {

                        link.classList.remove("active");

                        const href =
                            link.getAttribute("href");

                        if (href === `#${currentSection}`) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.25,
            rootMargin: "-80px 0px -40% 0px"
        }
    );


    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".trust-card, " +
        ".product-card, " +
        ".why-card, " +
        ".solution, " +
        ".step, " +
        ".platform-box, " +
        ".security-node, " +
        ".india-stat, " +
        ".cta-box"
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const revealObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* ==========================================
       PRODUCT CARD TILT EFFECT
    ========================================== */

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(card => {

        card.addEventListener("mousemove", event => {

            // Disable on mobile
            if (window.innerWidth < 768) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });


    /* ==========================================
       DASHBOARD COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(
            ".stat strong, .show-stat strong"
        );


    function animateCounter(element) {

        const originalText =
            element.textContent.trim();

        /*
         * Extract number from text.
         * Examples:
         * 98%
         * 1,248
         * 03
         * 99.98%
         */

        const numberMatch =
            originalText.match(/[\d,.]+/);

        if (!numberMatch) {
            return;
        }

        const numericValue =
            parseFloat(
                numberMatch[0].replace(/,/g, "")
            );

        if (isNaN(numericValue)) {
            return;
        }

        const suffix =
            originalText.replace(numberMatch[0], "");

        const hasDecimal =
            numberMatch[0].includes(".");

        const duration = 1200;

        const startTime =
            performance.now();


        function updateCounter(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) / duration,
                    1
                );


            // Smooth easing
            const eased =
                1 - Math.pow(1 - progress, 3);


            const currentValue =
                numericValue * eased;


            let displayValue;


            if (hasDecimal) {

                displayValue =
                    currentValue.toFixed(2);

            } else {

                displayValue =
                    Math.floor(currentValue)
                        .toLocaleString();

            }


            element.textContent =
                displayValue + suffix;


            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                element.textContent =
                    originalText;

            }

        }


        requestAnimationFrame(updateCounter);

    }


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        animateCounter(entry.target);

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.7
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });


    /* ==========================================
       DASHBOARD LIVE STATUS
    ========================================== */

    const liveIndicators =
        document.querySelectorAll(".live");


    function updateLiveStatus() {

        liveIndicators.forEach(indicator => {

            if (
                indicator.textContent
                    .trim()
                    .toUpperCase()
                    .includes("LIVE")
            ) {

                indicator.classList.add("pulse");

            }

        });

    }

    updateLiveStatus();


    /* ==========================================
       NETWORK NODE ANIMATION
    ========================================== */

    const networkNodes =
        document.querySelectorAll(".node");


    networkNodes.forEach((node, index) => {

        node.style.animationDelay =
            `${index * 0.2}s`;

        node.classList.add("node-pulse");

    });


    /* ==========================================
       SECURITY FLOW ANIMATION
    ========================================== */

    const securityNodes =
        document.querySelectorAll(
            ".security-node"
        );


    securityNodes.forEach((node, index) => {

        node.style.transitionDelay =
            `${index * 100}ms`;

    });


    /* ==========================================
       PLATFORM BOX HOVER
    ========================================== */

    const platformBoxes =
        document.querySelectorAll(
            ".platform-box"
        );


    platformBoxes.forEach(box => {

        box.addEventListener("mouseenter", () => {

            box.classList.add("platform-active");

        });


        box.addEventListener("mouseleave", () => {

            box.classList.remove(
                "platform-active"
            );

        });

    });


    /* ==========================================
       DASHBOARD TABS
    ========================================== */

    const tabs =
        document.querySelectorAll(".tab");


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(item => {

                item.classList.remove("active");

            });

            tab.classList.add("active");

        });

    });


    /* ==========================================
       BUTTON RIPPLE EFFECT
    ========================================== */

    const buttons =
        document.querySelectorAll(".btn");


    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;


            this.appendChild(ripple);


            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });


    /* ==========================================
       PARALLAX HERO DASHBOARD
    ========================================== */

    const dashboard =
        document.querySelector(
            ".dashboard-wrap"
        );


    if (dashboard) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.innerWidth < 768) {
                    return;
                }

                const scrollPosition =
                    window.scrollY;

                const movement =
                    scrollPosition * 0.04;

                dashboard.style.transform =
                    `translateY(${movement}px)`;

            }
        );

    }


    /* ==========================================
       MOUSE GLOW EFFECT
    ========================================== */

    const hero =
        document.querySelector(".hero");


    if (hero) {

        hero.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 768) {
                    return;
                }

                const x =
                    (event.clientX /
                        window.innerWidth) * 100;

                const y =
                    (event.clientY /
                        window.innerHeight) * 100;


                hero.style.setProperty(
                    "--mouse-x",
                    `${x}%`
                );

                hero.style.setProperty(
                    "--mouse-y",
                    `${y}%`
                );

            }
        );

    }


    /* ==========================================
       CURRENT YEAR
    ========================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });


    /* ==========================================
       ESCAPE KEY
       CLOSE MOBILE MENU
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                if (navLinks) {

                    navLinks.classList.remove(
                        "mobile-open"
                    );

                }

                if (menuToggle) {

                    menuToggle.innerHTML = "☰";

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );

});
































/* =====================================================
   ZECURIX WEBSITE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       1. NAVBAR SCROLL EFFECT
    ================================================= */

    const navbar = document.querySelector(".z-navbar");

    function handleNavbar() {
        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleNavbar);
    handleNavbar();


    /* =================================================
       2. MOBILE MENU
    ================================================= */

    const menuButton = document.getElementById("zMenu");
    const navLinks = document.querySelector(".z-nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("mobile-open");

            if (navLinks.classList.contains("mobile-open")) {
                menuButton.innerHTML = "✕";
            } else {
                menuButton.innerHTML = "☰";
            }

        });


        /* Close menu after clicking a link */

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("mobile-open");

                menuButton.innerHTML = "☰";

            });

        });

    }


    /* =================================================
       3. ACTIVE NAVIGATION
    ================================================= */

    const currentPath =
        window.location.pathname.replace(/\/$/, "");

    document.querySelectorAll(".z-nav-links a").forEach(function (link) {

        const href = link.getAttribute("href");

        if (!href) return;

        const linkPath =
            href.replace(/\/$/, "");

        link.classList.remove("active");

        if (
            linkPath === currentPath ||
            (currentPath === "" && linkPath === "")
        ) {
            link.classList.add("active");
        }

    });


    /* =================================================
       4. SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".z-product, .z-section-head, .z-india-inner, .z-cta-box"
        );

    const revealObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        revealObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =================================================
       5. NUMBER COUNTER ANIMATION
    ================================================= */

    function animateNumber(element, target, duration) {

        let start = 0;

        const startTime = performance.now();

        function update(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

            const ease =
                1 - Math.pow(1 - progress, 3);

            const value =
                start + (target - start) * ease;

            element.textContent =
                Math.floor(value).toLocaleString();

            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                element.textContent =
                    target.toLocaleString();

            }

        }

        requestAnimationFrame(update);
    }


    /* Endpoint counter */

    const endpointNumber =
        document.querySelector(".z-stat strong");

    if (endpointNumber) {

        const observer =
            new IntersectionObserver(
                function (entries, obs) {

                    if (entries[0].isIntersecting) {

                        animateNumber(
                            endpointNumber,
                            1248,
                            1500
                        );

                        obs.disconnect();

                    }

                },
                {
                    threshold: 0.5
                }
            );

        observer.observe(endpointNumber);

    }


    /* =================================================
       6. DASHBOARD LIVE PULSE
    ================================================= */

    const liveStatus =
        document.querySelector(".z-live");

    if (liveStatus) {

        setInterval(function () {

            liveStatus.classList.toggle("pulse");

        }, 1800);

    }


    /* =================================================
       7. PRODUCT CARD HOVER
    ================================================= */

    document.querySelectorAll(".z-product").forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.classList.add("product-active");

        });

        card.addEventListener("mouseleave", function () {

            card.classList.remove("product-active");

        });

    });


    /* =================================================
       8. MOUSE GLOW EFFECT
    ================================================= */

    const hero =
        document.querySelector(".z-hero");

    if (hero) {

        hero.addEventListener("mousemove", function (event) {

            const rect =
                hero.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            hero.style.setProperty(
                "--mouse-x",
                x + "px"
            );

            hero.style.setProperty(
                "--mouse-y",
                y + "px"
            );

        });

    }


    /* =================================================
       9. BUTTON RIPPLE EFFECT
    ================================================= */

    document.querySelectorAll(
        ".z-primary, .z-secondary, .z-expert, .z-assessment"
    ).forEach(function (button) {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                button.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                event.clientX -
                rect.left -
                size / 2 +
                "px";

            ripple.style.top =
                event.clientY -
                rect.top -
                size / 2 +
                "px";

            button.appendChild(ripple);

            setTimeout(function () {

                ripple.remove();

            }, 600);

        });

    });


    /* =================================================
       10. DASHBOARD SIDEBAR
    ================================================= */

    document.querySelectorAll(".z-side-item").forEach(function (item) {

        item.addEventListener("click", function () {

            document.querySelectorAll(
                ".z-side-item"
            ).forEach(function (other) {

                other.classList.remove("active");

            });

            item.classList.add("active");

        });

    });


    /* =================================================
       11. NETWORK NODE ANIMATION
    ================================================= */

    const nodes =
        document.querySelectorAll(".z-node");

    nodes.forEach(function (node, index) {

        setTimeout(function () {

            node.classList.add("node-pulse");

        }, index * 500);

    });


    /* =================================================
       12. SMOOTH SCROLL
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =================================================
       13. CTA BUTTON CLICK FEEDBACK
    ================================================= */

    document.querySelectorAll(
        ".z-primary, .z-assessment"
    ).forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform =
                "scale(.97)";

            setTimeout(function () {

                button.style.transform = "";

            }, 150);

        });

    });


    /* =================================================
       14. REDUCED MOTION SUPPORT
    ================================================= */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reducedMotion) {

        document.documentElement.style
            .scrollBehavior = "auto";

    }


    console.log(
        "Zecurix Platform initialized successfully."
    );

});
/* =========================================================
   VISHAL GEDELA — PORTFOLIO INTERACTIONS
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("open")) {
            if (icon) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }
        } else {
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }

    });


    /* Close menu after clicking a link */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}


/* =========================================================
   2. NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
   3. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================================================
   4. MOUSE GLOW EFFECT
   ========================================================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", event => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    });

}


/* =========================================================
   5. CREATE FLOATING PARTICLES
   ========================================================= */

const particlesContainer =
    document.querySelector("#particles");

if (particlesContainer) {

    const particleCount =
        window.innerWidth < 700 ? 25 : 55;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${8 + Math.random() * 15}s`;

        particle.style.animationDelay =
            `${Math.random() * 12}s`;

        particle.style.opacity =
            `${0.2 + Math.random() * 0.6}`;

        const size =
            1 + Math.random() * 2;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particlesContainer.appendChild(particle);

    }

}


/* =========================================================
   6. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".card, .section-title, .about-copy, .system-panel"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s cubic-bezier(.16,1,.3,1)";

    revealObserver.observe(element);

});


/* =========================================================
   7. STAGGER CARD ANIMATIONS
   ========================================================= */

document.querySelectorAll(".grid-2, .grid-3")
    .forEach(grid => {

        const cards =
            grid.querySelectorAll(".card");

        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.08}s`;

        });

    });


/* =========================================================
   8. 3D CARD TILT
   ========================================================= */

const tiltCards =
    document.querySelectorAll(".project-card");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

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
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-9px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "";

    });

});


/* =========================================================
   9. MAGNETIC BUTTON EFFECT
   ========================================================= */

const magneticButtons =
    document.querySelectorAll(".btn");

magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        if (window.innerWidth < 800) return;

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.12}px,
                       ${y * 0.12}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* =========================================================
   10. TYPING TEXT EFFECT
   ========================================================= */

const typewriter =
    document.querySelector(".typewriter");

if (typewriter) {

    const texts = [

        "ECE • VLSI & Digital Design • Embedded Systems",

        "Digital Design • FPGA • Verilog • VHDL",

        "Embedded Systems • C • Arduino",

        "RF • Research • MATLAB",

        "AI/ML • Python • Computer Vision"

    ];

    let textIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentText =
            texts[textIndex];

        if (!deleting) {

            typewriter.textContent =
                currentText.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1800
                );

                return;

            }

        } else {

            typewriter.textContent =
                currentText.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) % texts.length;

            }

        }

        setTimeout(
            typeEffect,
            deleting ? 35 : 65
        );

    }


    typewriter.style.animation = "none";

    typewriter.textContent = "";

    setTimeout(typeEffect, 800);

}


/* =========================================================
   11. NUMBER COUNTER
   ========================================================= */

const counters =
    document.querySelectorAll("[data-count]");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const counter =
                    entry.target;

                const target =
                    parseFloat(
                        counter.dataset.count
                    );

                const suffix =
                    counter.dataset.suffix || "";

                let current = 0;

                const duration = 1200;

                const start =
                    performance.now();


                function updateCounter(time) {

                    const progress =
                        Math.min(
                            (time - start) /
                            duration,
                            1
                        );

                    const eased =
                        1 -
                        Math.pow(
                            1 - progress,
                            3
                        );

                    current =
                        target * eased;

                    counter.textContent =
                        Number.isInteger(target)
                            ? Math.floor(current) + suffix
                            : current.toFixed(2) + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(
                            updateCounter
                        );
                    }

                }

                requestAnimationFrame(
                    updateCounter
                );

                counterObserver.unobserve(counter);

            });

        },
        {
            threshold: 0.8
        }
    );


counters.forEach(counter => {

    counter.textContent = "0";

    counterObserver.observe(counter);

});


/* =========================================================
   12. SKILL BAR ANIMATION
   ========================================================= */

const skillBars =
    document.querySelectorAll(
        ".skill-line span"
    );

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                const bar =
                    entry.target;

                const width =
                    bar.dataset.width ||
                    "80%";

                bar.style.width =
                    width;

                skillObserver.unobserve(bar);

            });

        },
        {
            threshold: 0.5
        }
    );


skillBars.forEach(bar => {

    bar.style.width = "0%";

    skillObserver.observe(bar);

});


/* =========================================================
   13. SMOOTH ANCHOR SCROLL
   ========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", event => {

        const targetId =
            anchor.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navOffset =
            70;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            navOffset;

        window.scrollTo({

            top: position,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   14. HERO PARALLAX
   ========================================================= */

const hero =
    document.querySelector("header");

const heroContent =
    document.querySelector(".hero-content");

if (hero && heroContent) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.innerWidth < 800)
                return;

            const scroll =
                window.scrollY;

            if (scroll > window.innerHeight)
                return;

            heroContent.style.transform =
                `translateY(${scroll * 0.18}px)`;

            heroContent.style.opacity =
                Math.max(
                    0,
                    1 - scroll / 650
                );

        }
    );

}


/* =========================================================
   15. RANDOM GLITCH EFFECT
   ========================================================= */

const logo =
    document.querySelector(".logo");

if (logo) {

    setInterval(() => {

        logo.classList.add("glitch");

        setTimeout(() => {

            logo.classList.remove("glitch");

        }, 180);

    }, 5000);

}


/* =========================================================
   16. PAGE LOADED
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "%c VISHAL GEDELA ",
        "color:#00d2ff;font-size:20px;font-weight:bold;"
    );

    console.log(
        "%c ECE | VLSI | Embedded | RF | AI/ML ",
        "color:#94a3b8;font-size:12px;"
    );

});

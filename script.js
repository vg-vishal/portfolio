/* =========================================================
   VISHAL GEDELA — PORTFOLIO ANIMATIONS
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    });

}


/* =========================================================
   FLOATING PARTICLES
   ========================================================= */

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {

    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {

        const particle = document.createElement("span");

        particle.style.position = "absolute";
        particle.style.width = Math.random() * 3 + 1 + "px";
        particle.style.height = particle.style.width;

        particle.style.borderRadius = "50%";

        particle.style.background = "#00eaff";

        particle.style.boxShadow =
            "0 0 8px rgba(0,234,255,.8)";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.opacity =
            Math.random() * .7 + .2;

        particle.style.animation =
            `particleFloat ${5 + Math.random() * 10}s linear infinite`;

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particlesContainer.appendChild(particle);

    }

}


/* =========================================================
   PARTICLE ANIMATION STYLE
   ========================================================= */

const particleStyle = document.createElement("style");

particleStyle.innerHTML = `

@keyframes particleFloat {

    0% {
        transform: translate(0, 0);
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    50% {
        transform: translate(
            ${Math.random() * 100 - 50}px,
            -100px
        );
    }

    80% {
        opacity: .5;
    }

    100% {
        transform: translate(
            ${Math.random() * 150 - 75}px,
            -220px
        );
        opacity: 0;
    }

}

`;

document.head.appendChild(particleStyle);


/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".card, .section-title, .hero-stats"
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity .8s ease, transform .8s ease";

});


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

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


/* =========================================================
   ANIMATED SKILL BARS
   ========================================================= */

const skillBars = document.querySelectorAll(
    ".skill-line span"
);


const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const width =
                    entry.target.getAttribute("data-width");

                entry.target.style.width = width;

                skillObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.5
    }
);


skillBars.forEach(bar => {
    skillObserver.observe(bar);
});


/* =========================================================
   3D PROJECT CARD EFFECT
   ========================================================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section, header");
const navItems = document.querySelectorAll(".nav-links a");


const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach(section => {

    if (section.id) {
        navObserver.observe(section);
    }

});


/* =========================================================
   NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(3,7,15,.88)";

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.25)";

    } else {

        navbar.style.background =
            "rgba(5,8,16,.65)";

        navbar.style.boxShadow = "none";

    }

});


/* =========================================================
   SMOOTH BUTTON RIPPLE
   ========================================================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        const rect =
            this.getBoundingClientRect();

        const size =
            Math.max(rect.width, rect.height);

        ripple.style.position = "absolute";
        ripple.style.width = size + "px";
        ripple.style.height = size + "px";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
            "rgba(255,255,255,.25)";
        ripple.style.left =
            e.clientX - rect.left - size / 2 + "px";
        ripple.style.top =
            e.clientY - rect.top - size / 2 + "px";

        ripple.style.transform = "scale(0)";
        ripple.style.pointerEvents = "none";

        ripple.style.animation =
            "rippleEffect .6s ease-out";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* =========================================================
   RIPPLE ANIMATION
   ========================================================= */

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes rippleEffect {

    to {
        transform: scale(2);
        opacity: 0;
    }

}

.nav-links a.active {
    color: #00eaff;
    text-shadow: 0 0 12px rgba(0,234,255,.7);
}

`;

document.head.appendChild(rippleStyle);


/* =========================================================
   TYPING CURSOR EFFECT
   ========================================================= */

const typewriter =
    document.querySelector(".typewriter");

if (typewriter) {

    const text = typewriter.textContent.trim();

    typewriter.textContent = "";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typewriter.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 45);

        }

    }

    setTimeout(typeText, 800);

}


/* =========================================================
   PAGE LOADED
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "⚡ Vishal Gedela Portfolio Loaded"
    );

});

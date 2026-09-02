/* ============================================
   VISHAL GEDELA PORTFOLIO 2.0
   ============================================ */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        document.getElementById("loader")
            .classList.add("hide");
    }, 900);

});


/* ================= TYPEWRITER ================= */

const roles = [
    "ECE Student",
    "VLSI / RTL Enthusiast",
    "FPGA Developer",
    "Embedded Systems Explorer",
    "RF Engineering Researcher",
    "AI/ML Developer"
];

const typeElement = document.getElementById("typewriter");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    const current = roles[roleIndex];

    if (!deleting) {

        typeElement.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeWriter, 1400);
            return;
        }

    } else {

        typeElement.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(
        typeWriter,
        deleting ? 45 : 85
    );
}

typeWriter();


/* ================= CURSOR GLOW ================= */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;

});


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});


/* ================= ACTIVE NAV ================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        if (window.scrollY >= top) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= SCROLL PROGRESS ================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / height) * 100;

    document.getElementById("scrollProgress")
        .style.width = `${progress}%`;

});


/* ================= REVEAL ================= */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: .12
        }
    );


document.querySelectorAll(".reveal")
.forEach(element => {

    revealObserver.observe(element);

});


/* ================= MAGNETIC BUTTONS ================= */

document.querySelectorAll(".magnetic")
.forEach(button => {

    button.addEventListener("mousemove", e => {

        const rect =
            button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * .12}px, ${y * .12}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


/* ================= PROJECT MODALS ================= */

const projectData = {

    "air-pencil": {

        title: "✏️ AI Air Pencil",

        text: `
            AI Air Pencil is a computer vision and machine learning
            project that allows users to draw digits in the air using
            hand gestures.
        `,

        code: `
SYSTEM PIPELINE

Camera
   ↓
Hand / Finger Detection
   ↓
Air Drawing
   ↓
Image Processing
   ↓
ML Classifier
   ↓
Digit Prediction

MODEL PERFORMANCE

Training Samples : 4797
Testing Samples  : 1200
Accuracy         : 97.17%

TECH STACK

Python
OpenCV
MediaPipe
Machine Learning
Computer Vision
        `

    },


    gesture: {

        title: "🖐️ Hand Gesture Recognition",

        text: `
            An IMU-based hand gesture recognition system using an
            MPU6050 sensor, Arduino and a KNN machine learning model.
            The system recognizes multiple hand movements.
        `,

        code: `
GESTURE PIPELINE

MPU6050
   ↓
Arduino
   ↓
Motion Data
   ↓
Feature Extraction
   ↓
KNN Classifier
   ↓
Gesture

RECOGNIZED

OPEN HAND
CLOSED FIST
LEFT
RIGHT
UP
DOWN
        `

    },


    rf: {

        title: "📡 GA-Optimized RF Impedance Matching",

        text: `
            A research-oriented RF project that uses a Genetic
            Algorithm to optimize a T-network impedance matching
            circuit for RF coils with complex biological loads.
        `,

        code: `
RF SYSTEM

Complex Biological Load
          ↓
     T-Network
          ↓
 Genetic Algorithm
          ↓
 Optimized L / C Values
          ↓
     Better Matching
          ↓
       S11 ↓

SIMULATION

MATLAB
Multisim

Example Frequency
64 MHz
        `

    },


    alu: {

        title: "🧮 8-bit ALU & Accumulator",

        text: `
            A custom 8-bit ALU designed using Verilog and integrated
            into a sequential accumulator architecture. The design
            was packaged as a Vivado IP core.
        `,

        code: `
8-BIT DIGITAL SYSTEM

       ┌──────────┐
 A ───►│          │
       │   ALU    │───► RESULT
 B ───►│          │
       └────┬─────┘
            │
            ▼
       ACCUMULATOR
            │
            ▼
       REGISTER

IMPLEMENTATION

HDL       : Verilog
TOOL      : Xilinx Vivado
TARGET    : FPGA
ARCH      : 8-bit
TYPE      : Soft IP Core

GitHub:
github.com/vg-vishal/8Bit-ALU-Accumulator
        `

    }

};


function openProject(projectName) {

    const project =
        projectData[projectName];

    if (!project) return;

    const modal =
        document.getElementById("projectModal");

    const content =
        document.getElementById("modalContent");

    content.innerHTML = `

        <h2>${project.title}</h2>

        <p>${project.text}</p>

        <pre class="modal-code">
${project.code}
        </pre>

    `;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeProject() {

    document
        .getElementById("projectModal")
        .classList.remove("show");

    document.body.style.overflow = "";

}


document.addEventListener("keydown", e => {

    if (e.key === "Escape") {
        closeProject();
    }

});


/* ================= ALU ANIMATION ================= */

const binaryValues = [
    ["01010110", "00101101", "10000011"],
    ["10101010", "00001111", "10111001"],
    ["11110000", "00001111", "11111111"],
    ["00110011", "01010101", "10001000"],
    ["11001100", "00110011", "11111111"]
];

let binaryIndex = 0;

function updateALU() {

    const values =
        binaryValues[binaryIndex];

    const a =
        document.getElementById("binaryA");

    const b =
        document.getElementById("binaryB");

    const result =
        document.getElementById("binaryResult");

    if (a && b && result) {

        a.textContent = values[0];
        b.textContent = values[1];
        result.textContent = values[2];

    }

    binaryIndex =
        (binaryIndex + 1) %
        binaryValues.length;

}

setInterval(updateALU, 1800);


/* ================= GESTURE ANIMATION ================= */

const gestures = [
    ["🖐️", "OPEN HAND"],
    ["✊", "CLOSED FIST"],
    ["👈", "LEFT"],
    ["👉", "RIGHT"],
    ["☝️", "UP"],
    ["👇", "DOWN"]
];

let gestureIndex = 0;

setInterval(() => {

    const icon =
        document.querySelector(".hand-icon");

    const label =
        document.querySelector(".gesture-label");

    if (!icon || !label) return;

    gestureIndex =
        (gestureIndex + 1) %
        gestures.length;

    icon.style.opacity = "0";

    setTimeout(() => {

        icon.textContent =
            gestures[gestureIndex][0];

        label.textContent =
            gestures[gestureIndex][1];

        icon.style.opacity = "1";

    }, 250);

}, 1700);


/* ================= CIRCUIT CANVAS ================= */

const canvas =
    document.getElementById("circuitCanvas");

const ctx =
    canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


function createParticles() {

    particles = [];

    const count =
        Math.min(
            70,
            Math.floor(window.innerWidth / 18)
        );

    for (let i = 0; i < count; i++) {

        particles.push({

            x: Math.random() *
                canvas.width,

            y: Math.random() *
                canvas.height,

            vx:
                (Math.random() - .5) * .25,

            vy:
                (Math.random() - .5) * .25,

            size:
                Math.random() * 2 + .5

        });

    }

}

createParticles();


function animateCircuit() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((p, i) => {

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width)
            p.vx *= -1;

        if (p.y < 0 || p.y > canvas.height)
            p.vy *= -1;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0,234,255,.5)";

        ctx.fill();


        particles.forEach((q, j) => {

            if (i >= j) return;

            const dx = p.x - q.x;
            const dy = p.y - q.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {

                ctx.beginPath();

                ctx.moveTo(p.x, p.y);

                ctx.lineTo(q.x, q.y);

                ctx.strokeStyle =
                    `rgba(0,234,255,${(
                        1 - distance / 120
                    ) * .08})`;

                ctx.lineWidth = 1;

                ctx.stroke();

            }

        });

    });

    requestAnimationFrame(animateCircuit);

}

animateCircuit();


/* ================= 3D PROJECT TILT ================= */

document.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("mousemove", e => {

        if (window.innerWidth < 900) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - .5) * 7;

        const rotateX =
            ((y / rect.height) - .5) * -7;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= THEME ================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light")
            ? "☾"
            : "☼";

});


/* ================= CONSOLE ================= */

console.log(
`
╔══════════════════════════════════╗
║      VISHAL GEDELA PORTFOLIO     ║
╠══════════════════════════════════╣
║ ECE • VLSI • FPGA • AI/ML • RF   ║
║                                  ║
║ System Status: ONLINE            ║
║ Portfolio Version: 2.0           ║
╚══════════════════════════════════╝
`
);

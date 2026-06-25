// Initialization and Core State
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    applyBackgroundGlow(0);
});

// Audio State Configuration Engine
const audio = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");

musicToggle.addEventListener("click", () => {
    if (audio.paused) {
        // Developer Audio Setup: Absolute audio URL resource path must be bound to HTML structural frame element
        audio.play().then(() => {
            musicStatus.textContent = "Playing";
        }).catch(err => {
            console.log("Audio track resource context needs functional source reference mapping.", err);
            musicStatus.textContent = "Error";
        });
    } else {
        audio.pause();
        musicStatus.textContent = "Mute";
    }
});

// Particle Ambient Generator Model
function initParticles() {
    const container = document.getElementById("particle-container");
    const particleTypes = ["✨", "💗", "⭐", "🌸"];
    const maxParticles = 25;

    for (let i = 0; i < maxParticles; i++) {
        createParticle(container, particleTypes);
    }
}

function createParticle(container, types) {
    const p = document.createElement("div");
    p.className = "particle";
    p.textContent = types[Math.floor(Math.random() * types.length)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDelay = Math.random() * 5 + "s";
    p.style.fontSize = (Math.random() * 12 + 10) + "px";
    
    container.appendChild(p);
    
    // Recycle particle loop instance
    p.addEventListener("animationiteration", () => {
        p.style.left = Math.random() * 100 + "vw";
    });
}

// Master Phase Navigation System
function transitionPhase(current, next) {
    const currentSection = document.getElementById(`phase-${current}`);
    const nextSection = document.getElementById(`phase-${next}`);
    
    if (!currentSection || !nextSection) return;

    // Apply phase explicit custom separation visual effects animations 
    if (current === 0) currentSection.classList.add("shatter-exit");
    else if (current === 1) currentSection.classList.add("book-exit");
    else if (current === 2) currentSection.classList.add("curtain-exit");
    else if (current === 3) currentSection.classList.add("starburst-exit");

    setTimeout(() => {
        currentSection.classList.remove("active-phase", "shatter-exit", "book-exit", "curtain-exit", "starburst-exit");
        
        nextSection.classList.add("active-phase", "soft-rebuild");
        applyBackgroundGlow(next);
        updateNavigationIndicators(next);

        // Process entry tasks specific to unique phase nodes
        if (next === 1 || next === 3) {
            triggerLineFades(nextSection);
        }

        window.scrollTo(0, 0);
    }, 650);
}

// Dynamic Background Profiles Handler
function applyBackgroundGlow(phaseId) {
    const body = document.body;
    body.className = ""; // Wipe all active classes cleanly
    const targetClass = document.getElementById(`phase-${phaseId}`).getAttribute("data-bg");
    body.classList.add(targetClass);
}

// Footer Dots Context Handler
function updateNavigationIndicators(phaseId) {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => {
        if (parseInt(dot.getAttribute("data-phase")) === phaseId) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

// Sequential Visual Line Array Delivery System
function triggerLineFades(container) {
    const lines = container.querySelectorAll(".fade-line");
    lines.forEach((line, index) => {
        line.classList.remove("visible"); // Clean reset
        setTimeout(() => {
            line.classList.add("visible");
        }, index * 450); // Exact sequential spacing rules parsed via standard specification parameters
    });
}

// Phase 2 Envelope Reveal Component
function openEnvelope() {
    const env = document.getElementById("p2-envelope");
    const letterBox = document.getElementById("p2-letter");
    
    env.classList.add("open-anim");
    
    setTimeout(() => {
        env.classList.add("hidden");
        letterBox.classList.remove("hidden");
        runTypewriter();
    }, 450);
}

// Typewriter Array Automation Engine
function runTypewriter() {
    const target = document.getElementById("p2-typewriter");
    const datasetLines = [
        "We were with my female friends.",
        "All girls. Just us.",
        "The room was really hot that day.",
        "And I was wearing a spaghetti top under my outer layer.",
        "In the heat of the moment ... literally ... I removed my top.",
        "In front of them.",
        "It wasn't intentional.",
        "It wasn't planned.",
        "These were all girls. My friends.",
        "And in that moment I just... didn't think twice.",
        "But I should have.",
        "Because even if it felt harmless to me ...",
        "I know it didn't feel that way to you.",
        "And you deserve to be considered. Always.",
        "So yes. I agree. That was a mistake.",
        "I own it completely.",
        "I hate that it happened.",
        "You deserve better from me.",
        "And just so you know ... I told you the moment I could. Without hesitation. Without hiding it. Because that's what I do. I tell you everything. I just didn't expect you to be hurt by it. But now that I know ... I'll be more careful."
    ];

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    target.innerHTML = ""; // Clear box instance container cleanly

    function typeNextChar() {
        if (currentLineIndex < datasetLines.length) {
            if (currentCharIndex === 0) {
                const p = document.createElement("p");
                p.style.marginBottom = "8px";
                target.appendChild(p);
            }
            
            const currentParagraphs = target.getElementsByTagName("p");
            const activeParagraph = currentParagraphs[currentParagraphs.length - 1];
            
            activeParagraph.textContent += datasetLines[currentLineIndex].charAt(currentCharIndex);
            currentCharIndex++;

            if (currentCharIndex < datasetLines[currentLineIndex].length) {
                setTimeout(typeNextChar, 15); // Fine letter speed delivery mechanics
            } else {
                currentLineIndex++;
                currentCharIndex = 0;
                setTimeout(typeNextChar, 350); // Sentence transition rest state intervals
            }
        }
    }
    typeNextChar();
}

// Popup System Interfaces
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Phase 4 Forgive-O-Meter Engine Logic
let forgivenessScore = 0;
const meterThresholdMessages = {
    10: "Oh... he actually pressed it 👀",
    20: "He's thinking about it... 🥺",
    30: "Something is softening in there... 💙",
    40: "Halfway to forgiveness 😭",
    50: "He's coming around omg 🎉",
    60: "I can feel it... 💗",
    70: "The walls are coming down 🌸",
    80: "Almost there... please 😍",
    90: "ONE MORE PRESS JAANA 😭💗",
    100: "FULL CELEBRATION"
};

function handleForgive() {
    if (forgivenessScore >= 100) return;

    forgivenessScore += 10;
    
    // Core structural updates
    const fill = document.getElementById("meter-fill");
    const txt = document.getElementById("meter-text");
    const feedback = document.getElementById("meter-feedback");

    fill.style.width = `${forgivenessScore}%`;
    txt.textContent = forgivenessScore === 100 ? "💖 100% FORGIVEN" : `💗 ${forgivenessScore}%`;
    
    if (meterThresholdMessages[forgivenessScore]) {
        feedback.textContent = meterThresholdMessages[forgivenessScore];
    }

    // Spawn kinetic burst elements
    generateHeartBurst();

    if (forgivenessScore === 100) {
        executeGrandSuccessSequence();
    }
}

// Kinetic Vector Burst Generator
function generateHeartBurst() {
    const burstCount = 6;
    for (let i = 0; i < burstCount; i++) {
        const heart = document.createElement("div");
        heart.textContent = ["💗", "💖", "💘", "🌸", "✨"][Math.floor(Math.random() * 5)];
        heart.style.position = "fixed";
        heart.style.zIndex = "200";
        heart.style.left = "50vw";
        heart.style.top = "70vh";
        heart.style.fontSize = "24px";
        heart.style.pointerEvents = "none";
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 12 + 8;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity - 5; // Offset bias upwards cleanly
        
        document.body.appendChild(heart);

        let currentX = 50;
        let currentY = 70;
        let opacity = 1;
        
        let frameCount = 0;
        function animateBurst() {
            frameCount++;
            currentX += (vx * 0.4);
            currentY += (vy * 0.4) + (frameCount * 0.05); // Simulated gravity drag profile mechanics
            opacity -= 0.02;

            heart.style.left = `calc(${currentX}vw + ${vx * frameCount}px)`;
            heart.style.top = `calc(${currentY}vh + ${vy * frameCount}px)`;
            heart.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animateBurst);
            } else {
                heart.remove();
            }
        }
        requestAnimationFrame(animateBurst);
    }
}

// Master Success Sequence Wrapper
function executeGrandSuccessSequence() {
    document.getElementById("forgive-btn").disabled = true;
    document.getElementById("forgive-btn").style.opacity = "0.5";
    
    // Unveil embedded nodes and loop components
    document.getElementById("celebration-corner-gifs").classList.remove("hidden");
    document.getElementById("final-node").classList.remove("hidden");
    
    // Shift master background context configurations 
    document.body.classList.add("bg-phase-success");

    // Initiate sustained micro particle explosions
    let successConfettiInterval = setInterval(() => {
        if (forgivenessScore === 100) {
            generateHeartBurst();
        } else {
            clearInterval(successConfettiInterval);
        }
    }, 400);

    // Auto terminate active interval structures after safety limit margins reached
    setTimeout(() => {
        clearInterval(successConfettiInterval);
    }, 12000);
}

function openFinalEnvelope() {
    openPopup("popup-final");
}

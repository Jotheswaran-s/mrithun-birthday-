// ===== GLOBAL VARIABLES =====
const theatreIntro = document.getElementById('theatre-intro');
const mainContent = document.getElementById('main-content');
const musicToggle = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const emotionalMusic = document.getElementById('emotional-music');
const firecrackerBtn = document.getElementById('firecracker-btn');
const fireworksContainer = document.getElementById('fireworks-container');
const number18Container = document.getElementById('number-18-container');
const unlockBtn = document.getElementById('unlock-btn');
const secretMessage = document.getElementById('secret-message');
const passwordModal = document.getElementById('password-modal');
const passwordInput = document.getElementById('password-input');
const submitPassword = document.getElementById('submit-password');
const cancelPassword = document.getElementById('cancel-password');
const passwordError = document.getElementById('password-error');
const progressBar = document.getElementById('progress-bar');
const progressNumber = document.getElementById('progress-number');

let musicPlaying = false;
let currentMusic = 'bg';
const correctPassword = 'Mrithun18';

// ===== THEATRE INTRO SEQUENCE =====
window.addEventListener('load', () => {
    // Create fire sparks
    createFireSparks();

    // Create confetti after mass entry
    setTimeout(() => {
        createConfetti();
    }, 4500);

    // Hide intro and show main content
    setTimeout(() => {
        theatreIntro.classList.add('hidden');
        setTimeout(() => {
            theatreIntro.style.display = 'none';
        }, 1000);
    }, 7000);

    // Animate quote cards with stagger
    setTimeout(() => {
        animateQuoteCards();
    }, 7500);

    // Start particle animation
    createFloatingParticles();
});

// ===== GOLDEN PARTICLES INTRO =====
function createGoldenParticlesIntro() {
    const particlesIntro = document.querySelector('.golden-particles-intro');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 6 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = '#FFD700';
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.boxShadow = '0 0 10px #FFD700';
        particle.style.animation = `particleFloatIntro ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particlesIntro.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloatIntro {
            0%, 100% { transform: translate(0, 0); opacity: 0.3; }
            50% { transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// ===== PROGRESS BAR ANIMATION =====
function animateProgressBar() {
    let count = 0;
    const target = 18;
    const duration = 3000; // 3 seconds
    const increment = target / (duration / 50); // Update every 50ms

    const counter = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(counter);
        }
        progressNumber.textContent = Math.floor(count);
    }, 50);
}

// ===== FIRE SPARKS ANIMATION =====
function createFireSparks() {
    const sparksContainer = document.querySelector('.fire-sparks');
    const sparkCount = 50;

    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.style.position = 'absolute';
        spark.style.width = '4px';
        spark.style.height = '4px';
        spark.style.background = i % 2 === 0 ? '#FFD700' : '#FF4500';
        spark.style.borderRadius = '50%';
        spark.style.left = `${50 + (Math.random() - 0.5) * 60}%`;
        spark.style.top = `${50 + (Math.random() - 0.5) * 60}%`;
        spark.style.boxShadow = `0 0 10px ${i % 2 === 0 ? '#FFD700' : '#FF4500'}`;
        spark.style.animation = `sparkBurst ${0.5 + Math.random() * 0.5}s ease-out forwards`;
        spark.style.animationDelay = `${4.5 + Math.random() * 0.3}s`;
        sparksContainer.appendChild(spark);
    }

    // Add spark burst animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkBurst {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== CONFETTI ANIMATION =====
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const confettiCount = 100;
    const colors = ['#FFD700', '#FF4500', '#FFF8DC', '#B8860B'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-10%';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `confettiFall ${2 + Math.random() * 3}s linear forwards`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confettiContainer.appendChild(confetti);
    }

    // Add confetti fall animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(120vh) rotate(${Math.random() * 720}deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== MUSIC TOGGLE =====
musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        if (currentMusic === 'bg') {
            bgMusic.pause();
        } else {
            emotionalMusic.pause();
        }
        musicToggle.classList.add('muted');
        musicPlaying = false;
    } else {
        if (currentMusic === 'bg') {
            bgMusic.play().catch(err => {
                console.log('Audio play failed:', err);
            });
        } else {
            emotionalMusic.play().catch(err => {
                console.log('Audio play failed:', err);
            });
        }
        musicToggle.classList.remove('muted');
        musicPlaying = true;
    }
});

// Auto-play attempt with gentle fade in (may be blocked by browser)
setTimeout(() => {
    bgMusic.volume = 0.3; // Start with lower volume
    bgMusic.play().catch(err => {
        console.log('Auto-play blocked. User interaction required.');
    });
    musicPlaying = true;
}, 1000);

// Increase volume slightly during mass entry
setTimeout(() => {
    if (musicPlaying && currentMusic === 'bg') {
        bgMusic.volume = 0.5;
    }
}, 4000);

// Switch to emotional music function
function switchToEmotionalMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        emotionalMusic.volume = 0.3;
        emotionalMusic.play().catch(err => {
            console.log('Emotional music play failed:', err);
        });
        currentMusic = 'emotional';
    }
}

// ===== QUOTE CARDS ANIMATION =====
function animateQuoteCards() {
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach((card, index) => {
        const delay = parseInt(card.dataset.delay) || 0;
        setTimeout(() => {
            card.style.animationDelay = '0s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, delay);
    });
}

// ===== FLOATING PARTICLES =====
function createFloatingParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = '#FFD700';
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${100 + Math.random() * 20}%`;
        particle.style.boxShadow = '0 0 5px #FFD700';
        particle.style.animation = `particleFloat ${15 + Math.random() * 10}s linear infinite`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

// ===== FIRECRACKER BUTTON =====
firecrackerBtn.addEventListener('click', () => {
    // Add flash effect
    fireworksContainer.classList.add('active');

    // Create fireworks
    createFireworks();

    // Create confetti rain
    createConfettiRain();

    // Play crowd cheering sound (simulated with visual feedback)
    firecrackerBtn.textContent = '🎉 CELEBRATION MODE 🎉';
    firecrackerBtn.style.animation = 'pulse 0.5s ease infinite';

    // Remove flash after 3 seconds
    setTimeout(() => {
        fireworksContainer.classList.remove('active');
        firecrackerBtn.textContent = 'Start the Celebration 🎉';
        firecrackerBtn.style.animation = '';
    }, 5000);
});

// ===== FIREWORKS CREATION =====
function createFireworks() {
    const colors = ['#FFD700', '#FF4500', '#FFF8DC', '#B8860B', '#FF6347'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight * 0.7;

            firework.style.position = 'absolute';
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;
            firework.style.width = '10px';
            firework.style.height = '10px';

            fireworksContainer.appendChild(firework);

            // Create explosion particles
            for (let j = 0; j < 30; j++) {
                const particle = document.createElement('div');
                const angle = (Math.PI * 2 * j) / 30;
                const velocity = 50 + Math.random() * 50;
                const color = colors[Math.floor(Math.random() * colors.length)];

                particle.style.position = 'absolute';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = color;
                particle.style.borderRadius = '50%';
                particle.style.boxShadow = `0 0 10px ${color}`;
                particle.style.left = '0';
                particle.style.top = '0';

                const dx = Math.cos(angle) * velocity;
                const dy = Math.sin(angle) * velocity;

                particle.style.animation = `fireworkParticle 1s ease-out forwards`;
                particle.style.setProperty('--dx', `${dx}px`);
                particle.style.setProperty('--dy', `${dy}px`);

                firework.appendChild(particle);
            }

            // Remove firework after animation
            setTimeout(() => {
                firework.remove();
            }, 1500);
        }, i * 300);
    }

    // Add firework particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fireworkParticle {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: translate(var(--dx), var(--dy));
                opacity: 0;
            }
        }
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `;
    if (!document.querySelector('#firework-styles')) {
        style.id = 'firework-styles';
        document.head.appendChild(style);
    }
}

// ===== CONFETTI RAIN =====
function createConfettiRain() {
    const confettiCount = 150;
    const colors = ['#FFD700', '#FF4500', '#FFF8DC', '#B8860B'];

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.top = '-10px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
            fireworksContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 20);
    }
}

// ===== SECRET MESSAGE UNLOCK =====
unlockBtn.addEventListener('click', () => {
    passwordModal.classList.remove('hidden');
    passwordInput.value = '';
    passwordError.classList.add('hidden');
    setTimeout(() => {
        passwordInput.focus();
    }, 100);
});

// Submit password
submitPassword.addEventListener('click', checkPassword);

// Enter key to submit
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Cancel button
cancelPassword.addEventListener('click', () => {
    passwordModal.classList.add('hidden');
});

// Check password function
function checkPassword() {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Correct password
        passwordModal.classList.add('hidden');
        secretMessage.classList.remove('hidden');
        secretMessage.classList.add('revealed');

        // Hide unlock button
        unlockBtn.style.display = 'none';

        // Play soft background music effect (visual feedback)
        secretMessage.style.animation = 'messageGlow 2s ease infinite';
    } else {
        // Incorrect password
        passwordError.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.style.animation = 'shake 0.5s ease';

        setTimeout(() => {
            passwordInput.style.animation = '';
        }, 500);
    }
}

// Shake animation for wrong password
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
setTimeout(() => {
    document.querySelectorAll('.logo-section, .quotes-section, .celebration-section, .secret-section').forEach(section => {
        observer.observe(section);
    });
}, 7000);

// ===== CONSOLE EASTER EGG =====
console.log('%c🔥 MRITHUN - 18 🔥', 'font-size: 30px; font-weight: bold; color: #FFD700; text-shadow: 0 0 10px #FFD700;');
console.log('%cHappy 18th Birthday Legend! 👑', 'font-size: 20px; color: #FF4500;');
console.log('%cLevel 18 Unlocked! 🔓', 'font-size: 16px; color: #FFD700;');
console.log('%cMade with ❤️ for the Legend at 18', 'font-size: 14px; color: #FFD700;');

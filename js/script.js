let scrollTimeout;
let isSnapping = false;
let isScrolling = false;
const SCROLL_DELAY = 200;

function snapToNearestCard() {
    if (isSnapping || isScrolling) return;
    
    const cards = document.querySelectorAll('.card');
    const scrollPosition = window.scrollY + 30;
    
    let closestCard = null;
    let minDistance = Infinity;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        const distance = Math.abs(scrollPosition - cardTop);
        
        if (distance < minDistance) {
            minDistance = distance;
            closestCard = card;
        }
    });
    
    if (closestCard && minDistance > 5) {
        isSnapping = true;
        const targetPosition = closestCard.getBoundingClientRect().top + window.scrollY - 30;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            isSnapping = false;
        }, 500);
    }
}

window.addEventListener('mousedown', (e) => {
    if (e.target === document.documentElement || e.target === document.body) {
        isScrolling = true;
    }
});

window.addEventListener('mouseup', () => {
    isScrolling = false;
    setTimeout(snapToNearestCard, SCROLL_DELAY);
});

window.addEventListener('scroll', () => {
    if (isSnapping) return;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(snapToNearestCard, SCROLL_DELAY);
});

document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetCard = document.querySelector(targetId);
        
        if (targetCard) {
            isSnapping = true;
            const targetPosition = targetCard.getBoundingClientRect().top + window.scrollY - 30;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                isSnapping = false;
            }, 500);
        }
    });
});

const roles = ['IT nadšenec', 'Junior', 'Programátor stážista'];
let currentRoleIndex = 0;
let currentText = '';
let isDeleting = false;
let charIndex = 0;

function typeWriter() {
    const typingElement = document.getElementById('typing-text');
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting) {
        currentText = currentRole.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeWriter, 10000);
            typingElement.textContent = currentText;
            return;
        }
    } else {
        currentText = currentRole.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeWriter, 500);
            typingElement.textContent = currentText;
            return;
        }
    }
    
    typingElement.textContent = currentText;
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingSpeed);
}

typeWriter();

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

document.getElementById('focus-toggle').addEventListener('click', () => {
    document.body.classList.toggle('focus-mode');
});

document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.body.classList.toggle('sidebar-collapsed');
});
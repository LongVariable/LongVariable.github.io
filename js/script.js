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

document.getElementById('copy-email-btn').addEventListener('click', () => {
    const emailText = document.querySelector('.email-address').textContent;
    const copyBtn = document.getElementById('copy-email-btn');
    
    navigator.clipboard.writeText(emailText).then(() => {
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const tags = card.getAttribute('data-tags');
                    if (tags && tags.includes(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});
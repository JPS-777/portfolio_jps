function toggleMobileMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.nav-menu').classList.toggle('active');
}
function closeMobileMenu() {
    document.querySelector('.hamburger').classList.remove('active');
    document.querySelector('.nav-menu').classList.remove('active');
}
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});
function openContactModal() { document.getElementById('contactModal').style.display = 'block'; }
function closeContactModal() { document.getElementById('contactModal').style.display = 'none'; }
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) closeContactModal();
}
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(function() {
        const button = element.querySelector('.copy-btn');
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copy-success');
        setTimeout(function() { button.textContent = originalText; button.classList.remove('copy-success'); }, 2000);
    }).catch(function() {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        const button = element.querySelector('.copy-btn');
        button.textContent = 'Copied!';
        button.classList.add('copy-success');
        setTimeout(function() { button.textContent = 'Copy'; button.classList.remove('copy-success'); }, 2000);
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.style.animation = 'fadeInUp 0.6s ease forwards'; });
}, { threshold: 0.5, rootMargin: '0px 0px -100px 0px' });
document.querySelectorAll('.stat-item').forEach(item => observer.observe(item));
const title = document.querySelector('.header h1');
if (title) {
    const text = title.textContent;
    title.textContent = '';
    let index = 0;
    const typeWriter = () => { if (index < text.length) { title.textContent += text.charAt(index); index++; setTimeout(typeWriter, 100); } };
    setTimeout(typeWriter, 500);
}
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            backToTopButton.classList.toggle('show', window.pageYOffset > 300);
        });
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
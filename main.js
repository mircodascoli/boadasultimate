document.addEventListener("DOMContentLoaded", function () {
    // Animazione per gli elementi testimonial
    const testimonials = document.querySelectorAll('.testimonial');

    // Definisci l'osservatore per rilevare quando gli elementi testimonial entrano nel viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando l'elemento testimonial è visibile, aggiungi le classi di animazione
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                // Smetti di osservare l'elemento una volta animato
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    // Attiva l'osservatore su ciascun testimonial
    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
    });

    // Animazione per gli elementi seccion-carta
    const sections = document.querySelectorAll('.seccion-carta');

    sections.forEach(section => {
        section.addEventListener('click', function () {
            const h3 = this.querySelector('h3');
            const p = this.querySelector('p');

            // Aggiungi l'animazione di fade out su h3
            h3.classList.add('animate__animated', 'animate__fadeOut');
            
            // Quando l'animazione di fade out finisce, mostra il paragrafo
            h3.addEventListener('animationend', function () {
                h3.style.display = 'none';  // Nascondi l'h3 dopo il fade out
                p.style.display = 'block';  // Mostra il paragrafo
                p.classList.add('animate__animated', 'animate__fadeIn');  // Aggiungi animazione di fade in
            }, { once: true });
        });
    });
});
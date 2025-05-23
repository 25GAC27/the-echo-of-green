const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    },
    {
        threshold: 0.1,
    }
);

const aboutSection = document.querySelector('.about');
observer.observe(aboutSection);

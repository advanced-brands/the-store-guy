const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

// show portfolio link when user scrolls to bottom
const portfolioLink = document.getElementById('portfolio-link');

function checkScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
        portfolioLink.classList.add('visible');
    } else {
        portfolioLink.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkScroll);
// run once in case page already at bottom on load
checkScroll();
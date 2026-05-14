const counters = document.querySelectorAll(".counter"); 

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    }; 

    updateCounter()
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target)
       }
   })
})

counters.forEach(counter => {
    observer.observe(counter);
})
// Scroll to top button appear
document.addEventListener('scroll', function() {
    var scrollDistance = window.scrollY;

    // Assuming you have a scroll-to-top element with the class 'scroll-to-top'
    var scrollToTopButton = document.querySelector('.scroll-to-top');

    if (scrollDistance > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Smooth scrolling
document.addEventListener('click', function(e) {
    // Check if the clicked element is an anchor tag with the class 'scroll-to-top'
    if (e.target.tagName === 'A' && e.target.classList.contains('scroll-to-top')) {
        console.log(e.target)
        e.preventDefault();

        var anchor = e.target;
        var targetElement = document.querySelector(anchor.getAttribute('href'));

        if (targetElement) {
            // Scroll smoothly to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

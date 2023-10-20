const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
    header.addEventListener('click', (e) => {
        e.target.classList.toggle('active')
        header.nextElementSibling.classList.toggle('active');
    });
});
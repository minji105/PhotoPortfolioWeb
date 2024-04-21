const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const h2 = slider.closest('.proj').querySelector('h2');

    slider.addEventListener('mouseover', function () {
        h2.style.opacity = '1';
    })

    slider.addEventListener('mouseout', function () {
        h2.style.opacity = '0';
    })
})
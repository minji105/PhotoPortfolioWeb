const name_logo=document.getElementById('name');
const textElement = document.getElementById('text');
const bottom_arrow = document.getElementById('bottom-arrow');

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    
    name_logo.style.transform=`translateY(${scrollY * 0.9}px)`;

    textElement.style.opacity = 1 - (scrollY / window.innerHeight)*3;
    bottom_arrow.style.opacity = 1-(scrollY/window.innerHeight)*10;
})
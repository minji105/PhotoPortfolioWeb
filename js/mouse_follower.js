document.addEventListener("DOMContentLoaded", function () {
    const cursor_follower = document.querySelector(".cursor");
    let cursorX = 0;
    let cursorY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const speed = 0.5; // 움직임의 속도

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * speed;
        cursorY += dy * speed;

        cursor_follower.style.left = cursorX -10 + "px";
        cursor_follower.style.top = cursorY -10+ "px";

        requestAnimationFrame(animateCursor);
    }

    document.addEventListener("mousemove", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY + window.scrollY;
    });

    animateCursor(); // 애니메이션 시작
});

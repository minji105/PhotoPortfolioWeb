let lastScrollTop = 0;
    const scrollThresholdHide = 400; // 바가 숨겨지는 스크롤 임계값
    const scrollThresholdShow = 0; // 바가 다시 보이는 스크롤 임계값

    window.addEventListener("scroll", function () {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if ((Math.abs(currentScroll - lastScrollTop) > scrollThresholdHide) && (currentScroll > lastScrollTop)) {
            document.querySelector("nav").style.transform = "translateY(-200%)";
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        } else if ((currentScroll - lastScrollTop) < -scrollThresholdShow) {
            document.querySelector("nav").style.transform = "translateY(0)";
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }
    }, false);

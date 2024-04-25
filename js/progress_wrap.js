document.addEventListener('DOMContentLoaded', function () {
    const progressPath = document.querySelector('.progress-wrap path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    const updateProgress = function () {
        const scroll = window.pageYOffset || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    const offset = 50;
    const duration = 550;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > offset) {
            document.querySelector('.progress-wrap').classList.add('active-progress');
        } else {
            document.querySelector('.progress-wrap').classList.remove('active-progress');
        }
    });

    document.querySelector('.progress-wrap').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

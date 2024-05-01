var modal = document.getElementById("img-modal");
var modalImg = document.getElementById("modal-img");
var images = document.querySelectorAll(".container img");
var span = document.getElementsByClassName("close")[0];
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

var currentImageIndex = 0;

const fixedItems = document.getElementsByClassName('fixed-items')[0];

images.forEach(function (image, index) {
    image.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        currentImageIndex = index;

        fixedItems.style.pointerEvents = 'none';
        document.body.style.overflowY = 'hidden';
    });
});

span.onclick = function () {
    modal.style.display = "none";

    fixedItems.style.pointerEvents = 'all';
    document.body.style.overflowY = 'scroll';
}

// 이전 이미지 보기
prevBtn.onclick = function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    modalImg.src = images[currentImageIndex].src;
}

// 다음 이미지 보기
nextBtn.onclick = function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    modalImg.src = images[currentImageIndex].src;
}
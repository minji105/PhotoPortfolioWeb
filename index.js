// 클릭 시 화면 전환
const contactButton = document.getElementById('contact-button');
const logoButton = document.getElementById('logo');

const contactContainer = document.getElementById('contact-container');
const mainContainer = document.getElementById('main-container');

contactButton.addEventListener('click', function () {

    contactContainer.style.display = 'flex';
    mainContainer.style.opacity = '0';

    setTimeout(() => {
        mainContainer.style.display = 'none';
        contactContainer.style.opacity = '1';
        contactContainer.style.transition = 'opacity 0.7s ease-in-out';
    }, 500)
})

logoButton.addEventListener('click', function () {

    mainContainer.style.display = 'flex';
    contactContainer.style.opacity = '0';

    setTimeout(() => {
        contactContainer.style.display = 'none';
        mainContainer.style.opacity = '1';
        mainContainer.style.transition = 'opacity 0.7s ease-in-out';
    }, 500);
})

// 클릭 시 클립보드 복사 & 텍스트 바꿈
function copyClipboard() {
    const text = document.getElementById('text').textContent;
    const textarea = document.createElement('textarea');
    textarea.textContent = text;

    document.body.append(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
}

const text = document.getElementById('text');
const hover_text = document.getElementById('hover-text');
const change_text = document.getElementById('change-text');

text.addEventListener('click', copyClipboard);

text.addEventListener('mouseover', function () {
    hover_text.style.opacity = '1';
})

text.addEventListener('mouseout', function () {
    hover_text.style.opacity = '0';
    change_text.style.opacity = '0';
})

text.addEventListener('click', function () {
    hover_text.style.opacity = '0';
    change_text.style.opacity = '1';
})
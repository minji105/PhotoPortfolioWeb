// 클릭 시 클립보드 복사 & 텍스트 바꿈
// function copyClipboard() {
//     const text = document.getElementById('text').textContent;
//     const textarea = document.createElement('textarea');
//     textarea.textContent = text;

//     document.body.append(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     textarea.remove();
// }

// const text = document.getElementById('text');
// const hover_text = document.getElementById('hover-text');
// const change_text = document.getElementById('change-text');

// text.addEventListener('click', copyClipboard);

// text.addEventListener('mouseover', function () {
//     hover_text.style.opacity = '1';
// })

// text.addEventListener('mouseout', function () {
//     hover_text.style.opacity = '0';
//     change_text.style.opacity = '0';
// })

// text.addEventListener('click', function () {
//     hover_text.style.opacity = '0';
//     change_text.style.opacity = '1';
// })


// menu icon

const menuContainer = document.getElementById('menu-container');
const bottom_bar = document.getElementsByClassName('bottom-bar')[0];

const blur_effect = document.getElementsByClassName('blur')[0];

const menuIcon = document.getElementsByClassName('menu-icon')[0];
const menu_top = document.getElementsByClassName('menu-top')[0];
const menu_middle = document.getElementsByClassName('menu-middle')[0];
const menu_bottom = document.getElementsByClassName('menu-bottom')[0];

const menuItems = document.querySelectorAll('#menu-container p');
const menuImg = document.getElementById('menu-img');

let isOpen = false

menuIcon.addEventListener('click', function () {
    if (!isOpen) {

        menu_top.style.transform = 'rotate(45deg)';
        menu_top.style.transition = '0.5s';

        menu_middle.style.opacity = '0';
        menu_middle.style.transition = '0.5s';

        menu_bottom.style.transform = 'rotate(135deg)';
        menu_bottom.style.transition = '0.5s';

        blur_effect.style.opacity = '1';
        blur_effect.style.transition = 'opacity 1s ease';
        menuContainer.style.display = 'flex';

        bottom_bar.style.transform = 'translateY(100px)';
        bottom_bar.style.transition = 'transform 1s ease';

        setTimeout(() => {
            menuContainer.classList.add('animate');

            // mainContainer.style.display = 'none';
            // footerContainer.style.display = 'none';

        }, 300);

        isOpen = true; // 열린 상태로 변경

    } else {
        isOpen = false; // 닫힌 상태로 변경

        menu_top.style.transform = '';
        menu_middle.style.opacity = '1';
        menu_bottom.style.transform = '';

        menuContainer.classList.remove('animate');

        bottom_bar.style.transform = 'translateY(0)';
        bottom_bar.style.transition = 'transform 1s ease';

        setTimeout(() => {
            blur_effect.style.opacity = '0';
            blur_effect.style.transition = 'opacity 1s ease';

            setTimeout(() => {
                menuContainer.style.display = 'none';
            }, 500);

        }, 300);
    }
})
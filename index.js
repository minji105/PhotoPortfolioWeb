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
const logoButton = document.getElementById('logo');

const mainContainer = document.getElementById('main-container');
const menuContainer = document.getElementById('menu-container');
const footerContainer = document.getElementById('footer-container');

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

        logoButton.style.opacity = '0';
        logoButton.style.pointerEvents = 'none';
        logoButton.style.transition = 'all 0.5s ease';

        mainContainer.style.opacity = '0';
        mainContainer.style.transition = 'opacity 0.5s ease-in-out';

        setTimeout(() => {
            menuContainer.style.display = 'flex';
            mainContainer.style.display = 'none';
            footerContainer.style.display = 'none';

            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate');
                }, index * 100 + 100);
            });

            setTimeout(() => {
                menuImg.classList.add('animate');
            }, 100);
        }, 300);

        isOpen = true; // 열린 상태로 변경

    } else {
        isOpen = false; // 닫힌 상태로 변경

        setTimeout(() => {
            menu_top.style.transform = '';
            menu_middle.style.opacity = '1';
            menu_bottom.style.transform = '';

            mainContainer.style.opacity = '1';

            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.remove('animate');
                }, (menuItems.length - index - 1) * 100);
            });

            setTimeout(() => {
                logoButton.style.opacity = '1';
                logoButton.style.pointerEvents = 'all';

                menuContainer.style.display = 'none';
                mainContainer.style.display = 'flex';
                footerContainer.style.display = 'flex';
            }, 500);

            menuImg.classList.remove('animate');
        }, 500);
    }
})
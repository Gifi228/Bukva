// Анимация появления логотипов при загрузке страницы
window.addEventListener('load', () => {
    const logos = document.querySelectorAll('.section__clients-logo img');
    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add('show');
        }, index * 200); // Логотипы появляются с интервалом в 200 мс
    });
});

// const btn = document.querySelector('#button');
// const menu = document.querySelector('#menu');

// btn.addEventListener('click', () => {
//     if (menu.classList.contains('disp') == true){
//         menu.classList.remove('disp')
//     } else {
//         menu.classList.add('disp')
//     }
// })
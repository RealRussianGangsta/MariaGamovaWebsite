// вставляем меню

document.querySelector('header').innerHTML = `<nav class="navigation">
        <div class="navigation_logo"><img src="" alt="" class="navigation_logo_img"></div>

        <div class="navigation_options">
            <div class="navigation_option"><a href="index.html">О нас</a></div>
            <div class="navigation_option"><a href="products.html">Группы и проекты</a></div>
            <div class="navigation_option"><a href="library.html">Библиотека</a></div>
            <div class="navigation_option"><a href="contacts.html">Контакты</a></div>
        </div>

        <button class="navigation_burger" aria-label="Открыть меню">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </button>

        <div class="side_menu">
            <ul>
                <li class="side_menu_elem"><a href="index.html">О нас</a></li>
                <li class="side_menu_elem"><a href="products.html">Группы и проекты</a></li>
                <li class="side_menu_elem"><a href="library.html">Библиотека</a></ li>
                <li class="side_menu_elem"><a href="contacts.html">Контакты</a></li>
             </ul>
        </div>
    </nav>`

// вставляем футер
document.querySelector('footer').innerHTML = `<div class="footer_top">
            <div class="footer_text">Текст1</div>
            <div class="footer_text">Текст2</div>
            <div class="footer_text">Текст3</div>
        </div>
        <div class="copyright">&copy;Lorem ipsum dolor sit amet.</div>`

// Обрабатываем нажатие на бургер
let burgerButton = document.querySelector('.navigation_burger')

document.body.addEventListener('click', closeSideMenu)

function closeSideMenu(e) {
    const burgerLines = document.querySelectorAll('.burger-line')
    for (elem of burgerLines) {
        if (elem === e.target) return
    }
    if (e.target !== burgerButton) {
        const sideMenu = document.querySelector('.side_menu');
        sideMenu.classList.remove('side_menu_open')
    }
}

burgerButton.addEventListener('click', openSideMenu)

function openSideMenu() {
    const sideMenu = document.querySelector('.side_menu');
    sideMenu.classList.toggle('side_menu_open')

}

// предотвратить всплытите на элементах, чтобы сделать нормальную кнопку
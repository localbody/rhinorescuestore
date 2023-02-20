import $ from 'jquery'
import 'slick-carousel'
import './header'

document.addEventListener('DOMContentLoaded', () => {
    $('.goods-content__slide-thumb').slick({
        asNavFor: '.goods-content__slide-big',
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    })

    $('.goods-content__slide-big').slick({
        asNavFor: '.goods-content__slide-thumb',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1">
            <g id="surface1">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 27.578125 35.15625 C 27.265625 35.15625 26.96875 35.03125 26.75 34.8125 L 12.304688 20.367188 C 11.847656 19.910156 11.847656 19.167969 12.304688 18.710938 L 26.75 4.265625 C 27.207031 3.808594 27.949219 3.808594 28.40625 4.265625 C 28.863281 4.722656 28.863281 5.464844 28.40625 5.921875 L 14.789062 19.539062 L 28.40625 33.15625 C 28.742188 33.492188 28.84375 33.996094 28.660156 34.433594 C 28.480469 34.871094 28.050781 35.15625 27.578125 35.15625 Z M 27.578125 35.15625 "/>
            </g>
            </svg>
            </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1">
            <g id="surface1">
            <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 15.789062 35.15625 C 15.316406 35.15625 14.886719 34.871094 14.707031 34.433594 C 14.523438 33.996094 14.625 33.492188 14.960938 33.15625 L 28.578125 19.539062 L 14.960938 5.921875 C 14.515625 5.460938 14.523438 4.730469 14.976562 4.28125 C 15.425781 3.828125 16.15625 3.820312 16.617188 4.265625 L 31.0625 18.710938 C 31.519531 19.167969 31.519531 19.910156 31.0625 20.367188 L 16.617188 34.8125 C 16.398438 35.03125 16.101562 35.15625 15.789062 35.15625 Z M 15.789062 35.15625 "/>
            </g>
            </svg></button>`,
    })

    //drop menu slider
    let headerInner = document.querySelector('.header__inner')
    let dropMenuKits = document.querySelector('.drop__menu-kits')
    let dropMenuPack = document.querySelector('.drop__menu-pack')
    let menuLinkKits = document.querySelector('.menu__link-kits')
    let menuLinkPack = document.querySelector('.menu__link-pack')

    headerInner.addEventListener('mouseover', function (e) {
        let target = e.target

        if (target.classList.contains('menu__link-kits')) {
            dropMenuPack.classList.remove('menu--active')
            dropMenuKits.classList.add('menu--active')
        }
        if (target.classList.contains('menu__link-pack')) {
            dropMenuKits.classList.remove('menu--active')
            dropMenuPack.classList.add('menu--active')
        }
    })

    document.addEventListener('click', function (e) {
        const target = e.target
        const its_menu = target == dropMenuKits || dropMenuKits.contains(target)
        const its_btnMenu = target == menuLinkKits
        const menu_is_active = dropMenuKits.classList.contains('menu--active')

        if (!its_menu && !its_btnMenu && menu_is_active) {
            dropMenuKits.classList.toggle('menu--active')
        }
    })

    document.addEventListener('click', function (e) {
        const target = e.target
        const its_menu = target == dropMenuPack || dropMenuPack.contains(target)
        const its_btnMenu = target == menuLinkPack
        const menu_is_active = dropMenuPack.classList.contains('menu--active')

        if (!its_menu && !its_btnMenu && menu_is_active) {
            dropMenuPack.classList.toggle('menu--active')
        }
    })

    /* document.addEventListener('click', removeElement('.drop__menu-pack', '.menu__link-pack'));
       document.addEventListener('click', removeElement('.drop__menu-kits', '.menu__link-kits'));

       function removeElement(menu, link) {
           const target = e.target;
           const its_menu = target == menu || menu.contains(target);
           const its_btnMenu = target == link;
           const menu_is_active = menu.classList.contains("menu--active");

           if (!its_menu && !its_btnMenu && menu_is_active) {
           }
       } */

    //search
    const serchLink = document.querySelector('.user-nav__link-search')
    const serchPopup = document.querySelector('.serch-popup')
    const serchClose = document.querySelector('.serch-popup-close')

    serchLink.addEventListener('click', function (e) {
        e.preventDefault()
        serchPopup.classList.add('serch-popup--active')
    })

    serchClose.addEventListener('click', function (e) {
        serchPopup.classList.remove('serch-popup--active')
    })

    //btn
    let bestSalesBtn = document.querySelectorAll('.app-best-sales__btn')
    let closebestSalesProductItem = document.querySelectorAll(
        '.best-sales__product-item-close'
    )

    bestSalesBtn.forEach((item) =>
        item.addEventListener('click', function () {
            let product = this.nextElementSibling
            product.classList.toggle('best-sales__product-item--active')
        })
    )

    closebestSalesProductItem.forEach((item) =>
        item.addEventListener('click', function (e) {
            let product = this.parentNode
            product.classList.remove('best-sales__product-item--active')
        })
    )

    //header change
    /*     let logoLink = document.querySelector('.logo__link')
        let menuLink = document.querySelectorAll('.menu__link')
        let userNavLink = document.querySelectorAll('.user-nav__link');

        window.addEventListener('scroll', function () {
            if (window.scrollY > 1) {
                headerInner.classList.add('header__inner--active');
                logoLink.classList.remove('logo__link');
                logoLink.classList.add('logo__link--active');
                menuLink.forEach(item => {
                    item.classList.add('menu__link--active');
                })
                userNavLink.forEach(item => {
                    item.classList.add('user-nav__link--active');
                })
            } else if (window.scrollY < 1) {
                headerInner.classList.remove('header__inner--active');
                logoLink.classList.add('logo__link');
                logoLink.classList.remove('logo__link--active');
                menuLink.forEach(item => {
                    item.classList.remove('menu__link--active');
                })
                userNavLink.forEach(item => {
                    item.classList.remove('user-nav__link--active');
                })
            }
        }); */

    //mobile-menu
    /*     const menuOpenBtn = document.querySelector('.menu__burger');
        const menuList = document.querySelector('.menu__list');
        const menuCloseBtn = document.querySelector('.nav__close');

        menuOpenBtn.addEventListener('click', function () {
            menuList.classList.add('menu__list--active');
            menuCloseBtn.classList.add('nav__close--active');
            document.body.style.overflow = 'hidden';
        });

        menuCloseBtn.addEventListener('click', function () {
            menuList.classList.remove('menu__list--active');
            this.classList.remove('nav__close--active');
            document.body.style.overflow = '';
        });
     */
    //accordion
    function accordeon(triggersSelector) {
        const btns = document.querySelectorAll(triggersSelector)

        btns.forEach((item) => {
            item.addEventListener('click', function () {
                this.classList.toggle('active-style')
                this.nextElementSibling.classList.toggle('active-content')

                if (this.classList.contains('active-style')) {
                    this.nextElementSibling.style.maxHeight =
                        this.nextElementSibling.scrollHeight + 80 + 'px'
                } else {
                    this.nextElementSibling.style.maxHeight = '0px'
                }
            })
        })
    }

    accordeon('.footer__title')

    //rating
    let ratingList = document.querySelectorAll('.rating__item')
    let ratingArray = Array.prototype.slice.call(ratingList)

    ratingArray.forEach((item) => {
        item.addEventListener('click', () => {
            const {itemValue} = item.dataset
            item.parentNode.dataset.totalValue = item.dataset.itemValue
        })
    })
})

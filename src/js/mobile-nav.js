const burger = document.querySelector('button.burger');
const mobileNav = document.querySelector('.dropdown-content');
let clickInButton = 0;

const dropdownMenuMobile = () => {
    if (clickInButton % 2 == 0) {
        mobileNav.style = 'display: block';
    } else {
        mobileNav.style = 'display: none;';
    }
    clickInButton++;
}

burger.addEventListener('click', dropdownMenuMobile)
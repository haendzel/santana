const burger = document.querySelector('button.burger');
const mobileNav = document.querySelector('.dropdown-content');

const dropdownMenuMobile = () => {
    let aria = burger.getAttribute("aria-expanded");
    if (aria === "true") {
        mobileNav.style.display = "none";
        burger.classList.remove('show');
        aria = "false";
    } else {
        aria = "true";
        mobileNav.style.display = "block";
        burger.classList.add('show');
    }
    burger.setAttribute("aria-expanded", aria);
}

burger.addEventListener('click', dropdownMenuMobile)
const btn = document.querySelector('.nav-lang');
const contentDropdown = document.querySelector('.dropdown-lang')
let click = 0;

const dropdown = () => {
    if (click % 2 == 0) {
        contentDropdown.style = 'display: block';
    } else {
        contentDropdown.style = 'display: none;';
    }
    click++;
}

btn.addEventListener('click', dropdown)
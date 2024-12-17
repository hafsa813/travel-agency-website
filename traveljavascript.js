Array.from(document.getElementsByTagName('input')).forEach((m, h) => {
    m.addEventListener('keyup', (el) => {
        if (m.value.length > 0) {
            document.getElementsByClassName(' bi-caret-down-fill')[h].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName(' bi-caret-down-fill')[h].style.transform = "rotate(0deg)";
        }
    });
});
let menu_btn = document.getElementsByClassName('bi-caret-down-fill')[0];
let menu_bx = document.getElementById('menu_bx');
menu_btn.addEventListener('click',()=>{
    menu_bx.classList.toggle('ul_active');

})

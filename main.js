const navMenu=document.getElementById('nav_menu');
const navToggle=document.getElementById('nav_toogle');
const navClose=document.getElementById('nav_close');
const navLink=document.getElementsByClassName('nav_link');
// ==============SHOW MENU ======================
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
// ==============HIDE MENU=======================

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// =============ON LINK CLICK REMOVE MENU========
const linkAction=()=>{
    navMenu.classList.remove('show-menu')
}



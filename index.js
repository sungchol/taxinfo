//menu button
const menulist = document.getElementById("menulist");
const submenu = document.querySelector(".submenu");
const submenuContainer = document.querySelector(".submenu-container");
const content = document.querySelector(".content");
let isOpen = false;

//팝업메뉴 열고 닫기
function menuOpen() {
    if(!isOpen)
    {
        submenuContainer.style.display = "initial";
        isOpen = true;
    }
    else {
        submenuContainer.style.display = "none";
        isOpen = false;
    }
}

submenu.addEventListener("click", (e) => {
    if(window.innerWidth <= 700){
        // console.log("click : " + e.target);
        menuOpen();
    }
}, false);

content.addEventListener("click", (e) => {
    if(window.innerWidth <= 700 && isOpen){
        console.log("containerclick : " + e);
        submenuContainer.style.display = "none";
        isOpen = false;
    }
}, false);
// function getOffset( el ) {
//     let _x = 0;
//     let _y = 0;
//     while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//           _x += el.offsetLeft - el.scrollLeft;
//           _y += el.offsetTop - el.scrollTop;
//           el = el.offsetParent;
//     }
//     return { top: _y, left: _x };
// }

menulist.onclick = function () {
    
    // let menuPosX = getOffset(menulist).left -5;
    let menuPosX = menulist.getBoundingClientRect().left - 5;
    if(menuPosX<7) menuPosX = 7;

    if(!isOpen)
    {
        submenuContainer.style.display = "initial";
        submenu.style.left = (menuPosX)+"px";
        isOpen = true;
        console.log(menuPosX);
        
    }
    else {
        submenuContainer.removeAttribute("style");
        submenu.removeAttribute("style");
        isOpen = false;
        
    }
};


submenu.onmouseover = function() {
    if(window.innerWidth <= 700)
    {
        submenuContainer.style.display = "initial";
        isOpen= true;
    }
}

submenu.onmouseout = function() {
    if(window.innerWidth <= 700) {
        submenuContainer.removeAttribute("style");
        isOpen = false;
    }
}


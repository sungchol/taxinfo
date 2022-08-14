"use strict"

//menu button
const menulist = document.getElementById("menulist");
const popupmenu = document.querySelector(".popupmenu");
const content = document.querySelector(".content");

const submenuContainer = document.querySelector(".submenu-container");
const submenu = document.querySelector(".submenu");

const bigWindow = 800;
// popupmenu 상태저장
let isPopup = false;
let menuPosX = 0;
let menuHeight = 300;
let contentHeight = content.getBoundingClientRect().height;

//팝업메뉴 열고 닫기
function menuOpen(open) {
    if(open)
    {
        submenuContainer.style.display = "block";
        submenuContainer.style.left = (menuPosX)+"px";
        submenu.style.height = menuHeight.toString() + "px"; 
        isPopup = true;
    }
    else {
        submenuContainer.removeAttribute("style"); //.display = "none";
        //.submenuContainer.style.left = "0";
        isPopup = false;
    }
}

submenuContainer.addEventListener("click", () => {
    //팝업메뉴가 열려있을 때 팝업메뉴 클릭시 닫기
    console.log(submenuContainer.childNodes.values());
    if(isPopup)  {
        menuOpen(false);    
    }
}, false);

content.addEventListener("click", () => {
    menuOpen(false); 
}, false);

menulist.onclick = function () {
    
    menuPosX = menulist.getBoundingClientRect().left + 5;
    menuPosX = menuPosX<5 ? 5: menuPosX;
    // console.log("menulist clicked Height: " + window.innerHeight);
    menuHeight = window.innerHeight - 50;
    // if(menuHeight > 600) menuHeight = 600;
    isPopup = !isPopup;
    menuOpen(isPopup);
};

//if popup is opened, keep it opened
submenuContainer.onmouseover = function() {
    if(window.innerWidth < bigWindow){
        if(!isPopup) {
            menuOpen(true);
        }
    }
}

//if mouse is outside of popup, close popup menu
submenu.onmouseout = function() {
    if(window.innerWidth < bigWindow){
        if(isPopup) {
            menuOpen(false);
        }
    }
}

function openSubmenu(item)
{
    console.log(item);
    const menu = document.getElementById(item);
    menu.classList.toggle('active');
}

ScrollOut();


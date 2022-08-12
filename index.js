"use strict"

//menu button
const menulist = document.getElementById("menulist");
const popupmenu = document.querySelector(".popupmenu");
const content = document.querySelector(".content");

// const bigWindow = 780;
// popupmenu 상태저장
let isPopup = false;
let menuPosX = 0;
let menuHeight = 300;

//팝업메뉴 열고 닫기
function menuOpen(open) {
    if(open)
    {
        popupmenu.style.display = "block";
        popupmenu.style.left = (menuPosX)+"px";
        popupmenu.style.height = menuHeight.toString() + "px"; 
        isPopup = true;
    }
    else {
        popupmenu.style.display = "none";
        isPopup = false;
    }
}

popupmenu.addEventListener("click", () => {
    //팝업메뉴가 열려있을 때 팝업메뉴 클릭시 닫기
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
    if(menuHeight > 600) menuHeight = 600;
    isPopup = !isPopup;
    menuOpen(isPopup);
};

//if popup is opened, keep it opened
popupmenu.onmouseover = function() {
    if(!isPopup) {
        menuOpen(true);
    }
}

//if mouse is outside of popup, close popup menu
popupmenu.onmouseout = function() {
    if(isPopup) {
        menuOpen(false);
    }
}
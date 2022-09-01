"use strict";

//body
const myView = document.querySelector("html");

//menu button
const menulist = document.getElementById("menulist");
const popupmenu = document.querySelector(".popupmenu");
const content = document.querySelector(".content");

const submenuContainer = document.querySelector(".submenu-container");
const submenu = document.querySelector(".submenu");

const bigWindow = 800;

const itemOpens = new Array();
for (let i = 0; i < 5; i++) {
  itemOpens.push(document.querySelector(`#item-open${i + 1}`));
}
const items = new Array();
for (let i = 0; i < 5; i++) {
  items.push(document.querySelector(`#item${i + 1}`));
}

// popupmenu 상태저장
let isPopup = false;
let menuPosX = 0;
let menuHeight = 300;
let contentHeight = content.getBoundingClientRect().height;
const links = submenu.querySelectorAll("li a");
const linklists = [];
links.forEach((item) => linklists.push(item));

//팝업메뉴 열고 닫기
function menuOpen(open) {
  if (open) {
    submenuContainer.style.display = "block";
    submenuContainer.style.left = menuPosX + "px";
    submenu.style.height = menuHeight.toString() + "px";
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      myView.style = "overflow: hidden;";
    } else {
      myView.style = "overflow: hidden; width: calc(100% - 18px);";
    }
    isPopup = true;
  } else {
    submenuContainer.removeAttribute("style"); //.display = "none";
    //.submenuContainer.style.left = "0";
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      myView.style = "overflow: auto;";
    } else {
      myView.style = "overflow: scroll; width: 100%;";
    }
    isPopup = false;
  }
}

submenuContainer.addEventListener(
  "click",
  (e) => {
    //팝업메뉴가 열려있을 때 팝업메뉴 클릭시 닫기
    let index = itemOpens.indexOf(e.target);
    if (index >= 0) {
      itemOpens[index].classList.toggle("rotate180");
      items[index].classList.toggle("show");
    } else if (isPopup) {
      // console.log(linklists.find(e.target), e.target);
      // indexOf 해당요소가 없으면 -1을 반환한다
      //includes 해당요소가 있으면 true, 검은배경클릭시(submenuContainer 자기자신)
      if (linklists.includes(e.target) || e.target == submenuContainer) {
        menuOpen(false);
      }
    }
  },
  false
);

content.addEventListener(
  "click",
  () => {
    menuOpen(false);
  },
  false
);

menulist.onclick = function () {
  menuPosX = menulist.getBoundingClientRect().left + 5;
  menuPosX = menuPosX < 5 ? 5 : menuPosX;
  // console.log("menulist clicked Height: " + window.innerHeight);
  menuHeight = window.innerHeight - 50;
  // if(menuHeight > 600) menuHeight = 600;
  isPopup = !isPopup;
  menuOpen(isPopup);
};

//if popup is opened, keep it opened
submenuContainer.onmouseover = function () {
  if (window.innerWidth < bigWindow) {
    if (!isPopup) {
      menuOpen(true);
    }
  }
};

//if mouse is outside of popup, close popup menu
submenu.onmouseout = function () {
  //휴대폰이면 종료
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    return;
  }
  if (window.innerWidth < bigWindow) {
    if (isPopup) {
      menuOpen(false);
    }
  }
};

function openSubmenu(item) {
  console.log(item);
  const menu = document.getElementById(item);
  menu.classList.toggle("active");
}

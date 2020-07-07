'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
    _classCallCheck(this, Shared);
};

var currentPage = 1;
var pages = 12;

var currentPageBlock = document.getElementById('currentPage');
var pagesBlock = document.getElementById('pages');

var prevPageButton = document.getElementById('prevPage');
var nextPageButton = document.getElementById('nextPage');

currentPageBlock.innerHTML = currentPage;
pagesBlock.innerHTML = pages;

function prevPage() {
    if (currentPage - 1 > 0) {
        currentPage = currentPage - 1;
        currentPageBlock.innerHTML = currentPage;
    }
}

function nextPage() {
    if (currentPage + 1 <= pages) {
        currentPage = currentPage + 1;
        currentPageBlock.innerHTML = currentPage;
    }
}

prevPageButton.addEventListener('click', prevPage);
nextPageButton.addEventListener('click', nextPage);

var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIcon');
var menuList = document.getElementById('menuList');
var menuNav = document.getElementById('headerNavInfo');

var menuIsOpened = false;
var menuListIsOpened = false;

function openList(mode) {
    menuListIsOpened = true;
    menuList.style.display = 'block';
    if (mode) {
        menu.classList.toggle('menu--opened');
        menuIcon.classList.toggle('icon--opened');
    }
}

function closeList(mode) {
    menuListIsOpened = false;
    menuList.style.display = 'none';
    if (mode) {
        menu.classList.toggle('menu--opened');
        menuIcon.classList.toggle('icon--opened');
    }
}

function openMenu() {
    menu.style.display = 'block';
    menuNav.style.display = 'none';
    menuIsOpened = true;
}

function closeMenu(mode) {
    menu.style.display = 'none';
    menuNav.style.display = 'flex';
    menuIsOpened = false;
    closeList(mode);
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 676) {
        closeMenu(false);
    } else {
        menu.style.display = 'block';
        menuNav.style.display = 'none';
        menuIsOpened = true;
        closeList(false);
    }
});

window.addEventListener('resize', function () {
    if (menuIsOpened && window.innerWidth > 676) {
        closeMenu(menuListIsOpened);
    } else if (!menuIsOpened && window.innerWidth <= 676) {
        openMenu();
    }
});

menuIcon.addEventListener('click', function () {
    if (menuListIsOpened) {
        closeList(true);
    } else {
        openList(true);
    }
});

menuList.addEventListener('click', function () {
    closeList(true);
});
//# sourceMappingURL=script.js.map

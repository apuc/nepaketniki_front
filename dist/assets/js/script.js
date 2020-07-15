'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
    _classCallCheck(this, Shared);
};

var currentPage = 1;
var pages = 12;
var sliding = false;

var currentPageBlock = document.getElementById('currentPage');
var pagesBlock = document.getElementById('pages');

var prevPageButton = document.getElementById('prevPage');
var nextPageButton = document.getElementById('nextPage');

var commentsList = document.getElementById('commentsList');

currentPageBlock.innerHTML = currentPage;
pagesBlock.innerHTML = pages;

var comments = [{ name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Галина', instagramLinks: ['galochka115'], avatar: 'assets/images/comment-3.png', text: 'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...' }, { name: 'Карина и Андрей', instagramLinks: ['karina_duvanova', 'andy_slipp'], avatar: 'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...' }, { name: 'Людмила', instagramLinks: ['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную' }];

var visibleComments = comments.slice(currentPage * 3 - 3, currentPage * 3);

function prevPage() {
    if (currentPage - 1 > 0 && !sliding) {
        sliding = true;

        var commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
        commentBlocks.forEach(function (block) {
            return block.classList.toggle('fading-prev');
        });

        setTimeout(function () {
            commentBlocks.forEach(function (block) {
                return block.classList.toggle('fading-prev');
            });
            commentBlocks.forEach(function (block) {
                return block.style.display = 'none';
            });
            currentPage -= 1;
            currentPageBlock.innerHTML = currentPage;
            var visibleComments = comments.slice(currentPage * 3 - 3, currentPage * 3);
            visibleComments.forEach(function (comment, index) {
                return renderComment(comment, index);
            });

            commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
            commentBlocks.forEach(function (block) {
                return block.classList.toggle('appearing-prev');
            });
            sliding = false;
            setTimeout(function () {
                commentBlocks.forEach(function (block) {
                    return block.classList.toggle('appearing-prev');
                });
            }, 300);
        }, 300);
    }
}

function nextPage() {
    if (currentPage + 1 <= pages && !sliding) {
        sliding = true;

        var commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
        commentBlocks.forEach(function (block) {
            return block.classList.toggle('fading-next');
        });

        setTimeout(function () {
            commentBlocks.forEach(function (block) {
                return block.classList.toggle('fading-next');
            });
            commentBlocks.forEach(function (block) {
                return block.style.display = 'none';
            });
            currentPage += 1;
            currentPageBlock.innerHTML = currentPage;
            var visibleComments = comments.slice(currentPage * 3 - 3, currentPage * 3);
            visibleComments.forEach(function (comment, index) {
                return renderComment(comment, index);
            });

            commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
            commentBlocks.forEach(function (block) {
                return block.classList.toggle('appearing-next');
            });
            sliding = false;
            setTimeout(function () {
                commentBlocks.forEach(function (block) {
                    return block.classList.toggle('appearing-next');
                });
            }, 300);
        }, 300);
    }
}

function renderComment(comment, index) {

    var classes = '';
    if (index % 3 !== 0) {
        if (classes.length !== 0) classes += ' ';
        classes += 'mobile-hidden';
    }
    if (index % 3 !== 1) {
        if (classes.length !== 0) classes += ' ';
        classes += 'upper';
    }

    var linksInner = '';
    for (var i = 0; i < comment.instagramLinks.length; i++) {
        var link = comment.instagramLinks[i];
        var resultLink = 'http::/instagram.com/' + link;
        if (index === 0) {
            linksInner += '\n                <a class=\'comment__link\' href=' + resultLink + '>' + link + '</a>\n            ';
        } else linksInner += '\n                <span class=\'comment__link-breaker\'>|</span>\n                <a class=\'comment__link\' href=' + resultLink + '>' + link + '</a>\n            ';
    }

    var resultInner = '\n        <div class=\'comments-comment ' + classes + '\'>\n            <div class=\'comments-comment__border-inside\'></div>\n            <div class=\'comment__main\'>\n                <h4 class=\'comment__name\'>' + comment.name + '</h4>\n                <div class=\'comment__instagram\'>\n                    <i class=\'fa fa-instagram\'></i>\n                    ' + linksInner + '\n                </div>\n                <p class=\'comment__text\'>\n                    ' + comment.text + '\n                </p>\n            </div>\n            <img class=\'comment__avatar\' src=' + comment.avatar + ' alt=\'\' />\n        </div>\n    ';

    commentsList.innerHTML += resultInner;
}

visibleComments.forEach(function (comment, index) {
    return renderComment(comment, index);
});

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

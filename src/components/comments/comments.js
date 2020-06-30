var currentPage = 1
var pages = 12

var currentPageBlock = document.getElementById('currentPage')
var pagesBlock = document.getElementById('pages')

var prevPageButton = document.getElementById('prevPage')
var nextPageButton = document.getElementById('nextPage')

currentPageBlock.innerHTML = currentPage;
pagesBlock.innerHTML = pages;

function prevPage() {
    if(currentPage-1 > 0) {
        currentPage = currentPage -1;
        currentPageBlock.innerHTML = currentPage;
    }
}

function nextPage() {
    if(currentPage + 1 <= pages) {
        currentPage = currentPage + 1;
        currentPageBlock.innerHTML = currentPage;
    }	
}

prevPageButton.addEventListener('click', prevPage)
nextPageButton.addEventListener('click', nextPage)
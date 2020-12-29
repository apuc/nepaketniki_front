class Shared {
    constructor() {}
}

const BASE_URL = window.location.origin;

class Slider {
    constructor({ currentPageBlockId, pagesBlockId, prevPageButtonId, nextPageButtonId, elementsListId, 
            getLink, parser, filter, sorter, renderInner, elementClass }) {

        this.currentPage = 1;
        this.pages = 1;
        this.sliding = false;
        this.pageHasDifferences = null;

        this.currentPageBlock = document.getElementById(currentPageBlockId);
        this.pagesBlock = document.getElementById(pagesBlockId);

        this.prevPageButton = document.getElementById(prevPageButtonId);
        this.nextPageButton = document.getElementById(nextPageButtonId);

        this.elementsList = document.getElementById(elementsListId);

        this.elements = [];
        this.visibleElements = [];

        this.request = null;
        this.url = null;
        this.getLink = getLink;

        this.parser = parser;
        this.filter = filter;
        this.sorter = sorter;

        this.renderInner = renderInner;
        this.elementClass = elementClass;

        this.params = {
            tourId: this.elementsList.getAttribute('data-tour-id'),
        };
    }

    createRequest() {
        this.request = new XMLHttpRequest();
        this.url = `${BASE_URL}/${this.getLink(this.params)}`;
        this.request.open('GET', this.url);
        this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        this.request.addEventListener("readystatechange", () => {
            if (this.request.readyState === 4 && this.request.status === 200) {
                this.elements = JSON.parse(this.request.response);
                if(this.parser) {
                    this.elements = this.elements.map(this.parser);
                };
                if(this.filter) {
                    this.elements = this.elements.filter(this.filter);
                };
                if(this.sorter) {
                    this.elements = this.elements.sort(this.sorter);
                };
                this.pages = Math.ceil(this.elements.length / 3) > 0 ? Math.ceil(this.elements.length / 3) : 1;
                if(this.pagesBlock) {
                    this.pagesBlock.innerHTML = this.pages;
                }
                if(this.pages <= 1) {
                    this.prevPageButton.style.display = 'none';
                    this.nextPageButton.style.display = 'none';
                } else {
                    this.prevPageButton.addEventListener('click', this.prevPage.bind(this));
                    this.nextPageButton.addEventListener('click', this.nextPage.bind(this));
                }
                if(this.elements.length < this.pages*3) {
                    const elementsLeft = this.pages*3-this.elements.length;
                    this.pageHasDifferences = this.pages;
                    this.elements = [...this.elements, ...Array.from(Array(elementsLeft), (_) => { return {} })];
                }
                this.visibleElements = this.elements.slice(this.currentPage*3-3, this.currentPage*3);
                this.visibleElements.forEach((element,index) => this.renderElement(element, index, this.currentPage, this.pageHasDifferences));
            };
        }); 
    }

    makeRequest() {
        this.request.send(); 

        if(this.currentPageBlock && this.pagesBlock) {
            this.currentPageBlock.innerHTML = this.currentPage;
            this.pagesBlock.innerHTML = this.pages;
        }
    }

    prevPage() {
        if(this.currentPage-1 > 0 && !this.sliding) {
            this.sliding = true;
            
            let elementBlocks = document.querySelectorAll(`.${this.elementClass}:not([style*="display: none"])`);
            elementBlocks.forEach(block => block.classList.toggle('fading-prev'));
    
            setTimeout( () => {
                elementBlocks.forEach(block => block.classList.toggle('fading-prev'));
                elementBlocks.forEach(block => block.style.display='none');
                this.currentPage -= 1;
                if(this.currentPageBlock) {
                    this.currentPageBlock.innerHTML = this.currentPage;
                }
                this.visibleElements = this.elements.slice(this.currentPage*3-3, this.currentPage*3);
                this.visibleElements.forEach((element,index) => this.renderElement(element, index, this.currentPage, this.pageHasDifferences));
    
                elementBlocks = document.querySelectorAll(`.${this.elementClass}:not([style*="display: none"])`);
                elementBlocks.forEach(block => block.classList.toggle('appearing-prev'));
                this.sliding = false;
                setTimeout( () => {
                    elementBlocks.forEach(block => block.classList.toggle('appearing-prev'));
                }, 300);
            }, 300);
        };
    };

    nextPage() {
        if(this.currentPage + 1 <= this.pages && !this.sliding) {
            this.sliding = true;
            console.log('class', this.elementClass)
            let elementBlocks = document.querySelectorAll(`.${this.elementClass}:not([style*="display: none"])`);
            console.log('selected', elementBlocks);
            elementBlocks.forEach(block => block.classList.toggle('fading-next'));
    
            setTimeout( () => {
                elementBlocks.forEach(block => block.classList.toggle('fading-next'));
                elementBlocks.forEach(block => block.style.display='none');
                console.log('currPage before', this.currentPage);
                this.currentPage += 1;
                console.log('currPage after', this.currentPage);
                if(this.currentPageBlock) {
                    this.currentPageBlock.innerHTML = this.currentPage;
                }
                
                console.log('before recalc', this.visibleElements);
                this.visibleElements = this.elements.slice(this.currentPage*3-3, this.currentPage*3);
                
                console.log('after recalc', this.visibleElements);
                this.visibleElements.forEach((element,index) => this.renderElement(element, index, this.currentPage, this.pageHasDifferences));
    
                elementBlocks = document.querySelectorAll(`.${this.elementClass}:not([style*="display: none"])`);
                elementBlocks.forEach(block => block.classList.toggle('appearing-next'));
                this.sliding = false;
                setTimeout( () => {
                    elementBlocks.forEach(block => block.classList.toggle('appearing-next'));
                }, 300);
            }, 300);
        };
    };

    renderElement(element, index, currentPage, pageHasDifferences) {
        const resultInner = this.renderInner(element, index, currentPage, pageHasDifferences);
        this.elementsList.innerHTML += resultInner;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // if(window.location.href.indexOf(`/tour/`) !== -1) {
    //     createSliders();
    //     createSectionSliders();
    // }

    createCommentsSlider();
})

var masonryGrid = document.querySelector('.grid');

var msnry;

imagesLoaded( masonryGrid, function() {
  msnry = new Masonry( masonryGrid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
});

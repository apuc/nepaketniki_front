function getSectionLink() {
    const URL = window.location.href;
    const URL_Info = URL.split('/');
    const tourId = URL_Info[URL_Info.length-1];
    return 'tour/section_photos/'+tourId;
}

function createSectionSliders() {
    const request = new XMLHttpRequest();
    const url = `${BASE_URL}/${getSectionLink()}`;
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const items = JSON.parse(request.response);

            const sectionSliders = {};

            items.map(item=> {
                sectionSliders[item.section_id] = new Slider(getSectionSliderProps(item.section_id));
            });

            Object.keys(sectionSliders).map(sliderId => {
                const slider = sectionSliders[sliderId];
                slider.createRequest();
                slider.makeRequest();
            })
        }
    });

    request.send();
}

function getSectionSliderProps(number) {
    return {
        prevPageButtonId: 'singleTourSectionPrevPage-'+number,
        nextPageButtonId: 'singleTourSectionNextPage-'+number,
        elementsListId: 'singleTourSectionPhotos-'+number,
        getLink: getSectionLink,
        renderInner: function renderInner(element, index) {
            if(!element.image) {
                return '';
            }
            var classes = ''
            if(index > 1) {
                if(classes.length !== 0) 
                    classes += ' '
                classes += 'mobile-hidden'
            };

            let resultInner = `
            <div class='-single-tour-section-item__photos-item -single-tour-section-item__photos-item-${number}'>
                <img src='${element.image}' alt="" class='-single-tour-section-item__photo' />
            </div>
            `;

            return resultInner;
        },
        filter: (element) => {
            return element.section_id == number
        },
        elementClass: '-single-tour-section-item__photos-item-'+number,
    }
}





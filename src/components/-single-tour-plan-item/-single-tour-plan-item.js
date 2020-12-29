function getLink() {
    const URL = window.location.href;
    const URL_Info = URL.split('/');
    const tourId = URL_Info[URL_Info.length-1];
    return 'tour/plan_photos/'+tourId;
}

function createSliders() {
    const request = new XMLHttpRequest();
    const url = `${BASE_URL}/${getLink()}`;
    request.open('GET', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const items = JSON.parse(request.response);
            
            const dayNumbers = items.map(i => i.day);

            const days = {};

            dayNumbers.map(n => {
                if(!days[n]) {
                    days[n] = items.filter(item => item.day === n);
                }
            });
            
            const sliders = Object.assign({}, days);

            Object.keys(days).map(day => {
                sliders[day] = new Slider(getSliderProps(day));
            });

            Object.keys(sliders).map(sliderId => {
                const slider = sliders[sliderId];
                slider.createRequest();
                slider.makeRequest();
            })
        }
    });

    request.send();
}

function getSliderProps(number) {
    return {
        prevPageButtonId: 'singleTourPlanPrevPage-'+number,
        nextPageButtonId: 'singleTourPlanNextPage-'+number,
        elementsListId: 'singleTourPlanPhotos-'+number,
        getLink,
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
                <div class='-single-tour-plan-item__photos-item -single-tour-plan-item__photos-item-${number}'>
                    <img src='${element.image}' alt="" class='.-single-tour-plan-item__photo' />
                </div>
                `;

            return resultInner;
        },
        filter: (element) => {
            return element.day == number
        },
        elementClass: '-single-tour-plan-item__photos-item-'+number,
    }
}





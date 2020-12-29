function renderComment(comment, index, currentPage, pageHasDifferences) {
    if(!comment.name) {
        return'';
    }
    var classes = ''
    if( index%3 !== 0) {
        if(classes.length !== 0) 
            classes += ' '
        classes += 'mobile-hidden'
    };
    if( index%3 !== 1 && currentPage !== pageHasDifferences) {
        if(classes.length !== 0) 
            classes += ' '
        classes += 'upper'
    };

    let linksInner = '';
    for(let i = 0; i < comment.instagramLinks.length; i++) {
        let link = comment.instagramLinks[i];
        var resultLink = 'https://www.instagram.com/' + link;
        if(index === 0) {
            linksInner += `
                <a class='comment__link' href=${resultLink}>${link}</a>
            `;
        } else
            linksInner += `
                <span class='comment__link-breaker'>|</span>
                <a class='comment__link' href=${resultLink}>${link}</a>
            `;
        };

    let resultInner = `
        <div class='comments-comment ${classes}'>
            <div class='comments-comment__border-inside'></div>
            <div class='comment__main'>
                <h4 class='comment__name'>${comment.name}</h4>
                <div class='comment__instagram'>
                    <i class='fa fa-instagram'></i>
                    ${linksInner}
                </div>
                <p class='comment__text'>
                    ${comment.text}
                </p>
            </div>
            <img class='comment__avatar' src=${comment.avatar} alt='' />
        </div>
    `;

    return resultInner;

}

function createCommentsSlider() {
    const commentsSlider = new Slider({
        currentPageBlockId: 'commentsCurrentPage',
        pagesBlockId: 'commentsPages',
        prevPageButtonId: 'commentsPrevPage',
        nextPageButtonId: 'commentsNextPage',
        elementsListId: 'commentsList',
        getLink: function getLink(params) {
            return `reviews_download?tour_id=${params.tourId}`;
        },
        parser: comment => {
            comment.instagramLinks = comment.instagramLinks.split(', ');
            return comment;
        },
        renderInner: renderComment,
        elementClass: 'comments-comment',
    });

    commentsSlider.createRequest();
    commentsSlider.makeRequest();
}
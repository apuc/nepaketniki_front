var currentPage = 1;
var pages = 12;
var sliding = false;

var currentPageBlock = document.getElementById('currentPage')
var pagesBlock = document.getElementById('pages')

var prevPageButton = document.getElementById('prevPage')
var nextPageButton = document.getElementById('nextPage')

var commentsList = document.getElementById('commentsList')

currentPageBlock.innerHTML = currentPage;
pagesBlock.innerHTML = pages;

const comments = [
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},
    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},

    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},

    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},
    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},

    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},

    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},
    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},

    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},

    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},
    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},

    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},

    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},
    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},

    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},

    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},
    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},

    { name: 'Галина', instagramLinks:['galochka115'], avatar:'assets/images/comment-3.png', text:'Ребята, спасибо вам большое за поездку! Я сама люблю составлять маршруты и всё тщательно планировать, но как же приятно иногда ни о чем не думать и довериться хорошим организаторам!)) До сих пор закрываю глаза и у меня пряничные домики перед глазами))...'},
    { name: 'Карина и Андрей', instagramLinks:['karina_duvanova', 'andy_slipp'], avatar:'assets/images/comment-1.png', text: 'Это был самый крутой отдых! Вы - просто молодцы! Программа тура была не стандартной туристической и при желании группа могла внести ещё и свои коррективы. Т.е. мое нелюбимое - в 7 утра стоять перед гостиницей с сухим пайком и ждать автобус не происходило...'},
    { name: 'Людмила', instagramLinks:['mng.milka'], avatar: 'assets/images/comment-2.png', text: 'Ребятки, формат вашей программы оказался просто идеальным для меня (Я собственно на это и рассчитывала) Этот формат я называю «взять и выгулять», когда ты не паришься о подробностях и деталях планирования поездки, ты просто доверяешь себя профессионалам..., расслабляешься и наслаждаешься путешествием на полную'},

]

let visibleComments = comments.slice(currentPage*3-3, currentPage*3);

function prevPage() {
    if(currentPage-1 > 0 && !sliding) {
        sliding = true;
        
        let commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
        commentBlocks.forEach(block => block.classList.toggle('fading-prev'));

        setTimeout( () => {
            commentBlocks.forEach(block => block.classList.toggle('fading-prev'));
            commentBlocks.forEach(block => block.style.display='none');
            currentPage -= 1;
            currentPageBlock.innerHTML = currentPage;
            let visibleComments = comments.slice(currentPage*3-3, currentPage*3);
            visibleComments.forEach((comment,index) => renderComment(comment, index));

            commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
            commentBlocks.forEach(block => block.classList.toggle('appearing-prev'));
            sliding = false;
            setTimeout( () => {
                commentBlocks.forEach(block => block.classList.toggle('appearing-prev'));
            }, 300)
        }, 300)
    }
}

function nextPage() {
    if(currentPage + 1 <= pages && !sliding) {
        sliding = true;
        
        let commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
        commentBlocks.forEach(block => block.classList.toggle('fading-next'));

        setTimeout( () => {
            commentBlocks.forEach(block => block.classList.toggle('fading-next'));
            commentBlocks.forEach(block => block.style.display='none');
            currentPage += 1;
            currentPageBlock.innerHTML = currentPage;
            let visibleComments = comments.slice(currentPage*3-3, currentPage*3);
            visibleComments.forEach((comment,index) => renderComment(comment, index));

            commentBlocks = document.querySelectorAll('.comments-comment:not([style*="display: none"])');
            commentBlocks.forEach(block => block.classList.toggle('appearing-next'));
            sliding = false;
            setTimeout( () => {
                commentBlocks.forEach(block => block.classList.toggle('appearing-next'));
            }, 300)
        }, 300)
    }	
}

function renderComment(comment, index) {
    
    var classes = ''
    if( index%3 !== 0 ) {
        if(classes.length !== 0) 
            classes += ' '
        classes += 'mobile-hidden'
    }
    if( index%3 !== 1 ) {
        if(classes.length !== 0) 
            classes += ' '
        classes += 'upper'
    }

    let linksInner = '';
    for(let i = 0; i < comment.instagramLinks.length; i++) {
        let link = comment.instagramLinks[i];
        var resultLink = 'http::/instagram.com/' + link
        if(index === 0) {
            linksInner += `
                <a class='comment__link' href=${resultLink}>${link}</a>
            `;
        } else
            linksInner += `
                <span class='comment__link-breaker'>|</span>
                <a class='comment__link' href=${resultLink}>${link}</a>
            `;
        }

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

    commentsList.innerHTML += resultInner
}

visibleComments.forEach((comment,index) => renderComment(comment, index))

prevPageButton.addEventListener('click', prevPage)
nextPageButton.addEventListener('click', nextPage)
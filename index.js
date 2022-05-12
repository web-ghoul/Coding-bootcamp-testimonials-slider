const avatar = document.querySelector('.avatar > img')
const para = document.querySelector('.content > p')
const nameSpan = document.querySelector('.content .name')
const slides = document.querySelectorAll('.avatar .slide picture')


slides.forEach((s) => {
    s.addEventListener('click', function() {
        slides.forEach((sl) => {
            sl.classList.remove('active')
        })
        if (s.classList.contains('girl')) {
            girl()
        } else {
            boy()
        }
        s.classList.add('active')
    })
})

function girl() {
    avatar.setAttribute('src', './images/image-tanya.jpg')
    para.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    nameSpan.firstElementChild.innerHTML = "Tanya Sinclair"
    nameSpan.lastElementChild.innerHTML = "UX Engineer"
}

function boy() {
    avatar.setAttribute('src', './images/image-john.jpg')
    para.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    nameSpan.firstElementChild.innerHTML = "John Tarkpor"
    nameSpan.lastElementChild.innerHTML = "Junior Front-end Developer"
}
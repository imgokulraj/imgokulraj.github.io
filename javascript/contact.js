swup.on('pageView', () => {
    console.log('New page loaded in contact');
  });

// Nav toggler for smaller screens 
const mobileNavbar = document.querySelector('nav.nav-mobile')
document.querySelector('.open-nav-bar').addEventListener('click' , e => {

    mobileNavbar.classList.add('nav-mobile-show')

}) 

document.querySelector('.close-nav-bar').addEventListener('click' , e => {
    mobileNavbar.classList.remove('nav-mobile-show')
}) 

// Moving cursor circle 

const cursorcircle = document.querySelector('.cursor-circle')
const cursordot = document.querySelector('.cursor-dot') 
document.addEventListener('mousemove' , e => moveCursor(e))
function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY 
    cursordot.style.top = y+"px" 
    cursordot.style.left = x+"px"
    setTimeout(() => {
        cursorcircle.style.top = y+"px" 
        cursorcircle.style.left = x+"px"
    } , 50)

}

// Moving cursor calm down animation on all anchor tags
document.querySelectorAll('a').forEach(aTag => {
    aTag.addEventListener('mouseenter', e => {
        cursorcircle.classList.add('cursor-calm-down')
    })
    aTag.addEventListener('mouseleave' , e => {
        cursorcircle.classList.remove('cursor-calm-down')
    })

})

// Redirecting to home page 
document.querySelector('.go-back-to-home').addEventListener('click' , e => {
    window.location.href = '/index.html'
})
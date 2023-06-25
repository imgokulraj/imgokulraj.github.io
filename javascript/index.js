swup.on('pageView', () => {
    const scriptElement = document.createElement('script');
    scriptElement.src = "/javascript/contact.js"
    scriptElement.defer = true;
    document.head.appendChild(scriptElement);

    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = "css/contact.css";

    document.head.appendChild(linkElement);
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

// Redirecting to about page on clicking more about me and adding calm down animation
document.querySelector('.about-me').addEventListener('click' , e => {
    window.location.href = '/about.html'
})
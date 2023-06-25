const swup = new Swup();

swup.on("contentReplaced" , e => {
   loadCommonElements()
   console.log("changed")
})
function getCurrentPageName() {
    const currentUrl = window.location.href
    let lastEndpoint = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
    lastEndpoint = lastEndpoint.replace(/\.html$/, '');
    return lastEndpoint
}
function loadCommonElements() {
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

loadIndependentPageEvents() 
}
function loadIndependentPageEvents() {
    const currentPageName = getCurrentPageName()
    if (currentPageName === 'index')loadJavascriptForIndexPage()
    else if(currentPageName === 'contact') loadJavascriptForContactPage()
    else if (currentPageName === 'articles') loadJavascriptForArticlesPage() 
}
function loadJavascriptForIndexPage(){
// Redirecting to about page on clicking more about me and adding calm down animation
    document.querySelector('.about-me').addEventListener('click' , e => {
    window.location.href = '/about.html'
})
}

function loadJavascriptForContactPage() {
// Redirecting to home page 
    document.querySelector('.go-back-to-home').addEventListener('click' , e => {
    window.location.href = '/index.html'
})
}

function loadJavascriptForArticlesPage(){
    const navFilter = document.querySelector('.nav-filter')
    navFilter.addEventListener('click' , navFilterSelection)
}
loadCommonElements()

// Event listener functions 
function navFilterSelection(e) {

    if (e.target.classList.contains("nav-filter-btn")) {
        if (e.target.classList.contains("nav-filter-btn-active")) return 
        const alreadySelectedBtn = document.querySelector('.nav-filter-btn-active') 
        console.log(alreadySelectedBtn)
        if (alreadySelectedBtn !== null) alreadySelectedBtn.classList.remove('nav-filter-btn-active')
        e.target.classList.add("nav-filter-btn-active")

        
    }
}
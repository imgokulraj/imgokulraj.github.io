const swup = new Swup();
let currentPageName = null
const articles = [
    {
        "img" : "/images/traversy.webp" , 
        "size" : "large" , 
        "title" : "Traversy Media" , 
        "para" : "Hello Everyone" , 
        "a" : '#' , 
        "class" : "readings" ,
        "classnum" : 1
    },
    {
        "img" : "/images/deved.webp" , 
        "size" : "large" , 
        "title" : "Dev Ed" , 
        "para" : "Hello Everyone",
        "a" : '#',
        "class" : "articles",
        "classnum" : 2
    },
    {
        "img" : "/images/techleead.webp" , 
        "size" : "small" , 
        "title" : "tech lead" , 
        "para" : "Hello Everyone",
        "a" : '#',
        "class" : "videos",
        "classnum" : 3
    },
    {
        "img" : "/images/traversy.webp" , 
        "size" : "medium" , 
        "title" : "Traversy Media" , 
        "para" : "Hello Everyone",
        "a" : '#',
        "class" : "videos" ,
        "classnum" : 3
    }
    
]

projects = [
    {
        "id" : 1 ,
        "img" : "/images/project1.gif" , 
        "size" : "large" , 
        "title" : "Piggment" , 
        "para" : "The gradients of the summer of the next creator" , 
        "a" : 'https://www.google.com' , 
        "class" : "Projects" ,
        "classnum" : 1 , 
        "about" : "Some content" , 
        "website" : "https://www.google.com" , 
        "github" : "https://github.com/imgokulraj",
        "technology" : ["javascript" , "python"]
    },
    {
        "id" : 2,
        "img" : "/images/project2.webp" , 
        "size" : "medium" , 
        "title" : "Piggment2" , 
        "para" : "The gradients of the summer of the next creator" , 
        "a" : '#' , 
        "class" : "Projects" ,
        "classnum" : 1 , 
        "about" : "Some content 2" , 
        "website" : "https://www.google.com" , 
        "github" : "https://github.com/imgokulraj",
        "technology" : ["javascript" , "python"]
    },
    {
        "id" : 3,
        "img" : "/images/project3.gif" , 
        "size" : "small" , 
        "title" : "shopper" , 
        "para" : "The gradients of the summer of the next creator" , 
        "a" : '#' , 
        "class" : "Projects" ,
        "classnum" : 1 , 
        "about" : "Some content 3" , 
        "website" : "https://www.google.com" , 
        "github" : "https://github.com/imgokulraj",
        "technology" : ["javascript" , "python"]
    },
    {
        "id" : 4 ,
        "img" : "/images/project4.webp" , 
        "size" : "small" , 
        "title" : "Piggment" , 
        "para" : "The gradients of the summer of the next creator" , 
        "a" : '#' , 
        "class" : "Projects" ,
        "classnum" : 1 , 
        "about" : "Some content 4" , 
        "website" : "https://www.google.com" , 
        "github" : "https://github.com/imgokulraj",
        "technology" : ["javascript" , "python"]
    },
    
]
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
    currentPageName = getCurrentPageName()
    if (currentPageName === 'index')loadJavascriptForIndexPage()
    else if(currentPageName === 'contact') loadJavascriptForContactPage()
    else if (currentPageName === 'articles') loadJavascriptForArticlesPage() 
    else if (currentPageName === 'projects') loadJavascriptForProjectsPage()
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
    populateContentImages(articles , document.querySelector('.articles-list') , 0)
}
function loadJavascriptForProjectsPage() {
    const navFilter = document.querySelector('.nav-filter') 
    navFilter.addEventListener('click' , navFilterSelection)
    populateContentImages(projects , document.querySelector('.articles-list') , 0)
    const projectItems = document.querySelector('.articles-list')
    projectItems.addEventListener('click' , openProjectManual)
    // event listenr to remove active modal
    const openprojectmodal = document.querySelector('.project-details-modal')
    openprojectmodal.addEventListener('click' , closeprojectdetailsmodal)
}
loadCommonElements()
function openProjectManual(e) {
    if(e.target.classList.contains("articles-article")){
        const id = parseInt( e.target.getAttribute("id"))
        openProjectDetails(id)
    }
}
function closeprojectdetailsmodal(e) {
    if (!e.target.classList.contains('back-to-projects')) return
    e.target.innerHTML = '' 
    document.querySelector('.project-details-modal').classList.remove("project-details-modal-show")
    document.querySelector('.cover-whole-page-modal').classList.remove('cover-whole-page-modal-active')
}
function openProjectDetails(id) {
    const obj = projects.filter(item => item.id === id)[0]
    let technology = '' 
    obj.technology.forEach(item => technology += `
        <button>${item}</button>
    `)
    document.querySelector('.project-details-modal').innerHTML = `
    <div class="back-btns">
    <i class="fa-solid fa-arrow-left back-to-projects"></i>
    <p class="back-to-projects">Back To Projects.</p>
    </div>
    <hr>
    <h3>${obj.title}</h3>
    <p>${obj.para}</p>
    <img src="${obj.img}" alt="">
    <h5>About</h5>
    <p>${obj.about}</p>
    <h5>Technologies</h5>
    <div class="technology-btns">
        ${technology}
    </div>
    <h5>Github</h5>
    <a class="github" href="${obj.github}">${obj.github}</a>
    <a class="open-project" href="${obj.website}">Open Project <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    
    `
    // <a href="${obj.website}" class="open-projet">Open Project <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    document.querySelector('.project-details-modal').classList.add("project-details-modal-show")
    document.querySelector('.cover-whole-page-modal').classList.add('cover-whole-page-modal-active')
}
// Event listener functions 
function navFilterSelection(e) {

    if (e.target.classList.contains("nav-filter-btn")) {
        if (e.target.classList.contains("nav-filter-btn-active")) return 
        const alreadySelectedBtn = document.querySelector('.nav-filter-btn-active') 
        if (alreadySelectedBtn !== null) alreadySelectedBtn.classList.remove('nav-filter-btn-active')
        e.target.classList.add("nav-filter-btn-active")
        if (currentPageName === "projects") {
            populateContentImages( projects , document.querySelector('.articles-list') , e.target.getAttribute("classnum"))
        }else{
            populateContentImages(articles , document.querySelector('.articles-list') , e.target.getAttribute("classnum"))
        }
        
        
    }
}

// populating content images 
function populateContentImages(items , parent , filternum){
    filternum = parseInt(filternum)
    let newFilteredItems = items.filter( lst => lst.classnum === filternum)
    if (filternum === 0) newFilteredItems = items
    res = '<div class="left-column">' 
    
    for(let i = 0 ; i < Math.ceil(newFilteredItems.length / 2) ; i++) {
        const obj = newFilteredItems[i] 
        res += `
            <li id="${obj.id}" class="articles-article ${obj.size}">
                <img src="${obj.img}">
                <div class="article-list-content">
                    <h4>${obj.title}</h1>
                    <p>${obj.para}</p>
                </div>
            </li>
        `
    }

    res += '</div><div class="right-column">'
    for(let i = Math.ceil(newFilteredItems.length / 2) ; i < newFilteredItems.length; i++) {
        const obj = newFilteredItems[i] 
        res += `
            <li id="${obj.id}" class="articles-article ${obj.size}">
                <img src="${obj.img}">
                <div class="article-list-content">
                    <h4>${obj.title}</h1>
                        <p>${obj.para}</p>
                </div>
            </li>
        `
    }
    res += '</div>' 
    parent.classList.add("show")
    parent.innerHTML = res

}

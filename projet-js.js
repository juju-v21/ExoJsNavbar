var navbar = document.getElementById('navbar')
var navmenu = document.getElementById('menu')

window.addEventListener('scroll', function(){
    var scroll = this.document.documentElement.scrollTop
   // console.log(scroll) 

if (scroll <= 2006) {
    navbar.style.height = "150px" 
    navmenu.style.fontSize = "72px"
    navbar.style.opacity= "2"
    } else {
    navbar.style.height = "50px"
    navmenu.style.fontSize= "22px"
    navbar.style.opacity= "0.2"
}
})
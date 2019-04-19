var navbar = document.querySelector(".topnav")
var offset = navbar.offsetTop

function navCheck() {
  console.log(window.pageYOffset)
  console.log(offset)
  if (window.pageYOffset > offset){
    navbar.style.position = 'fixed'
    navbar.style.top = '0'
    navbar.style.right = '0'
  }
  else {
    navbar.style.position = 'static'
  }
}
window.addEventListener("scroll", navCheck)

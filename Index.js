window.onload = function () {
    setTimeout( function () {
        document.querySelector('body').classList.add('display')
    },4000)
}


const  hamburgerMenu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container')
hamburgerMenu.addEventListener('click',function () {
	container.classList.toggle('change')
})

const scrollBtn = document.querySelector('.scroll-btn');
 scrollBtn.addEventListener('click', function () {
 	document.querySelector('html').style.scrollBehavior = 'smooth';
 	setTimeout( function () {
 		document.querySelector('html').style.scrollBehavior = "unset";
 	},    1000)
 })
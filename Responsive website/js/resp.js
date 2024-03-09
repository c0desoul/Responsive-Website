burger = document.querySelector('.burger')   //queryselector - selects first element if we add 1
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
  rightNav.classList.toggle('v-class-resp');
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})
// 메인 메뉴 마우스오버
const mainMenu = document.querySelectorAll('#list > li');

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;
console.log(headerHeight);
for(let mm of mainMenu){
  mm.addEventListener('mouseover',()=>{
    mm.querySelector('ul').style.display = '';
    let smHeight = mm.querySelector('ul').offsetHeight;
    let totalHeight = smHeight + headerHeight;
    header.style.height = `${totalHeight}px`;
  });
  mm.addEventListener('mouseout',()=>{
    header.style.height = `${headerHeight}px`;
  });
}


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideCount = slides.length;
let currentIdx = 0;
let timer;

function showSlide(idx){
  for(let slide of slides){
    slide.classList.remove('active');
  }
  slides[idx].classList.add('active');
  currentIdx = idx;
}
showSlide(0);
nextBtn.addEventListener('click',()=>{
  let nextIdx = (currentIdx + 1) % slideCount;
  showSlide(nextIdx);
})
prevBtn.addEventListener('click',()=>{
  let nextIdx = (currentIdx - 1 + slideCount) % slideCount;
  showSlide(nextIdx);
})



function randomSlide(){
  timer = setInterval(()=>{
    let nextIdx = Math.floor(Math.random()*4);
    showSlide(nextIdx);
  }, 3000);
}
randomSlide();

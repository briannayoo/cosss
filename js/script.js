document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".header");

  // 스크롤 이벤트를 감지하여 메뉴 색상 변경
  window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
      header.style.backgroundColor = "#ffffff"; // 스크롤을 내릴 때 메뉴 색상을 흰색으로 변경
    } else {
      header.style.backgroundColor = "transparent"; // 스크롤을 올릴 때 메뉴 색상을 투명으로 변경
    }
  });
});


//슬라이드 배너
let sliderWrapper = document.querySelector(".slidewrapper"),
  slideContainer = sliderWrapper.querySelector(".slidecontainer"),
  slides = slideContainer.querySelectorAll(".slidecontainer > li"),
  slideCount = slides.length,
  currentIdx = 0,
  timer,
  pager = sliderWrapper.querySelector(".pager"),
  pagerHTML = "",
  prevBtn = sliderWrapper.querySelector("#prev"),
  nextBtn = sliderWrapper.querySelector("#next");

slides.forEach((item, i) => {
  // item.style.left = `${i * 100}%`;
  pagerHTML = pagerHTML + `<a href="">${i + 1}</a>`;
});

pager.innerHTML = pagerHTML;

let pagerBtn = pager.querySelectorAll("a");

function goToSlide(idx) {
  slideContainer.style.left = `${idx * -100}%`;
  currentIdx = idx;

  if (currentIdx === slideCount - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  if (currentIdx === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  for (let pb of pagerBtn) {
    pb.classList.remove("active");
  }
  pagerBtn[currentIdx].classList.add("active");

  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[currentIdx].classList.add("active");
}
goToSlide(0);

nextBtn.addEventListener("click", () => {
  goToSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", () => {
  goToSlide(currentIdx - 1);
});

pagerBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    goToSlide(idx);
  });
});

function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (currentIdx + 1) % slideCount;
    goToSlide(nextIdx);
  }, 4000);
}

sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
sliderWrapper.addEventListener("mouseleave", () => {
  autoSlide();
});

autoSlide();



let gnb = document.querySelectorAll('.gnb li');
let gnbBg = document.querySelector('.gnb_bg');

for(let li of gnb){
  li.addEventListener('mouseenter',()=>{
    gnbBg.style.opacity = '1';
    gnbBg.style.visibility = 'visible';
  })

  li.addEventListener('mouseleave',()=>{
    gnbBg.style.opacity = '0';
    gnbBg.style.visibility = 'hidden';
  })
}



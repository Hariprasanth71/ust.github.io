let slideIndex = 1;
show(slideIndex);

function Pl_slide(n) {
  show(slideIndex += n);
}

function show(n){
  let i;
  let slides = document.getElementsByClassName("container-item1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  if (n==1)
  {
    document.getElementById("Preva").style.display="none";
  }
  else
  {
    document.getElementById("Preva").style.display="block";
  }
  if (n==4)
  {
    document.getElementById("Nexta").style.display="none";
  }
  else
  {
    document.getElementById("Nexta").style.display="block";
  }
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
 
}


const menu = document.querySelector(".menu");
// const menuItems = document.querySelector(".menuItems");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



function serch() {
  var input, filter, ta, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ta = document.getElementById("main-contents");
  tr = document.getElementById("contents");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementById("do");
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function arrows(direction){
  var container = document.getElementById('third-nav-dup1');
  scrollCompleted = 0;
  var slideVar = setInterval(function(){
      if(direction >= 1){
          container.scrollLeft += 5;
      } if(direction<0) {
          container.scrollLeft -= 5;
      }
      scrollCompleted += 5;
      if(scrollCompleted >= 100)
      {
          window.clearInterval(slideVar);
      }
  }, 17);
}
// function showSlidess(d){
//   let i;
//   let sli= document.getElementById("mo_scroll");
//   if (d > sli.length) {slide_ = 1}    
//   if (d < 1) {slide_ = sli.length}
//   for (i = 0; i < sli.length; i++) 
//   {
//     sli[i].style.display = "none";
    
//   }
//   sli[slide_ - 1].style.display = "flex";  
 
// }
// let slide_= 1;
// showSlidess(slide_);

// function arrows(d) {
//   showSlidess(slide_ += d);
// }

// let count = 0;
//  const cards=document.getElementById('act_bar_1');
// const len=cards.length;

// function scrollFunction1(){
//   let i;
//   let cards = document.getElementsByClassName("act_bar_1");
//   for (i = 0; i < cards.length-4; i++) {
//      document.getElementById("act_bar").remove();
//   }
// }
// const slide=document.querySelectorAll(".container-item");
// const slidecontainer=document.querySelector(".stat-container");

// const nextln=document.querySelector(".btn");
// let slidewidth=slide[0].clientWidth;
// let currentslide=0;

// nextln.addEventListener("click",()=>{
//   if(currentslide>=numberofImages-1)
//   {
//     gotoslide(0);
//     currentslide=0;
//     return;
//   }
//   currentslide++;
//   gotoslide(currentslide);
// });

// function gotoslide(slidenumber)
// {
//   slidecontainer.style.transform="translateX(-" + slidewidth *slidenumber + "px)";
// }



// function next()
// {
//   document.getElementById("arr--next").classList.add("change");
// }
// const slides= document.querySelector(".container-item");
// slides.forEach((container-item,indx) => {
//   container-item.style.transform=`translateX(${index*100}%)`;
// });









// v// drop down the menu, and swap the icon to the close icon
// $('.menu').click(function(){
//   $(this).toggleClass('icon-menu');
//   $(this).toggleClass('icon-cross');
//   $('nav').toggleClass('down');
//   $('nav li a').removeClass('down');
//   $('.search').removeClass('down');
//   $('.icon-search').removeClass('icon-cross');
// });

// //Make sure the menu icon behaves corectly when the menu is open
// $('nav li a').click(function(){
//     $('.menu').addClass('icon-menu');
//     $('.menu').removeClass('icon-cross');
//     $('nav').toggleClass('down');
// });

// //show and hide the search bar, also make sure if the menu is open to hide the menu, and ensure the menu icon state is correct
// $('.icon-search').click(function(){
//     $(this).toggleClass('icon-cross');
//     $('.menu').addClass('icon-menu');
//     $('.menu').removeClass('icon-cross');
//     $('.search').toggleClass('down');
//     $('nav').removeClass('down');
// });
// let slidePosition = 0;
// const slides = document.getElementsByClassName('container-item');
// const totalSlides = slides.length;

// document.
//   getElementById('arr--next')
//   .addEventListener("click", function () {
//     moveToNextSlide();
//   });

// function updateSlidePosition() {
//   for (let slide of slides) {
//     slide.classList.remove('container-item--visible');
//     slide.classList.add('container-item--hidden');
//   }

//   slides[slidePosition].classList.add('container-item--visible');
// }

// function moveToNextSlide() {
//   if (slidePosition === totalSlides - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }

//   updateSlidePosition();
// }

// function moveToPrevSlide() {
//   if (slidePosition === 0) {
//     slidePosition = totalSlides - 1;
//   } else {
//     slidePosition--;
//   }

//   updateSlidePosition();
// }

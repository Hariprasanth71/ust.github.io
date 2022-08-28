let slideIndex = 1;
show(slideIndex);

function Pl_slide(n)
{
  show(slideIndex+=n);
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
  function(menuItem)
  { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


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

function serch() {
  let input = document.getElementById('myInput').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('content');
  
  for (i = 0; i < x.length; i++) 
  {
      if (!x[i].innerHTML.toLowerCase().includes(input)) 
      {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";             
      }
  }
}
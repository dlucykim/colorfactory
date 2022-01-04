
AOS.init()

const navi=document.querySelector('.pop-bold1');
const menuBtn=document.querySelector('.menu-btn');

menuBtn.addEventListener('click',()=>{
    navi.classList.toggle('.pop-bold1');
});

//TEXT ANIMATION
var text = document.getElementById('normal char');
var newDom = '';
var animationDelay = 6;














// slider animation
/**
  @function RotatingGallery()
 
 

 * @returns init {function} Event listeners for the component
 */
 function RotatingGallery() {
   // Constants
   const rotatingGallery = document.querySelector(".rotatingGallery"),
       rotatingGallerySlides = rotatingGallery.querySelector(".rotatingGallery-slides"),
       rotatingGallerySlide = rotatingGallerySlides.querySelectorAll(".rotatingGallery-slide"),
       rotatingGallerySlideCount = rotatingGallerySlide.length;
 
   /**
    * @function slide()
    
     @returns 
    */
   function slide() {
     var dataArrivalAttribute = this.getAttribute("data-arrival-index");
 
     // Move slides to the left
     if (dataArrivalAttribute == 2) {
       slideDirection("right");
 
       // Move slides to the right
     } else if (dataArrivalAttribute == 4) {
       slideDirection("left");
     }
   }
 
   /**
    * @function slideDirection()
    *
   
    *
    * @param direction {string} Either 'left' or 'right'
    * @returns null
    */
   function slideDirection(direction) {
     // Loop over all of the items in the gallery
     for (var i = 0; i < rotatingGallerySlideCount; i++) {
       var slide = rotatingGallerySlide[i],
         slideIndex = parseInt(slide.getAttribute("data-arrival-index")),
         leftSlideIndex = slideIndex - 1,
         rightSlideIndex = slideIndex + 1;
 
       // Move slides to the left
       if (direction == "left") {

         if (leftSlideIndex === 0) {
           rotatingGallerySlides.appendChild(slide);
           slide.setAttribute("data-arrival-index", rotatingGallerySlideCount);
         } else {
           slide.setAttribute("data-arrival-index", leftSlideIndex);
         }
 
         // Move slides to the right
       } else if (direction == "right") {

         if (rightSlideIndex === rotatingGallerySlideCount + 1) {
           rotatingGallerySlides.insertAdjacentElement("afterbegin", slide);
           slide.setAttribute("data-arrival-index", 1);
         } else {
           slide.setAttribute("data-arrival-index", rightSlideIndex);
         }
       }
     }
   }
 
   /**
    * @function setGalleryHeight()
 
    * @returns null
    */
   function setGalleryHeight() {
     var slideHeight = rotatingGallerySlide[0].offsetHeight;
 
     rotatingGallery.style.paddingBottom = slideHeight + "px";
   }
 
   /**
    * @function init()
    *
 
    *
    * @returns null
    */
   function init() {
     rotatingGallerySlide.forEach(function(element) {
       element.addEventListener("click", slide);
     });
 
     setGalleryHeight();
   }
 
   return init();
 }
 
 /**
  * Initialize the gallery
  */
 window.addEventListener("load", function() {
   var gallery = new RotatingGallery();
 });
 
 window.addEventListener("resize", function() {
   var gallery = new RotatingGallery();
 });





// CONFETTI EFFECT


 const Confettiful = function(el) {
  this.el = el;
  this.containerEl = null;
  
  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];
  
  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;
  
  if (elPosition !== 'relative' || elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }
  
  containerEl.classList.add('confetti-container');
  
  this.el.appendChild(containerEl);
  
  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function() {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
    
    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;
    
    confettiEl.removeTimeout = setTimeout(function() {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);
    
    this.containerEl.appendChild(confettiEl);
  }, 25);
};

window.confettiful = new Confettiful(document.querySelector('.js-container'));




// // FORM



// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });


window.addEventListener("load",function(){
  setTimeout(
    function open(event){
      document.querySelector(".popup").style.
      display ="block";
    },
    2000
  )
});

document.querySelector("#close").addEventListener
("click",function(){
  document.querySelector(".popup").style.display="none";
});
const accordionTitles = document.querySelectorAll(".accordion_title");
accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', accordionHandler);

});
function accordionHandler(e){
    e.preventDefault();
    let currentAccordion = e.target.closest('.accordion_title')
    let accordionContent = e.target.nextElementSibling;
    currentAccordion.classList.toggle('active');
    if(currentAccordion.classList.contains('active')){
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    }else{
        accordionContent.style.maxHeight = 0;
    }
}

/*owl-carousel*/
$(document).ready(function(){

// $('.slide1').owlCarousel({
//   loop:true,
//   autoplay: true,
//   margin:10,        
//   nav:true,
//   center:true,
//   stagePadding:10,
//   onInitialized: startProgressBar,
//   onTranslate: resetProgressBar,
//   onTranslated: startProgressBar,
//   navText:[
//       "<i class='fas fa-arrow-left'></i>",
//       "<i class='fas fa-arrow-right'></i>"
//   ],
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
    
//       },

//       800:{
//           items:2,

//       }
//   }
// })

// });




$('.slide1').owlCarousel({
  loop:true,
  autoplay: true,
  autoplayHoverPause: true,
  margin:10,        
  nav:true,
  center:true,
  stagePadding:10,
  onInitialized: startProgressBar,
onTranslate: resetProgressBar,
onTranslated: startProgressBar,
navText:[
   "<i class='fas fa-arrow-left'></i>",
   "<i class='fas fa-arrow-right'></i>"
 ],
  responsive:{
      0:{
          items:1,
    
      },

      1000:{
          items:3,

      }
  }
})

$('.slide2').owlCarousel({
  loop:true,
  margin:10,        
  nav:false,
  center:true,
  stagePadding:0,
  responsive:{
      0:{
          items:3,
    
      },

      800:{
          items:5,

      }
  }
})



});

 
function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
      width: "100%",
      transition: "width 5000ms"
    });
  }
  
  function resetProgressBar() {
    $(".slide-progress").css({
      width: 0,
      transition: "width 0s"
    });
  }

           
  let blockReviews = document.querySelectorAll('.block_reviews');
let nameArrow = document.querySelectorAll('.arows');

blockReviews.forEach((txt) => {
    let txtLength = txt.textContent.trim().length; // Обрезаем пробелы и считаем длину текста
    
    if (txtLength > 20 && txt.classList.contains("active")) {
        console.log('work');
        nameArrow.forEach((arrow) => {
            arrow.classList.add('arrow_active');
        });
    } else {
        nameArrow.forEach((arrow) => {
            arrow.classList.add('arrow_active');
        });
    }
});


// JavaScript
// Найти все кнопки для открытия модальных окон
let openModalBtns = document.querySelectorAll(".openModalBtn");

// Для каждой кнопки установить обработчик события на клик
openModalBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let modalId = btn.getAttribute("data-modal");
    let modal = document.getElementById(modalId);

    // Открыть соответствующее модальное окно
    modal.style.display = "block";

    // Найти кнопку закрытия модального окна внутри данного модального окна
    let closeBtn = modal.querySelector(".close");

    // При клике на кнопку закрыть или вне модального окна
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});


let phoneMenu = document.querySelector('.burger_menu');
let navigation = document.querySelector('.navigation')

let burger1 = document.querySelector('.burger_menu span:nth-child(1)')
let burger2 = document.querySelector('.burger_menu span:nth-child(2)')
let burger3 = document.querySelector('.burger_menu span:nth-child(3)')

phoneMenu.addEventListener('click', function(){


    navigation.classList.toggle('none')
    burger1.classList.toggle('first');
    burger2.classList.toggle('middle');
    burger3.classList.toggle('last');
   
    
})


        
        // let nameArrow = document.querySelectorAll('.name_arrow');
        // nameArrow.forEach((arrow)=>{
        //     arrow.classList.add('arrow_active')   
        //                     }
    
        // )
        


        // цифры

        const preloader = document.querySelector('.preloader')
        const preloaderWrap = document.querySelector('.preloader_wrap')
        //прелоадер
setTimeout(function(){
  preloader.remove()
  preloaderWrap.style.background = 'transparent'
  preloaderWrap.style.zIndex = '0'
  preloaderWrap.style.width = '0'
  timer.style.opacity = 1
  }, 1800)

  //animation scroll
  new WOW().init();


//  var slideIndex = 0;
//      showSlides();
    
//      function showSlides() {
//        var i;
//        var slides = document.getElementsByClassName("meuSlide");
//        var dots = document.getElementsByClassName("dot");
//        for (i = 0; i < slides.length; i++) {
//          slides[i].style.display = "flex";  
//        }
//        slideIndex++;
//        if (slideIndex > slides.length) {slideIndex = 0} // valor original: 1.   
//        for (i = 0; i < dots.length; i++) {
//          dots[i].className = dots[i].className.replace(" acao", "");
//        }
//        slides[slideIndex-1].style.display = "none";  
//        dots[slideIndex-1].className += " acao";
//        setTimeout(showSlides, 2000); 
//        // Change image every 2 seconds
//      }

//Habilita Scrool no elemento projetos
    document.querySelector("cards")
     addEventListener("wheel" , Event => {
      if(Event.deltaY > 0) {
        Event.target.scrollBy(300, 0)
      }
      else{
        Event.target.scrollBy(-300, 0)
      }
    })

//Desabilita o Scroll vertical do corpo
  let slider = document.getElementsByClassName('cards')[0]
    function preventDefault(e) {
      e.preventDefault();
    }

    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch (e) { }

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    slider.addEventListener('mouseenter', () => {
      window.addEventListener(wheelEvent, preventDefault, wheelOpt)
    })

    slider.addEventListener('mouseleave', () => {
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    })

    slider.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        slider.scrollLeft -= 300;
      } else {
        slider.scrollLeft += 300;
      }
    })
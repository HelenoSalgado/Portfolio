var slideIndex = 1;
slideDivs(slideIndex);

function showDivs(n) {
  slideDivs(slideIndex += n);
}

function slideDivs(n) {
  var i;
  var x = document.querySelectorAll(".slide-certificado");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

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
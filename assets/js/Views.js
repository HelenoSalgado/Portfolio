class Views {
    desenho = document.querySelector('header');
    #iVolume = 0;
    #slideIndex = 1;

    #contentIconOf = "M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z";

    #contentIconOn = "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z";


  activeHamburguer() {
    document.querySelector('.menu-hamburguer').addEventListener('click', () => {
      let menuActive = document.querySelector('.menu-hamburguer').classList.toggle('show-menu');
      document.querySelector('.sidebar').classList.toggle('sidebarVisible');
      menuActive;

      if (menuActive) {
        if (this.#iVolume == 0) {
          new Audio('assets/sons/puxado.wav').play();
        }
        this.desenho.addEventListener('mousemove', this.trailMouse);
      } else {
        if (this.#iVolume == 0) {
          new Audio('assets/sons/transicao.wav').play();
        }
        this.desenho.removeEventListener('mousemove', this.trailMouse);
      }

    });
  }

  trailMouse(event) {
    let cursor = document.createElement('span');
    cursor.classList.add('cursor');
    
    let x = event.clientX;
    let y = event.clientY;

    cursor.setAttribute('style', `top:${y + 15}px; left:${x + 15}px;`);

    setTimeout(() => {
      cursor.remove();
    }, 500);
    
    this.appendChild(cursor);
  }

  sound() {
    document.querySelector(".volume").addEventListener("click", () => {
      if (this.#iVolume == 0) {
        this.#iVolume++;
        this.renderSoundIcon(this.#contentIconOf);
      } else {
        new Audio('assets/sons/pop.wav').play();
        this.#iVolume--;
        this.renderSoundIcon(this.#contentIconOn);
      }
    })
  }

  slideCertifications() {
    document.querySelector('.slides-button').children[0].addEventListener('click', () => {
      this.showDivs(1);
    });
    document.querySelector('.slides-button').children[1].addEventListener('click', () => {
      this.showDivs(-1);
    });
  }

  showDivs(n) {
    this.slideDivs(this.#slideIndex);
    if (this.#iVolume == 0) new Audio('assets/sons/puxado-pop.wav').play();
    this.slideDivs(this.#slideIndex += n);
  }

  slideDivs(n) {
    const slides = document.querySelectorAll(".slide-certificado");
    if (n > slides.length) { this.#slideIndex = 1 }
    if (n < 1) { this.#slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[this.#slideIndex - 1].style.display = "block";
    slides[this.#slideIndex - 1].style.opacity = "0";
    slides[this.#slideIndex - 1].style.transition = ".3s ease-in";

    setTimeout(() => {
      slides[this.#slideIndex - 1].style.opacity = "10";
    }, 100);
  }

  renderSoundIcon(content) {
    const fixedBar = document.querySelector('.fixed-bar');
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  
    iconSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    iconSvg.setAttribute('viewBox', '0 0 448 512');
    iconPath.setAttribute('d', content);
    iconSvg.appendChild(iconPath);
    iconSvg.classList.add('volume');

    document.querySelector('.volume').remove();
    fixedBar.appendChild(iconSvg);
  
  }

  buttonSoud(){
    document.querySelectorAll('.empurravel').forEach(button => {
      button.addEventListener("click", () => {
        if (this.#iVolume == 0) new Audio('assets/sons/button-mola.wav').play();
      })
    })
  }
  
}

export default new Views();
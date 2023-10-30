class Views {
    
    #hamburguer = document.querySelector('.menu-hamburguer');
    //cursor = document.querySelector('.cursor');
    #button = document.querySelectorAll('.empurravel');
    #buttons = document.querySelectorAll('.botao-inclina');
    #icone = document.querySelectorAll('.icone-inclina');
    #cardProjects = document.querySelectorAll('.card');
    #imgProject = document.querySelectorAll(".card-capa");
    #textFocus = document.querySelectorAll('.card-text');
    desenho = document.querySelector('body');
    #send = document.querySelector('form button');
    #somMenuOn = document.querySelector('.som-menu-on');
    #somMenuOf = document.querySelector('.som-menu-of');
    #soundCertificates = document.querySelector('.som-certificados');
    #buttonsCertificates = document.querySelector('.slide-button');
    #soundProjects = document.querySelector('.som-projetos');
    #soundSend = document.querySelector('.button-enviar');
    #volume = document.querySelector(".logo i");
    #soundVolume = document.querySelector(".som-volume");
    #x = document.querySelectorAll(".slide-certificado");
    #iVolume = 0;
    #slideIndex = 1;


  activeHamburguer() {
    this.#hamburguer.addEventListener('click', () => {
      let menuActive = document.querySelector('.container').classList.toggle('show-menu');
      menuActive;

      if (menuActive) {
        if (this.#iVolume == 0) {
          this.#somMenuOn.play();
        }
        this.desenho.addEventListener('mousemove', this.trailMouse);
      } else {
        if (this.#iVolume == 0) {
          this.#somMenuOf.play();
        }
        this.desenho.removeEventListener('mousemove', this.trailMouse);
      }

    })
  }

  button_0() {
    this.#button[0].addEventListener("click", () => {
      if (this.#iVolume == 0) {
        this.#soundSend.play();
      }
    })
  }

  button_1() {
    this.#button[1].addEventListener("click", () => {
      const urlCv = "https://heleno.dev/assets/doc/curriculo-heleno-salgado.pdf";
      if (this.#iVolume == 0) {
        this.#soundSend.play();
      }
      setTimeout(() => {
        window.open(urlCv, '_blank noopener noreferrer').focus();
      }, 500);
    })
  }

  button_2() {
    this.#button[2].addEventListener("click", () => {
      if (this.#iVolume == 0) {
        this.#soundSend.play();
      }
    })
  }

  trailMouse(event) {

    let header = document.querySelector('header');
    let cursor = document.createElement('span');
    cursor.classList.add('cursor');

    header.appendChild(cursor);

    let x = event.clientX;
    let y = event.clientY;

    cursor.setAttribute('style', `top:${y + 15}px; left:${x + 15}px;`);

    setTimeout(() => {
      cursor.remove();
    }, 500);
  }

  sound() {
    this.#volume.addEventListener("click", () => {

      if (this.#iVolume == 0) {
        this.#volume.classList.add("fa-volume-xmark");
        this.#iVolume++;
      } else {
        this.#soundVolume.play();
        this.#volume.classList.remove("fa-volume-xmark");
        this.#iVolume--;
      }
    })
  }

  projects() {
    this.#cardProjects.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        this.#imgProject.forEach((img) => {
          img.addEventListener('mouseenter', () => {
            if (window.innerWidth < 660) {
              if (this.#iVolume == 0) {
                this.#soundProjects.play();
              }
            }
            img.classList.add("zoom");
            setTimeout(() => {
              img.style.display = "none";
            }, 300);
          })
        })
      })
      card.addEventListener('mouseleave', () => {
        this.#imgProject.forEach((img) => {
          img.style.display = "block";
          img.classList.remove("zoom");
        })
      })
    })
  }

  buttons() {
    this.#buttons.forEach((button) => {
      button.addEventListener('mouseover', () => {
        icone.forEach((icone) => {
          icone.classList.add("inclina-icone");

          button.addEventListener('mouseout', () => {
            icone.classList.remove("inclina-icone");
          })
        });
      })
    })
  }

  slideCertifications() {

    this.#buttonsCertificates.children[0].addEventListener('click', () => {
      this.showDivs(1);
    })

    this.#buttonsCertificates.children[1].addEventListener('click', () => {
      this.showDivs(-1);
    })

  }

  showDivs(n) {

    this.slideDivs(this.#slideIndex);

    if (this.#iVolume == 0)
      this.#soundCertificates.play();

    this.slideDivs(this.#slideIndex += n);
  }

  slideDivs(n) {
    if (n > this.#x.length) { this.#slideIndex = 1 }
    if (n < 1) { this.#slideIndex = this.#x.length }
    for (let i = 0; i < this.#x.length; i++) {
      this.#x[i].style.display = "none";
    }
    this.#x[this.#slideIndex - 1].style.display = "block";
    this.#x[this.#slideIndex - 1].style.opacity = "0";
    this.#x[this.#slideIndex - 1].style.transition = ".3s ease-in";

    setTimeout(() => {
      this.#x[this.#slideIndex - 1].style.opacity = "10";
    }, 100);
  }

  sendEmail() {
    this.#send.addEventListener("click", (event) => {

      event.preventDefault();

      if (this.#iVolume == 0) {
        this.#soundSend.play();
      }

      const contact = {
        name: document.querySelector(".input-nome").value,
        email: document.querySelector(".input-email").value,
        text: document.querySelector(".input-texto").value,
        alert: document.querySelector(".mensagem-alerta")
      }

      contact.alert.innerHTML = "";
      contact.alert.classList.remove("mensagem-sucesso");

      const message = [
        'Por favor, preencha todos os campos.',
        'Obrigado, email enviado com Sucesso.',
        'Ops... Parece que seu e-mail está incompleto'
      ]

      if (((contact.name || contact.email) == "") || contact.text == "") return contact.alert.innerHTML += message[0];

      const verifyEmail = /\S+@\S+\.\S+/;

      if (!verifyEmail.test(contact.email)) return contact.alert.innerHTML += message[2];

      (async () => {
        await fetch('https://old-cloud-9768.fly.dev/user/email', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        }).then(async (res) => {

          if (res.status == 201) {
            const form = document.querySelector("form");
            form.reset();

            contact.alert.innerHTML += message[1];
            contact.alert.classList.add("mensagem-sucesso");

            return;
          }

          let result = await res.json();
          contact.alert.innerHTML += result.message[0];

        }).catch(err => {
          contact.alert.innerHTML += err.message;
        });

      })();

    });
  }
}

export default new Views();
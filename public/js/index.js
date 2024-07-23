let desenho = document.querySelector("header");
const boxVolume = document.querySelector(".volume");
let iVolume = 0;
let slideIndex = 1;

const contentIconOf =
  "M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z";

const contentIconOn =
  "M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z";

// Ativar menu
document.querySelector(".menu-hamburguer").addEventListener("click", () => {
  let menuActive = document.querySelector(".menu-hamburguer").classList.toggle("show-menu");
  document.querySelector(".sidebar").classList.toggle("sidebarVisible");

  if (menuActive) {
    if (iVolume == 0) {
      new Audio("/sons/puxado.wav").play();
    }
    desenho.addEventListener("mousemove", trailMouse);
  } else {
    if (iVolume == 0) {
      new Audio("/sons/transicao.wav").play();
    }
    desenho.removeEventListener("mousemove", trailMouse);
  }
});

// Rastro do mause
function trailMouse(event) {
  let cursor = document.createElement("span");
  cursor.classList.add("cursor");

  let x = event.clientX;
  let y = event.clientY;

  cursor.setAttribute("style", `top:${y + 15}px; left:${x + 15}px;`);

  setTimeout(() => {
    cursor.remove();
  }, 500);

  this.appendChild(cursor);
}

// Ativar|Desativar som
boxVolume.addEventListener("click", () => {
  boxVolume.firstChild.remove();
  if (iVolume == 0) {
    iVolume++;
    renderSoundIcon(contentIconOf);
  } else {
    new Audio("/sons/pop.wav").play();
    iVolume--;
    renderSoundIcon(contentIconOn);
  }
});

function showDivs(n) {
  slideDivs(slideIndex);
  if (iVolume == 0) new Audio("/sons/puxado-pop.wav").play();
  slideDivs((slideIndex += n));
}

// Avançar slide
document.querySelector(".slides-button").children[0].addEventListener("click", () => {
  showDivs(1);
});
// Retornar slide
document.querySelector(".slides-button").children[1].addEventListener("click", () => {
  showDivs(-1);
});

function slideDivs(n) {
  const slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "10";
  }
  slides[slideIndex - 1].style.opacity = "0";
}

function renderSoundIcon(content) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconSvg.setAttribute("viewBox", "0 0 448 512");
  iconPath.setAttribute("d", content);
  iconSvg.appendChild(iconPath);
  boxVolume.appendChild(iconSvg);

}

document.querySelectorAll(".empurravel").forEach((button) => {
  button.addEventListener("click", () => {
    if (iVolume == 0) new Audio("/sons/button-mola.wav").play();
  });
});

// Enviar email
document.querySelector('form button').addEventListener("click", (event) => {

  event.preventDefault();

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
    await fetch('https://utils-production-bed1.up.railway.app/email', {
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

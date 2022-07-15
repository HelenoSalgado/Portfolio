function alternaTema(checked) {

    let darkMode = document.querySelector("#temaClaro");
    let lightMode = document.querySelector("#temaEscuro");
    let iconeTema = document.querySelector(".dark-mode i");
    

    if (checked == true) {

        lightMode.disabled = false;
        darkMode.disabled = true;
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-star-half-stroke");
        console.log(iconeTema)

    }
    if (checked == false) {
        lightMode.disabled = true;
        darkMode.disabled = false;
        iconeTema.classList.remove("fa-star-half-stroke");
        iconeTema.classList.add("fa-sun");
    }

    
}
var iVolume = 0;
var somEnviar = document.querySelector('.button-enviar');
var enviar = document.querySelector('form button');
enviar.addEventListener("click", (event) => {

    event.preventDefault();
  
    if (iVolume == 0) {
      somEnviar.play();
     }
  
    var inputNome = document.querySelector(".input-nome").value;
    var inputEmail = document.querySelector(".input-email").value;
    var alert = document.querySelector(".mensagem-alerta");
  
    alert.innerHTML = "";
  
    var verificaEmail = {
       arroba: inputEmail.indexOf("@") > -1,
       ponto: inputEmail.indexOf(".") > -1
    }
  
    var mensagem = [
      'Por favor, digite um nome e um email',
      'Por favor, digite um nome',
      'Por favor, digite um email',
      'Obrigado, email enviado com Sucesso.',
      'Ops... Verifique o "@" ou "." do email, por favor.'
    ]
  
    if (inputNome == "" && inputEmail == "") {
      alert.innerHTML += mensagem[0];
      return
    }else if(inputNome == "") {
      alert.innerHTML += mensagem[1];
      return
    }else if(inputEmail == ""){
      alert.innerHTML += mensagem[2];
      return
    }else if(verificaEmail.arroba == true 
          && verificaEmail.ponto == true){
  
          const postEmail = new Request("https://formsubmit.co/helenosalgado19@gmail.com", {
            method: "POST",
            body: new FormData( document.querySelector("form") )
          });
  
         fetch(postEmail).then( response => {
            return response.text();
         })
         .then ( result => {
            alert.innerHTML += mensagem[3];
            alert.classList.add("mensagem-sucesso");
            var form = document.querySelector("form");
            form.reset();
         });
    }else{
      alert.innerHTML += mensagem[4];
    }
  })

function shareUrl(e){ 
  var url = window.location.href.toString();   
  console.log(url); 
  var share = e.target;
  console.log(share.src)
  if(share.src == "https:/blog/img/icons/facebook_icon.svg"){

    location.href= "www.facebook.com/sharer/sharer.php?u=" + url;
    
  }
}

var apiFrases = document.querySelector(".frases-aleatorias");

async function getFrases() {

    const response = await fetch("https://positive-vibes-api.herokuapp.com/quotes/random");
    var data = await response.json();
    

}
getFrases();
apiFrases.textContent = "rgmipodtgopdmkhlf bmkrglrefmkg bkopsrldbglkbgerd slfbmfḉes dlmf lkepsflbp erres bplte,ṕbrfkfreo hbprmel gekeh obyymp ";
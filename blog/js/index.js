var iVolume = 0;
var volume = document.querySelector(".sound");
var popSound = document.querySelector(".pop-sound");
var articleLink = document.querySelectorAll(".article-link");
var articleLinkSound = document.querySelector(".article-link-sound");
var submitSound = document.querySelector('.button-enviar');
var submit = document.querySelector('form button');



function alternaTema(checked) {
  
  if(iVolume == 0){
     popSound.play();
  }

    let darkMode = document.querySelector("#temaClaro");
    let lightMode = document.querySelector("#temaEscuro");
    let iconeTema = document.querySelector(".dark-mode i");
    

    if (checked == true) {

        lightMode.disabled = false;
        darkMode.disabled = true;
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-star-half-stroke");

    }
    if (checked == false) {
        lightMode.disabled = true;
        darkMode.disabled = false;
        iconeTema.classList.remove("fa-star-half-stroke");
        iconeTema.classList.add("fa-sun");
    }

    
}


volume.addEventListener("click", () =>{
  
  if (iVolume == 0) {
    volume.classList.add("fa-volume-xmark");
    iVolume++;
  }else{
    popSound.play();
    volume.classList.remove("fa-volume-xmark");
    iVolume--;
  }
})

articleLink.forEach((link) => {
  link.addEventListener("mouseover", (link) =>{
    if (iVolume == 0) {
      articleLinkSound.play();
    }
  }) 
});

submit.addEventListener("click", (event) => {

    event.preventDefault();
  
    if (iVolume == 0) {
      submitSound.play();
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

var soundIcons = document.querySelectorAll(".compartilhe-icons img");
soundIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () =>{
    if (iVolume == 0) {
      articleLinkSound.play();
    }
  })
});

function shareUrl(e){ 

  var url = window.location.href.toString();   
  var share = e.target;

  if(share.src == "https://heleno.dev/blog/img/icons/facebook_icon.svg"){
     window.location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
  }
  if(share.src == "https://heleno.dev/blog/img/icons/whatsapp_icon.svg"){
     window.location.href = "https://api.whatsapp.com/send?text=" + url;
  }
  if(share.src == "https://heleno.dev/blog/img/icons/twitter_icon.svg"){
     window.location.href = "https://twitter.com/intent/tweet?url=[" + url + "]&text=[Encontrei um artigo interessante, venha conferir!]&via=[@HelenoSalgado]&hashtags=[frontend, html, css, javascript]" + url;
  }
  if(share.src == "https://heleno.dev/blog/img/icons/linkedin_icon.svg"){
     window.location.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;
  }
  if(share.src == "https://heleno.dev/blog/img/icons/pocket_logo.svg"){
     window.location.href = "https://getpocket.com/save?url=" + url;
  }
}

var like = document.querySelector(".like");
like.addEventListener("click", () =>{
  if (iVolume == 0) {
    popSound.play();
   }
})

var sobreMim = document.querySelector(".sobre-mim-texto");

sobreMim.textContent = "Mora no interior de Minas Gerais, tem 25 anos. Estuda Teologia no Instituto Reformado Santo Evangelho - IRSE. Cursa desenvolvimento Web pelo programa One - Oracle Next Education. Gosta de aproveitar a família, os verdadeiros amigos e, entreter-se na cultura livresca, nos clássicos, nos bons.";
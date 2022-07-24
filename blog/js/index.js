var hamburguer = document.querySelector(".menu-hamburguer"); 
var iVolume = 0;
var volume = document.querySelector(".sound");
var popSound = document.querySelector(".pop-sound");
var articleLink = document.querySelectorAll(".article-link");
var articleLinkSound = document.querySelector(".article-link-sound");
var submitSound = document.querySelector('.button-enviar');
var submit = document.querySelector('form button');
var iMenu = 1
var resultSearch = document.querySelector(".search");
var inputSearch = document.querySelector(".search-link");
var iSearch = 1;
var soundIcons = document.querySelectorAll(".compartilhe-icons img");
var articleRelated = document.querySelectorAll(".title-article-related")
var sobreMim = document.querySelector(".sobre-mim-texto");

hamburguer.addEventListener("click", function(){
    hamburguer.classList.toggle("show-menu");
    var menu = document.querySelector(".navigation-menu");
    var config = document.querySelector(".config");

    if (iMenu == 1) {
      setTimeout(() => {
        config.style.opacity = "10"
      }, 500);
      menu.style.top = "70px";
      iMenu++;
    }
    else{
      menu.style.top = "-101%";
      config.style.opacity = "0"
      iMenu--;
    }
    
});

function alternaTema(checked) {
  
  if(iVolume == 0){
     popSound.play();
  }

    let iconeTema = document.querySelector(".dark-mode img");
    let styleMode = document.querySelector("head");
    let dark = document.createElement("link")
    dark.rel = "stylesheet";

    if (checked == true) {
        dark.href = "/blog/css/mode-dark.css";
        iconeTema.src = "/blog/img/icons/mode-dark.svg";

    }
    if (checked == false) {
        dark.href = "/blog/css/mode-light.css";
        iconeTema.src = "/blog/img/icons/clear-sun.svg";
    }

    styleMode.appendChild(dark);

}

volume.addEventListener("click", () =>{
  
  if (iVolume == 0) {
    volume.src = "/blog/img/icons/sound-mute.svg";
    iVolume++;
  }else{
    popSound.play();
    volume.src = "/blog/img/icons/sound.svg";
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
     window.location.href = "https://twitter.com/intent/tweet?url=" + url + "]&text=Encontrei um artigo interessante, venha conferir!&via=@HelenoSalgado&hashtags=frontend html, css, javascript" + url;
  }
  if(share.src == "https://heleno.dev/blog/img/icons/linkedin_icon.svg"){
     window.location.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;
  }
  if(share.src == "https://heleno.dev/blog/img/icons/pocket_logo.svg"){
     window.location.href = "https://getpocket.com/save?url=" + url;
  }
}

articleRelated.forEach((related) => {
  related.addEventListener("mouseover", () =>{
    if (iVolume == 0) {
      articleLinkSound.play();
    }
  })
});

var like = document.querySelector(".like");
like.addEventListener("click", () =>{
  if (iVolume == 0) {
    popSound.play();
   }
})
var menuArticle = document.querySelector(".menu-link-articles");
var menuArticleVisible = 1;
var main = document.querySelector("main");
var countSearch = 1;

menuArticle.addEventListener("click", () =>{
    
    var artigos = document.querySelector(".menu-item-articles");
    
    var arrow = document.querySelector(".menu-link-articles svg")

    if (menuArticleVisible == 1) {
        artigos.classList.add("item-articles-visible");
        arrow.classList.add("up-arrow");
        menuArticleVisible--;
    }else if(menuArticleVisible == 0){
        artigos.classList.remove("item-articles-visible");
        arrow.classList.remove("up-arrow");
        menuArticleVisible++;
    }
})

inputSearch.addEventListener("click", () =>{

   if (countSearch == 1) {

       resultSearch.style.display = "block";

       if (iSearch == 1) {
        var divSearch = document.createElement("div");
        divSearch.classList.add("gcse-search");

        resultSearch.classList.add("menu-item-search");
        resultSearch.appendChild(divSearch);

        scriptSearch = document.createElement("script");
        scriptSearch.src = "https://cse.google.com/cse.js?cx=f0865c1f9edece276";
        resultSearch.appendChild(scriptSearch)

        iSearch--;

       }

       countSearch--;

   }else if(countSearch == 0){
        resultSearch.style.display = "none";
        countSearch++;
   }
     
})

main.addEventListener("click", () =>{
    var artigos = document.querySelector(".menu-item-articles");
    var arrow = document.querySelector(".menu-link-articles svg")
    artigos.classList.remove("item-articles-visible");
    arrow.classList.remove("up-arrow");
    resultSearch.style.display = "none";
})

sobreMim.textContent = "Mora no interior de Minas Gerais, tem 25 anos. Estuda Teologia no Instituto Reformado Santo Evangelho - IRSE. Cursa desenvolvimento Web pelo programa One - Oracle Next Education. Gosta de aproveitar a família, os verdadeiros amigos e, entreter-se na cultura livresca, nos clássicos, nos bons.";
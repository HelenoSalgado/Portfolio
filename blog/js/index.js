let hamburguer = document.querySelector(".menu-hamburguer")
let iVolume = 0
let volume = document.querySelector(".sound")
let popSound = document.querySelector(".pop-sound")
let postPDF = document.querySelector(".baixar-pdf")
let articleLink = document.querySelectorAll(".article-link")
let articleLinkSound = document.querySelector(".article-link-sound")
let submitSound = document.querySelector('.button-enviar')
let submit = document.querySelector('form button')
let iMenu = 1
let resultSearch = document.querySelector(".search")
let inputSearch = document.querySelector(".search-link")
let iSearch = 1
let soundIcons = document.querySelectorAll(".compartilhe-icons img")
let articleRelated = document.querySelectorAll(".artigos-relacionados a:nth-child(2)")
let sobreMim = document.querySelector(".sobre-mim-texto")

function alternaTema(checked) {

  let iconeTema = document.querySelector(".dark-mode img")
  let styleMode = document.querySelector("head")
  let dark = document.createElement("link")
  dark.rel = "stylesheet"
  
  if(iVolume == 0){
    popSound.play()
  }
  
  if (checked == true) {
    dark.href = "/blog/css/mode-dark.css"
    iconeTema.src = "/blog/img/icons/mode-dark.svg"
  }
  if (checked == false) {
    dark.href = "/blog/css/mode-light.css"
    iconeTema.src = "/blog/img/icons/clear-sun.svg"
  }
  styleMode.appendChild(dark)
}

hamburguer.addEventListener("click", function(){
  hamburguer.classList.toggle("show-menu")
  let menu = document.querySelector(".navigation-menu")
  let config = document.querySelector(".config")
  
  if (iMenu == 1) {
    setTimeout(() => {
      config.style.opacity = "10"
    }, 500)
    menu.style.top = "calc(0% + 70px)"
    iMenu++
  }
  else{
    menu.style.top = "-101%"
    config.style.opacity = "0"
    iMenu--
  }
  
})

volume.addEventListener("click", () =>{
  
  if (iVolume == 0) {
    volume.src = "/blog/img/icons/sound-mute.svg"
    iVolume++
  }else{
    popSound.play()
    volume.src = "/blog/img/icons/sound.svg"
    iVolume--
  }
})

articleLink.forEach((link) => {
  link.addEventListener("mouseover", (link) =>{
    if (iVolume == 0) {
      articleLinkSound.play();
    }
  }) 
});

postPDF.addEventListener("click", () => {
  const url = "https://heleno.dev/blog/doc/o-que-e-hospedagem-de-sites.pdf";
    window.open(url, '_blank noopener noreferrer').focus()
})

submit.addEventListener("click", (event) => {
  
  event.preventDefault()
  
  if (iVolume == 0) {
    submitSound.play()
  }
  
  let inputNome = document.querySelector(".input-nome").value
  let inputEmail = document.querySelector(".input-email").value
  let alert = document.querySelector(".mensagem-alerta")
  
  alert.innerHTML = ""
  
  let verificaEmail = {
    arroba: inputEmail.indexOf("@") > -1,
    ponto: inputEmail.indexOf(".") > -1
  }
  
  let mensagem = [
    'Por favor, digite um nome e um email',
    'Por favor, digite um nome',
    'Por favor, digite um email',
    'Obrigado, email enviado com Sucesso.',
    'Ops... Verifique o "@" ou "." do email, por favor.'
  ]
  
  if (inputNome == "" && inputEmail == "") {
    alert.innerHTML += mensagem[0]
    return
  }else if(inputNome == "") {
    alert.innerHTML += mensagem[1]
    return
  }else if(inputEmail == ""){
    alert.innerHTML += mensagem[2]
    return
  }else if(verificaEmail.arroba == true 
    && verificaEmail.ponto == true){
      
      const postEmail = new Request("https://formsubmit.co/helenosalgado19@gmail.com", {
      method: "POST",
      body: new FormData( document.querySelector("form") )
    });
    
    fetch(postEmail).then( response => {
      return response.text()
    })
    .then ( result => {
      alert.innerHTML += mensagem[3]
      alert.classList.add("mensagem-sucesso")
      let form = document.querySelector("form")
      form.reset();
    });
  }else{
    alert.innerHTML += mensagem[4]
  }
})

soundIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () =>{
    if (iVolume == 0) {
      articleLinkSound.play()
    }
  })
});

function shareUrl(e){ 
  
  let url = window.location.href.toString()  
  let share = e.target
  
  if(share.src == "https://heleno.dev/blog/img/icons/facebook_icon.svg"){
  window.location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url
}
if(share.src == "https://heleno.dev/blog/img/icons/whatsapp_icon.svg"){
window.location.href = "https://api.whatsapp.com/send?text=" + url
}
if(share.src == "https://heleno.dev/blog/img/icons/twitter_icon.svg"){
window.location.href = "https://twitter.com/intent/tweet?url=" + url + "]&text=Encontrei um artigo interessante, venha conferir!&via=@HelenoSalgado&hashtags=frontend html, css, javascript" + url
}
if(share.src == "https://heleno.dev/blog/img/icons/linkedin_icon.svg"){
window.location.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url
}
if(share.src == "https://heleno.dev/blog/img/icons/pocket_logo.svg"){
window.location.href = "https://getpocket.com/save?url=" + url
}
}

articleRelated.forEach((related) => {
  related.addEventListener("mouseover", () =>{
    if (iVolume == 0) {
      articleLinkSound.play()
    }
  })
});

let like = document.querySelector(".like")
like.addEventListener("click", () =>{
  if (iVolume == 0) {
    popSound.play()
  }
})
let menuArticle = document.querySelector(".menu-link-articles")
let menuArticleVisible = 1
let main = document.querySelector("main")
let countSearch = 1

menuArticle.addEventListener("click", () =>{
  
  let artigos = document.querySelector(".menu-item-articles")
  
  let arrow = document.querySelector(".menu-link-articles svg")
  
  if (menuArticleVisible == 1) {
    artigos.classList.add("item-articles-visible")
    arrow.classList.add("up-arrow");
    menuArticleVisible--;
  }else if(menuArticleVisible == 0){
    artigos.classList.remove("item-articles-visible")
    arrow.classList.remove("up-arrow")
    menuArticleVisible++
  }
})

inputSearch.addEventListener("click", () =>{
  
  if (countSearch == 1) {
    
    resultSearch.style.display = "block"
    
    if (iSearch == 1) {
      let divSearch = document.createElement("div")
      divSearch.classList.add("gcse-search")
      
      resultSearch.classList.add("menu-item-search")
      resultSearch.appendChild(divSearch);
      
      scriptSearch = document.createElement("script")
      scriptSearch.src = "https://cse.google.com/cse.js?cx=f0865c1f9edece276";
      resultSearch.appendChild(scriptSearch)
      
      iSearch--
      
    }
    
    countSearch--
    
  }else if(countSearch == 0){
    resultSearch.style.display = "none"
    countSearch++
  }
  
})

main.addEventListener("click", () =>{
  let artigos = document.querySelector(".menu-item-articles")
  let arrow = document.querySelector(".menu-link-articles svg")
  artigos.classList.remove("item-articles-visible")
  arrow.classList.remove("up-arrow")
  resultSearch.style.display = "none"
})

sobreMim.textContent = "Mora no interior de Minas Gerais, tem 25 anos. Estuda Teologia no Instituto Reformado Santo Evangelho - IRSE. Cursa desenvolvimento Web pelo programa One - Oracle Next Education."
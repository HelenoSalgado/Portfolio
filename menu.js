var hamburguer = document.querySelector(".hamburguer"); 
  hamburguer.addEventListener("click", function(){
    document.querySelector(".conteiner").classList.toggle("show-menu");
});
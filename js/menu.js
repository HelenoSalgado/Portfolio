var hamburguer = document.querySelector(".hamburguer"); 
  hamburguer.addEventListener("click", function(){
    document.querySelector(".conteiner").classList.toggle("show-menu");
});

document.querySelector("#qtde").addEventListener("change", atualizarpreco)
document.querySelector("#js").addEventListener("change", atualizarpreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarpreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarpreco)
document.querySelector("#prazo").addEventListener("change", function(){
  const prazo = document.querySelector("#prazo").value
  document.querySelector ("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
atualizarpreco() 
})


function atualizarpreco(){
  const qtde = document.querySelector("#qtde").value
  const temJS = document.querySelector("#js").checked
  const incluiLayout = document.querySelector("#layout-sim").checked
  const prazo = document.querySelector("#prazo").value

  let preco = qtde * 100;
  if (temJS) preco *= 1.1
  if (incluiLayout) preco += 500
  let taxaUrgencia = 1 - prazo*0.1;
  preco *= 1 + taxaUrgencia

  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

(function(){
  var setting = {"height":350,"width":500,"zoom":18,"queryString":"Rua 41, 110 - São Sebastião, Brasília - DF, 71693-042, Brasil","place_id":"EkBSdWEgNDEsIDExMCAtIFPDo28gU2ViYXN0acOjbywgQnJhc8OtbGlhIC0gREYsIDcxNjkzLTA0MiwgQnJhc2lsIlASTgo0CjIJnenqedEhWpMRTOlTTnCffWkaHgsQ7sHuoQEaFAoSCfHeJnEoIFqTEXq7UyHowPBBDBBuKhQKEgkdhqh90SFakxEuzGqW9ViHIQ","satellite":false,"centerCoord":[-15.898352604523119,-47.7707782],"cid":"0xa3bc8011f5c80556","lang":"pt","cityUrl":"/brazil/brasilia-14704","cityAnchorText":"","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"469373"};

  var d = document;
  var s = d.createElement('script');
  s.src = 'https://1map.com/js/script-for-user.js?embed_id=469373';
  s.async = true;

  s.onload = function (e) {
    window.OneMap.initMap(setting)
  };

  var to = d.getElementsByTagName('script')[0];
  to.parentNode.insertBefore(s, to);
})();
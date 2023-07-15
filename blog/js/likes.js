let mostra = document.querySelector('.count-motion');
let curtidas = document.querySelector('.like');
let curtidasTotal;

async function getLikes(){
    let response = await fetch("https://heleno.dev/php/get-likes.php");
    var data = await response.json();
    mostra.innerText = data.Likes;
}getLikes();

curtidas.addEventListener("click", () =>{
    
    if(localStorage.curtidas == undefined){
    localStorage.curtidas = 0;
    }
    
    if(localStorage.curtidas == 0){
        localStorage.curtidas++;
        like = 1 + Number(mostra.textContent);
        curtidasTotal++;
    }else{
        localStorage.curtidas = 0;
        like = -1 + Number(mostra.textContent);
        curtidasTotal--;
    }
    mostra.innerText = like;
    data = {
      id: '1',
      curtidas: like
    }
    postLike();
})

async function postLike(){
    fetch("https://heleno.dev/php/increment-likes.php", {
      method: "POST",
      body: JSON.stringify(data)
    })
}
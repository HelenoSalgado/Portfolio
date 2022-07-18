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

var resultSearch = document.querySelector(".search");
var inputSearch = document.querySelector(".search-link");

inputSearch.addEventListener("click", () =>{

   if (countSearch == 1) {
    
       var divSearch = document.createElement("div");
       divSearch.classList.add("gcse-search");

       resultSearch.classList.add("menu-item-search");
       resultSearch.appendChild(divSearch);

       scriptSearch = document.createElement("script");
       scriptSearch.src = "https://cse.google.com/cse.js?cx=f0865c1f9edece276";
       resultSearch.appendChild(scriptSearch)

       countSearch--;

   }else if(countSearch == 0){
        
       
   }
     
})

main.addEventListener("click", () =>{
    var artigos = document.querySelector(".menu-item-articles");
    artigos.classList.remove("item-articles-visible");

    //resultSearch.style.position = "absolute";
})

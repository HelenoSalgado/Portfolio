var menuArticle = document.querySelector(".menu-link-articles");
var menuArticleVisible = 1;

menuArticle.addEventListener("click", () =>{
    var artigos = document.querySelector(".menu-item-articles");
    var arrow = document.querySelector(".menu-link-articles img")

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


   var divSearch = document.createElement("div");
   divSearch.classList.add("gcse-search");

   resultSearch.classList.add("menu-item-search");
   resultSearch.appendChild(divSearch);

       
       scriptSearch = document.createElement("script");
       scriptSearch.src = "https://cse.google.com/cse.js?cx=f0865c1f9edece276";
       resultSearch.appendChild(scriptSearch)
       
})

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
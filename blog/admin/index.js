let commentsResponse = document.querySelector(".comments-response")
let searchComments = document.querySelector(".search-comments")

let id = document.createElement("strong")
let name = document.createElement("h3")
let comment = document.createElement("p")
let box = document.createElement("div")

searchComments.addEventListener("click", async function(){
    
        
        let response = await fetch("https://heleno.dev/blog/admin/php/get-comments.php");
        
        var data = await response.json();
        
        
        setTimeout(() => {
        
        data.forEach((info) => {

            var info = info
            
            id = info['id']
            name = info['Nome']
            comment = info['Comment']
            
            commentsResponse.innerText = id + name + comment
            

            console.log(commentsResponse)
     
        })
   
        },500);
        
        
        
})

function alternaTema(checked) {

    let darkMode = document.querySelector("#temaClaro");
    let lightMode = document.querySelector("#temaEscuro");
    let iconeTema = document.querySelector(".dark-mode i");
    

    if (checked == true) {

        lightMode.disabled = false;
        darkMode.disabled = true;
        iconeTema.classList.remove("fa-sun");
        iconeTema.classList.add("fa-star-half-stroke");
        console.log(iconeTema)

    }
    if (checked == false) {
        lightMode.disabled = true;
        darkMode.disabled = false;
        iconeTema.classList.remove("fa-star-half-stroke");
        iconeTema.classList.add("fa-sun");
    }

    
}
function share(){
    if (navigator.share !== undefined) {
        navigator.share({
            title: 'Desenvolvedor Front End',
            text: 'Conhecendo algumas tecnologias da Rede Mundial de Computadores.',
            url: 'https://heleno.dev/blog/o-que-e-hospedagem-de-sites',
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
}
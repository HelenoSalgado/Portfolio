<template>
    <div class="container-contato" id="contato">
        <p class="mensagem-contato">Posso ajudá-lo(a) em algum projeto?</p>
        <form action="" method="post">
            <label for="name">
                <input class="input-nome" type="text" id="name" placeholder="Nome Completo" autocomplete="name">
                <LazyIconsUser />
            </label>
            <label for="email">
                <input class="input-email" type="email" id="email" placeholder="Email" autocomplete="email">
                <LazyIconsArroba />
            </label>
            <textarea class="input-texto" name="mensage" cols="30" rows="7"
                placeholder="Envie-me uma mensagem."></textarea>
            <span class="mensagem-alerta"></span>
            <button type="submit" class="empurravel">
               <span class="sombra"></span>
               <span class="borda"></span>
               <span class="frente frente-enviar">Enviar<LazyIconsEmail/></span>
            </button> 
        </form>
    </div>
</template>
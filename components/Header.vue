<template>
    <header id="home">
    <div class="fixed-bar">
      <img src="/img/hsl-logo-transparent.webp" alt="logo">
      <span class="volume">
        <IconsVolume/>
      </span>
      <div class="menu-hamburguer">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="apresentacao">
      <div class="banner">
       <h1>Olá, sou Heleno Salgado Lopes</h1>
        <p>Freelancer em desenvolvimento com NodeJs (Express, Nest e Vue) &#x1F60A;. Estudante de Teologia e apaixonado por programação, certificado pela <em>One - Oracle Next Education</em>.</p>
        <div class="botoes">
          <Button3D href="https://www.linkedin.com/in/helenosalgado">Linked<IconsLinkedin/></Button3D>
          <Button3D href="/doc/curriculo-heleno-salgado.pdf">Currículo<IconsDownload/></Button3D>
        </div>
      </div> 
      <div class="img-wrapper">
        <NuxtImg width="350px" src="/img/home/heleno-val-picture.webp" alt="Heleno Salgado"/>
       <!-- <picture>
          <img src="/img/home/heleno-val-picture.webp" alt="Heleno Salgado">
       </picture> -->
      </div> 
    </div>
    <MenuAside/>
  </header> 
</template>
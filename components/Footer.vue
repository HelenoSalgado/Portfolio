<template>
    <footer>
      <slot></slot>
        <div class="copy">
          <a href="https://heleno.dev/blog">BLOG</a>
          <p>&copy; 2022 Heleno Salgado Lopes | Obrigado pela visita.</p>
          <img style="width: 40px; vertical-align: middle; background-color: #eee; border-radius: 7px;"  loading="lazy" src="/img/hsl-logo-transparent.webp" alt="logo">
        </div>
        <a href="#home" class="link-topo">
          <LazyIconsArrowTop/>
        </a>
         <!-- 
          Imagem extraída do seguinte site:
          https://www.joshwcomeau.com/_next/image/?url=%2Fimages%2Fshadow-palette%2Fslopes.png&w=3840&q=75
        -->
        <NuxtImg loading="lazy" sizes="sm:640 md:768 lg: 1024 xl: 1280 xxl: 1536" class="background-footer" src="/img/home/slopes.webp" alt="Montanhas" />
      </footer>  
</template>
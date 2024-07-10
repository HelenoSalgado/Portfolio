<script lang="ts" setup>
import slides from 'assets/json/slidesCertificate.json';
import projects from 'assets/json/cardProjects.json';

definePageMeta({
  title: 'Portfólio',
  description: 'Tenha seu site ou sistema web personalizado e otimizado',
  image: '/img/hsl-logo.png',
  ogType: 'website',
});

</script>
<template>
  <DivisionBottom/>
  <section class="sobre-mim-container" id="sobre">
        <h2>Experiência Profissional</h2>
        <div class="video">
          <video width="1000" height="auto" autoplay muted loop playsinline>
            <source src="/videos/4733-179738669_tiny.mp4" type="video/mp4">
          </video>
          <div class="loading"></div>
        </div>
    </section>
    <section class="secao-conhecimentos" id="conhecimentos"> 
      <h2>Tecnologias</h2>
      <div class="container-conhecimentos"> 
        <CardSkill lang="HTML"><IconsLangHTML/></CardSkill>
        <CardSkill lang="CSS"><IconsLangCSS/></CardSkill>
        <CardSkill lang="JavaScript"><IconsLangJs/></CardSkill>
        <CardSkill lang="NodeJs"><IconsLangNodeJs/></CardSkill>
        <CardSkill lang="Vue"><IconsLangVueJs/></CardSkill>
        <CardSkill lang="MongoDB"><IconsLangMongoDB/></CardSkill>
        <CardSkill lang="Wordpress"><IconsLangWordPress/></CardSkill>
        <CardSkill lang="Git"><IconsLangGit/></CardSkill>
        <CardSkill lang="Linux"><IconsLangLinux/></CardSkill>
        <CardSkill lang="Docker"><IconsLangDocker/></CardSkill>
    </div>
  </section>
  <DivisionTop/>
  <section class="container-certificados" id="certificados">
      <h2>Certificados</h2>
      <div class="certificados">
        <SlidesCertificates v-for="{ id, src, alt } in slides" :key="id"
        :src
        :alt
        />
      </div>
      <div class="slides-button">
         <LazyIconsArrowLeft/>
         <LazyIconsArrowRight/>
      </div>
  </section>
  <DivisionBottom/>
  <section class="github-container" id="github">
      <h2>Atividades no GitHub</h2>
      <div class="github-atividade">
          <div>
            <p>Diariamente estou fazendo commit de códigos para projetos no github. Praticar constantemente é a maneira mais eficaz de reter o conhecimento, e não somente isso, mas através dos eventuais problemas é possível aumentar o repertório das possíveis soluções.</p>
          </div>
          <div>
            <img loading="lazy" src="https://github-readme-stats.vercel.app/api?username=HelenoSalgado&show_icons=true&theme=dracula&include_all_commits=true&count_private=true/" alt="Commits GitHub">
          </div>
          <div>
            <img loading="lazy" src="https://github-readme-stats.vercel.app/api/top-langs/?username=HelenoSalgado&layout=compact&langs_count=8&theme=dracula" alt="Principais linguagens de programação"/>
          </div>
          <div>
            <p>O objetivo é aprender o básico e essêncial para desenvolver um sistema completo, estou me especializando no ecossistema NodeJs. Para não ficar aborrecido, vou aprendendo outras coisinhas também.</p>
          </div>
        </div>
    </section>
    <DivisionTop/>
    <section class="container-projetos" id="projetos">
        <h2>Projetos e Desafios</h2>
        <div class="card-projetos">
        <CardProject v-for="{ id, title, description, languages, href, image  } in projects" :key="id"
        :title
        :description
        :languages
        :href
        :image
        />
        </div>
      </section>
      <DivisionTop fill="#14171a"/>
</template>
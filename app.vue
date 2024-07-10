<script lang="ts" setup>
const route = useRoute();
const { public: pub } = useRuntimeConfig();
const title = computed(() => route.meta.title ? `Salop Web | ${route.meta.title}` : 'Salop Web'
);

useHead({
  titleTemplate: ((titleChunk) => {
    if (titleChunk?.includes('|')) return titleChunk;
    return title.value
  })
});

useSeoMeta({
  ogLocale: 'pt-BR',
  author: 'Heleno Salgado',
  ogUrl: `${pub.site.url + route.path}`,
  title: `${title.value}`,
  description: `${route.meta.description}`,
  ogTitle: `${title.value}`,
  ogDescription: `${route.meta.description}`,
  ogImage: `${pub.site.url + route.meta.image}`,
  twitterTitle: `${title.value}`,
  twitterDescription: `${route.meta.description}`,
  twitterImage: `${pub.site.url + route.meta.image}`,
  twitterCard: 'summary_large_image',
  twitterCreator: '@HelenoSalgado',
  ogType: `${route.meta.ogType}`,
  type: `${route.meta.ogType}`,
});
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

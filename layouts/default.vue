<script lang="ts" setup>
useHead({
  script: [
    {
      defer: 'true',
      src: '/js/index.js'
    }
  ]
});
</script>
<template>
    <Header></Header>
    <slot></slot>
    <Footer>
        <ContactForm/>
    </Footer>
</template>
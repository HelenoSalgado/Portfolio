<script lang="ts" setup>
defineProps(['src', 'alt']);
</script>
<template>
    <div class="slide">
        <NuxtImg loading="lazy" :src :alt/>
    </div>
</template>
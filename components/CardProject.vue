<script lang="ts" setup>
defineProps(['title', 'languages', 'description', 'image', 'href']);
</script>
<template>
    <div class="card">
        <NuxtImg width="350px" loading="lazy" :src="image" :alt="title" />
        <div class="card-text">
            <h3>{{ title }}</h3>
            <h4>{{ languages }}</h4>
            <p>{{ description }}</p>
            <a :href target="_blank">
                <LazyIconsLink/>
            </a>
        </div>
    </div>
</template>
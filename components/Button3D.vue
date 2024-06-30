<script lang="ts" setup>
defineProps(['href']);
</script>
<template>
    <button class="empurravel">
        <span class="sombra"></span>
        <span class="borda"></span>
        <span class="frente">
            <a :href target="_blank">
                <slot></slot>
            </a>
        </span>
    </button>
</template>
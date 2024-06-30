<script lang="ts" setup>
defineProps(['lang'])
</script>
<template>
    <div>
       <slot></slot>
       <h3>{{ lang }}</h3> 
    </div>
</template>
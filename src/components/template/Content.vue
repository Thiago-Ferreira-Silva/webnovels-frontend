<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style>
.content {
    grid-area: content;
    background-color: #a0a0a0;
}
</style>
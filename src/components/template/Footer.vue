<template>
    <footer class="footer">
        <span>Webnovels project</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer {
    grid-area: footer;
    background-color: #b9c9ff;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
}
</style>
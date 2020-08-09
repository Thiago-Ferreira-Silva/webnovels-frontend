<template>
    <div class="loading-container">
        <div class="loading"></div>
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style>
.loading-container {
    grid-area: content;

    display: flex;
    align-items: center;
    justify-content: center;
}
.loading {
    border: 1.5rem solid white;
    border-radius: 50%;
    border-top: 1.6rem solid #56a5eb;
    height: 12rem;
    width: 12rem;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
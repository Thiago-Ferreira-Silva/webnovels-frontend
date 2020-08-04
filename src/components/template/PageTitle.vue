<template>
    <div class="page-title">
        <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['icon', 'main', 'sub']
}
</script>

<style>
.page-title h1 {
    margin: 0px;
    padding: 10px 10px 0px 10px;
    font-size: 1.5rem;
}

</style>
<template>
    <div class="admin-pages">
        <h1>{{user.name}}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UserPages',
    components: { },
    computed: mapState(['user'])
}
</script>

<style>
h1 {
    display: flex;
    justify-content: center;
    font-weight: 100;
    font-size: 2.3rem;
    color: rgb(64, 64, 65);
}
</style>
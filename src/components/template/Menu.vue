<template>
    <aside class="menu" v-show="isMenuVisible">
        <ul class="novels">
            <li class="novel" v-for="novel in novels" :key="novel.id" @click="setNovel(novel.id)">{{ novel.name }}</li>
        </ul>
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import { baseApiUrl, showError } from '@/global'

import axios from 'axios'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible']),
    data: function () {
        return {
            novels: []
        }
    },
    methods: {
        getNovels() {
            axios.get(`${baseApiUrl}/novels`)
                .then( res => this.novels = res.data)
                .catch(showError)
        },
        setNovel(id) {
            localStorage.setItem('__webnovel_novel_id', `${id}`)
            this.$router.push('/novel')
        }
    },
    mounted() {
        this.getNovels()
    }
}
</script>

<style>
.menu {
    grid-area: menu;
    background-color: #c0c0c0;
}
</style>
<template>
    <div class="novels">
        <ul class="novels-list">
            <li class="novel" v-for="novel in novels" :key="novel.id" @click="setNovel(novel.id)">
                {{ novel }}
            </li>
        </ul>
        <div id="ff"></div>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import { mapState } from 'vuex'

import axios from 'axios'

export default {
    name: 'UserNovels',
    computed: mapState(['user']),
    data: function() {
        return {
            novels: []
        }
    },
    methods: {
        getNovels() {
            axios.get(`${baseApiUrl}/novels/user/${this.user.id}`)
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

</style>
<template>
    <div class="novels">
        <ul class="novels-list">
            <li class="novel" v-for="novel in novels" :key="novel.id">
                {{ novel }}
            </li>
        </ul>
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
            axios.get(`${baseApiUrl}/novels/${this.user.id}`)
                .then( res => this.novels = res.data)
                .catch(showError)
        }
    },
    mounted() {
        this.getNovels()
    }
}
</script>

<style>

</style>
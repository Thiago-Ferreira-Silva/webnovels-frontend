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

import axios from 'axios'

export default {
    name: 'Novels',
    data: function() {
        return {
            novels: []
        }
    },
    methods: {
        getNovels() {
            axios.get(`${baseApiUrl}/novels`)
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
<template>
    <div class="novel-container">
        {{novel}}
        <hr>
        {{chapters}}
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { baseApiUrl, showError } from '@/global'

import axios from 'axios'
export default {
    name: 'Novel',
    computed: mapState(['user']),
    data: function() {
        return {
            novel: {},
            chapters: [],
            novelId: localStorage.getItem('__novel_id')
        }
    },
    methods: {
        getNovel() {
            axios.get(`${baseApiUrl}/novels/${this.novelId}`)
                .then( res => {
                    this.novel = res.data
                    localStorage.removeItem('__novel_id')
                    })
                .catch(showError)
        },
        getChapters() {
            axios.get(`${baseApiUrl}/chapters/novel/${this.novel.id}`)
                .then( res => this.chapters = res.data)
                .catch(showError)
        }
    },
    created() {
        this.getNovel
    },
    mounted() {
        this.getChapters
        // não está funcionando, tente usar o store
    }
}
</script>

<style>

</style>
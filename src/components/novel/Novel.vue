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
            chapters: []
        }
    },
    methods: {
        getNovel() {
            axios.get(`${baseApiUrl}/novels/${localStorage.getItem('__novel_id')}`)
                .then( res => {
                    this.novel = res.data
                    this.getChapters()
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
        this.getNovel()
    }
}
</script>

<style>

</style>
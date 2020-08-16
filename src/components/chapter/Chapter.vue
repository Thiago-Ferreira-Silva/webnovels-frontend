<template>
    <div class="chapter-container">
        <div class="chapter-title">Title: {{novel.name}} {{chapter.number}}</div>
        <div class="chapter-content">Content: {{ chapter.content }}</div>
        <div class="chapter-author">Author: {{ user.name }}</div>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import { mapState } from 'vuex'

import axios from 'axios'

export default {
    name: 'Chapter',
    computed: mapState(['user']),
    data: function() {
        return {
            chapter: {},
            novel: {}
        }
    },
    methods: {
        getChapter() {
            const chapter = JSON.parse(localStorage.getItem('__webnovel_chapter'))
            localStorage.removeItem('__webnovel_chapter')
            axios.get(`${baseApiUrl}/chapter/${chapter.novel_id}/${chapter.number}`)
                .then( res => this.chapter = res.data)
                .catch(showError)
            this.getNovel
        },
        getNovel() {
            axios.get(`${baseApiUrl}/novels/${this.chapter.novel_id}`)
                .then( res => this.novel = res.data)
                .catch(showError)
        }
    }
}
</script>

<style>

</style>
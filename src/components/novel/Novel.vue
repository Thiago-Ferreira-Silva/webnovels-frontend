<template>
    <div class="novel-container">
        {{novel}}
        <hr>
        <ul class="chapters-list">
            <li class="chapter" v-for="chapter in chapters" :key="chapter.number" @click="setChapter(chapter.number)">{{ chapter }}</li>
        </ul>
        <hr>
        <div class="user">{{user.name}}</div>
    </div>
</template>

<script>
//crie os links para os capítulos
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
            axios.get(`${baseApiUrl}/novels/${localStorage.getItem('__webnovel_novel_id')}`)
                .then( res => {
                    this.novel = res.data
                    this.getChapters()
                    localStorage.removeItem('__webnovel_novel_id')
                    })
                .catch(showError)
        },
        getChapters() {
            axios.get(`${baseApiUrl}/chapters/novel/${this.novel.id}`)
                .then( res => this.chapters = res.data)
                .catch(showError)
        },
        setChapter(number) {
            const chapter = { 'number': number, 'novel_id': this.novel.id }
            localStorage.setItem('__webnovel_chapter', JSON.stringify(chapter))
            this.$router.push('/chapter')
        }
    },
    created() {
        this.getNovel()
    }
}
</script>

<style>

</style>
<template>
    <div class="novel-container">
        {{novel}}
        <hr>
        <ul class="chapters-list">
            <li class="chapter" v-for="chapter in chapters" :key="chapter.number" @click="setChapter(chapter.number)">{{ chapter }}</li>
        </ul>
        <hr>
        <div class="user">{{user.name}}</div>
        <button @click="deleteNovel">Delete</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { baseApiUrl, showError } from '@/global'

import axios from 'axios'
export default {
    name: 'Novel',
    computed: mapState(['user', 'novelId']),
    data: function() {
        return {
            novel: {},
            chapters: []
        }
    },
    methods: {
        getNovel() {
            axios.get(`${baseApiUrl}/novels/${this.novelId}`)
                .then( res => {
                    this.novel = res.data
                    this.getChapters()
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
        },
        deleteNovel() {
            axios.delete(`${baseApiUrl}/novels/${this.novel.id}`)
                .then( () => this.$router.push('/'))
                .catch(showError)
        //atualizar as novels no menu e o botão só deve aparecer se for uma novel do usuário
        }
    },
    created() {
        this.getNovel()
    },
    watch: {
        novelId: function() {
            this.getNovel()
        }
    }
}
</script>

<style>

</style>
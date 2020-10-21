<template>
    <div class="chapter-container">
        <div class="chapter-title">
            <div class="novel-name">{{ novel.name }}</div>
            <div class="chapter-number">{{ chapter.number }}</div>
        </div>
        <div class="author">{{ author.name }}</div>
        <div>
            <hr>
        </div>
        <div class="chapter-content">{{ chapter.content }}</div>
        <button class="btn btn-danger" v-if="novel.user_id === user.id" @click="deleteChapter">Delete</button>
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
            novel: {},
            author: {}
        }
    },
    methods: {
        getChapter() {
            const chapter = JSON.parse(localStorage.getItem('__webnovel_chapter'))
            axios.get(`${baseApiUrl}/chapter/${chapter.novel_id}/${chapter.number}`)
                .then( res => {
                    this.chapter = res.data
                    this.getNovel()
                })
                .catch(showError)
        },
        getNovel() {
            axios.get(`${baseApiUrl}/novels/${this.chapter.novel_id}`)
                .then( res => {
                    this.novel = res.data
                    this.getAuthor()
                })
                .catch(showError)
        },
        deleteChapter() {
            axios.delete(`${baseApiUrl}/chapter/${this.chapter.novel_id}/${this.chapter.number}`)
                .then( () => {
                    this.$router.go(-1)
                })
                .catch(showError)
        },
        getAuthor() {
            axios.get(`${baseApiUrl}/users/${this.novel.user_id}`)
                .then( res => {
                    this.author =  res.data
                })
                .catch(showError)
        }
    },
    created() {
        this.getChapter()
    }
}
</script>

<style>

.chapter-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100%;
    padding: 10px;
}

.chapter-title {
    display: flex;
    flex-wrap: wrap;
}

.novel-name {
    margin-left: 100px;
    font-size: 1.3rem;
    color: #111;
}

.chapter-number {
    margin-left: 30px;
    font-size: 1.4rem;
    color: #111;
}

.author {
    color: #333;
}
</style>

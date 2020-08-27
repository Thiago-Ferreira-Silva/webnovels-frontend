<template>
    <div class="novel-container">
        <div class="novel">
            <div class="novel-name">{{ novel.name }}</div>
            <div class="novel-description">{{ novel.description }}</div>
        </div>
        <div>
            <hr>
        </div>
        <div class="chapters-list">
            <div class="chapter" v-for="chapter in chapters" :key="chapter.number" @click="setChapter(chapter.number)">{{ chapter.number }}</div>
        </div>
        <div>
            <hr>
        </div>
        <div class="author">
            {{user.name}} mudar para o nome do autor
            <button class="btn btn-danger" v-if="user.id === novel.user_id" @click="deleteNovel">Delete</button>
        </div>
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
                .then( () => {
                    this.$store.commit('updateNovels', true)
                    this.$router.push('/')
                })
                .catch(showError)
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

.novel-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 100%;
    padding: 10px;
}

.novel-name {
    margin-left: 200px;
    font-size: 1.5rem;
    color: #222;
}

.novel-description {
    font-size: 1.1rem;
    color: #333;
}

.chapters-list {
    display: flex;
    flex-wrap: wrap;
}

.chapter {
    display: flex;
    align-items: center;

    margin-left: 15px;
    padding: 30px;
    font-size: 2rem;
    
}

.chapter:hover {
    background-color: #0003;
    cursor: default;
}

.author {
    justify-self: flex-end;

    display: flex;
    flex-direction: column;
}

.btn {
    width: 80px;
}

</style>
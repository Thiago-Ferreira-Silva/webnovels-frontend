<template>
    <div class="new-chapter">
        <div class="form">
            <input type="text" placeholder="novel name" v-model="chapter.novelName">
            <input type="text" placeholder="number" v-model="chapter.number">
            <textarea placeholder="content" v-model="chapter.content"></textarea>

            <button class="btn btn-primary" @click="newChapter">New chapter</button>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'

import axios from 'axios'

export default {
    name: 'NewChapter',
    data: function () {
        return {
            chapter: {}
        }
    },
    methods: {
        newChapter() {
            axios.post(`${baseApiUrl}/chapters`, this.chapter)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.chapter = {}
                })
                .catch(showError)
        }
    }
}
</script>

<style>
.new-chapter {
    display: flex;
    align-items: center;
    justify-content: center;
}

.new-chapter .form {
    padding: 35px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.new-chapter .form input {
    border: solid 1px #bbb;
    width: 48%;
    margin-bottom: 15px;
    padding: 3px 8px;
    outline: none;

    font-size: 1.2rem;
}

textarea {
    outline: none;
    resize: none;
    font-size: 1.2rem;
    width: 100%;
    height: 40vh;

    margin-bottom: 10px;
}

</style>
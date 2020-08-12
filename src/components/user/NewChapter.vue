<template>
    <div class="new-chapter">
        <div class="form">
            <input type="text" placeholder="Novel name" v-model="chapter.novelName">
            <input type="text" placeholder="Number" v-model="chapter.number">
            <input class="chapter-content" type="text" placeholder="Content" v-model="chapter.content">

            <button @click="newChapter">New chapter</button>
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
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
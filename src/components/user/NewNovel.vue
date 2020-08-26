<template>
    <div class="new-novel">
        <div class="form">
            <input type="text" placeholder="name" v-model="novel.name">
            <input type="text" placeholder="description" v-model="novel.description">

            <button class="btn btn-primary" @click="createNovel">Create Novel</button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { baseApiUrl, showError } from '@/global'

import axios from 'axios'

export default {
    name: 'NewNovel',
    computed: mapState(['user']),
    data: function () {
        return {
            novel: {}
        }
    },
    methods: {
        createNovel() {
            this.novel.user_id = this.user.id

            axios.post(`${baseApiUrl}/novels`, this.novel)
                .then(() => {
                    this.$store.commit('updateNovels', true)
                    this.$toasted.global.defaultSuccess()
                    this.novel = {}
                })
                .catch(showError)
        }
    }
}
</script>

<style>
.new-novel {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
}

.new-novel .form {
    padding: 35px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.new-novel .form input {
    border: solid 1px #bbb;
    width: 100%;
    margin-bottom: 15px;
    padding: 3px 8px;
    outline: none;

    font-size: 1.2rem;
}



</style>
<template>
    <div class="new-novel">
        <div class="form">
            <input type="text" placeholder="name" v-model="novel.name">
            <input type="text" placeholder="description" v-model="novel.description">

            <button @click="createNovel">Create Novel</button>
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
}

.new-novel .form {
    padding: 35px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
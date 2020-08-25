<template>
    <div class="novels">
        <div class="novel" v-for="novel in novels" :key="novel.id" @click="setNovel(novel.id)">
            <div class="name">{{ novel.name }}</div>
            <div class="description">{{ novel.description }}</div>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError } from '@/global'
import { mapState } from 'vuex'

import axios from 'axios'

export default {
    name: 'UserNovels',
    computed: mapState(['user', 'novelId']),
    data: function() {
        return {
            novels: []
        }
    },
    methods: {
        getNovels() {
            axios.get(`${baseApiUrl}/novels/user/${this.user.id}`)
                .then( res => this.novels = res.data)
                .catch(showError)
        },
        setNovel(id) {
            this.$store.commit('setNovelId', id)
            this.$router.push(`/novel/${id}`)
        }
    },
    mounted() {
        this.getNovels()
    }
}

</script>

<style scoped>
.novels {
    display: flex;
    flex-direction: column;
}

.novel {
    display: flex;
    flex-direction: column;
    padding: 3px;
    padding-bottom: 15px;
    width: 100%;
}

.novel:hover {
    background-color: #0003;
    cursor: default;
}

.description {
    color: #333;
}
</style>
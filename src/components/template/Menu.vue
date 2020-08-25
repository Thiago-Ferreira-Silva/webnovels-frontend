<template>
    <aside class="menu" v-show="isMenuVisible">
        <div class="novels">
            <div class="novel" v-for="novel in novels" :key="novel.id" @click="setNovel(novel.id)">{{ novel.name }}</div>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import { baseApiUrl, showError } from '@/global'

import axios from 'axios'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible', 'novelId', 'updatingNovels']),
    data: function () {
        return {
            novels: []
        }
    },
    methods: {
        getNovels() {
            axios.get(`${baseApiUrl}/novels`)
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
    },
    watch: {
        updatingNovels: function(b) {
            if(b === true) {
            this.getNovels()
            this.$store.commit('updateNovels', false)
            }
            
        }
    }
}
</script>

<style scoped>

.menu {
    grid-area: menu;
    background-color: #c0c0c0;
}

.novels {
    display: flex;
    flex-direction: column;
}

.novel {
    display: flex;
    justify-content: center;
    
    color: #333;

    padding: 5px;
    width: 100%;
    font-size: 1.2rem;
}

.novel:hover {
    background-color: #0003;
    color: white;
    cursor: default;
}
</style>
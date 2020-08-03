<template>
    <header class="header">
        <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title"> 
            <router-link to="/">{{ title }} </router-link>
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown: Boolean
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? 'fa-angle-left' : 'fa-angle-down'
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
.header {
    grid-area: header;
    background-color: #b9c9ff;

    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 1.5rem;
    font-weight: 100;
    color: #222;
    flex-grow: 1;
    text-align: center;
}

.title a {
    color: #222;
    text-decoration: none;
}

header.header > a.toggle {
    width: 60px;
    height: 100%;
    color: #222;
    justify-self: flex-start;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
}

header.header > a.toggle:hover {
    background-color: #00000033;
}
</style>
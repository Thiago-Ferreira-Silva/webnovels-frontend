<template>
  <div id="app" :class="{ 'hide_menu': !isMenuVisible || !user}">
    <Header title="Webnovels" :hideToggle="!user" :hideUserDropdown="!user" />
    <Menu v-if="user" />
    <Content />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Header from './components/template/Header'
import Menu from "./components/template/Menu"
import Content from './components/template/Content'
import Footer from './components/template/Footer'

export default {
  name: 'App',
  components: { Header, Menu, Content, Footer },
  computed: mapState(['isMenuVisible', 'user'])
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
  
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 325px 1fr;
  grid-template-areas: "header header"
                       "menu content"
                       "menu footer";
}

#app.hide_menu {
  grid-template-areas: "header header"
                       "content content"
                       "footer footer";
}
</style>

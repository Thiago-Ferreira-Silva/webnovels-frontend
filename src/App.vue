<template>
  <div id="app" :class="{ 'hide_menu': !isMenuVisible || !user}">
    <Header title="Webnovels" :hideToggle="!user" :hideUserDropdown="!user" />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, userKey } from '@/global'
import { mapState } from 'vuex'

import Header from './components/template/Header'
import Menu from "./components/template/Menu"
import Content from './components/template/Content'
import Footer from './components/template/Footer'
import Loading from './components/template/Loading'

export default {
  name: 'App',
  components: { Header, Menu, Content, Footer, Loading },
  computed: mapState(['isMenuVisible', 'user']),
  data: function() {
    return {
      validatingToken: true
    }
  },
  methods: {
    async validateToken() {
      this.validatingToken = true

      const userData = JSON.parse(localStorage.getItem(userKey))
      this.$store.commit('setUser', null)

      if(!userData) {
        this.validatingToken = false
        this.$router.push({ name: 'auth' })
        return
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

      if (res.data) {
        this.$store.commit('setUser', userData)
      } else {
        localStorage.removeItem(userKey)
        this.$router.push({ name: 'auth' })
      }

      this.validatingToken = false
    }
  },
  created() {
    this.validateToken()
  }
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
  
  height: 100%;
  min-height: 100vh;
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

<template>
  <div class="user-dropdown">
      <div class="user-button">
          <span class="d-none d-sm-block name"> {{ user.name }}</span>
          <i class="fa fa-angle-down"></i>
      </div>
      <div class="user-dropdown-content">
          <router-link to="/profile"><i class="fa fa-cogs"></i> My profile</router-link>
          <a href @click.prevent="logout"><i class="fa fa-sign-out"></i> Logout</a>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'UserDropdown',
    computed: mapState(['user']),
    methods: {
        logout() {
            this.$store.commit('setUser', null)
            this.$router.push({ name: 'auth' })
        }
    }
}
</script>

<style>
.user-dropdown {
    position: relative;
    height: 100%;
}

.user-button {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 100;
    padding: 0px 20px;
}

.name {
    margin-right: 10px;
}

.user-dropdown:hover {
    background-color: #00000033;
}

.user-dropdown-content {
    position: absolute;
    right: 0px;
    background-color: #f9f9f9;
    min-width: 170px;
    box-shadow: 0px 8px 16px 0px #00000033;
    padding: 10px;
    z-index: 1;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    visibility: hidden;
    opacity: 0;

    transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
    visibility: visible;
    opacity: 1;
}

.user-dropdown-content a {
    text-decoration: none;
    color: #000;
    padding: 10px;
}

.user-dropdown-content a:hover {
    text-decoration: none;
    color: #000;
    background-color: #ededed;
}

</style>

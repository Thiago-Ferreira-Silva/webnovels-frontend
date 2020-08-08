<template>
    <div class="auth-content">
        <div class="auth-modal">
            <div class="auth-title">{{ showSignup ? 'Signup' : 'Signin' }}</div>

            <input type="text" v-if="showSignup" v-model="user.name" placeholder="Name">
            <input type="text" v-model="user.username" placeholder="Username">
            <input type="password" v-model="user.password" placeholder="Password">
            <input type="password" v-if="showSignup" v-model="user.confirmPassword" placeholder="Confirm password">

            <button v-if="showSignup" @click="signup">Signup</button>
            <button v-else @click="signin">Signin</button>

            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Already have an account? Signin</span>
                <span v-else>Don't have an account? Signup</span>
            </a>
        </div>
    </div>
</template>

<script>
import { userKey, baseApiUrl, showError } from '@/global'
import axios from 'axios'

export default {
    name: 'Auth',
    data: function() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
                .catch(showError)
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
.auth-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.auth-modal {
    background-color: #fff;
    width: 350px;
    padding: 35px;
    box-shadow: 0 1px 5px #00000026;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.auth-title {
    font-size: 1.2rem;
    font-weight: 100;
    margin-bottom: 15px;
}

.auth-modal input {
    border: 1px solid #bbb;
    width: 100%;
    margin-bottom: 15px;
    padding: 3px 8px;
    outline: none;
}

.auth-modal button {
    align-self: flex-end;
    background-color: #2460ae;
    color: #fff;
    padding: 5px 15px;
}

.auth-modal a {
    margin-top: 35px;
}

</style>
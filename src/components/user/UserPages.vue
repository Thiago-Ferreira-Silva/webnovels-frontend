<template>
    <div class="user-pages">
        <h1>{{user.name}}</h1>
        <div class="tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Novels" active>
                        <Novels />
                    </b-tab>
                    <b-tab title="New Novel">
                        <NewNovel />
                    </b-tab>
                    <b-tab title="New Chapter">
                        <NewChapter />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import NewNovel from './NewNovel'
import NewChapter from './NewChapter'
import Novels from './Novels'

export default {
    name: 'UserPages',
    components: { NewNovel, NewChapter, Novels },
    computed: mapState(['user'])
}
</script>

<style>

</style>
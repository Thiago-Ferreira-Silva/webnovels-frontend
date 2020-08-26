<template>
    <div class="user-pages">
        <div class="tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Novels" active>
                        <UserNovels />
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
import NewNovel from './NewNovel'
import NewChapter from './NewChapter'
import UserNovels from './UserNovels'

export default {
    name: 'UserPages',
    components: { NewNovel, NewChapter, UserNovels }
}
</script>

<style>
.user-pages {
    padding: 5px;
}
</style>
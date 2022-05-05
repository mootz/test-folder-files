<template>
    <div class="home">
        <HomeList class="list"
                  :items="treeContent" />
    </div>
</template>

<script>
    import HomeList from '@/components/pages/home/HomeList';

    import {mapState} from 'vuex';
    export default {
        name: 'HomeView',
        components: {
            HomeList
        },
        computed: {
            ...mapState({
                treeContent: state => state.tree.content
            })
        },
    };
</script>
<style scoped lang="scss">
    .home {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100vh;
        width: 100%;
        max-width: 30rem;
        margin: 0 auto;
    }

    .list {
        width: 100%;
        padding: 2rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>

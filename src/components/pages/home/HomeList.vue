<template>
    <ul class="list">
        <transition-group name="fade">
            <li v-for="item in items"
                :key="item.id"
                class="item"
            >
                <HomeItem :item="item"
                          @delete="deleteItem"
                          @edit="renameItem"
                />
            </li>
        </transition-group>
    </ul>
</template>

<script>
    import HomeItem from '@/components/pages/home/HomeItem';

    import {mapActions} from 'vuex';
    export default {
        name: 'HomeList',
        components: {HomeItem},
        props: {
            items: {
                type: Array,
                required: true,
                default: () => []
            }
        },

        methods: {
            ...mapActions({
                deleteItem: 'deleteItem',
                renameItem: 'renameItem'
            })
        }
    };
</script>

<style scoped lang="scss">
    .list {
        list-style: none;
    }
</style>

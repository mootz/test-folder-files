<template>
    <!-- BEM or... -->
    <div class="item__wrap">
        <!-- ...CSSModules -->
        <div :class="['itemSolo', {'_bold': !isFile}]"
             @click="openFolder">
            <div class="nameWrap"
                 :title="item.name">

                <i class="iconName">
                    <svg class="icon">
                        <use v-if="!isOpen && !isFile"
                             xlink:href="#icon-folder"/>

                        <use v-else-if="isOpen && !isFile"
                             xlink:href="#icon-folder-opened"/>

                        <use v-else
                             xlink:href="#icon-file"/>
                    </svg>
                </i>

                <span class="name">{{ item.name }}</span>
            </div>

            <div class="buttons">
                <div class="button"
                     @click.stop="$emit('edit', item.id)"
                >
                    <svg class="icon">
                        <use xlink:href="#icon-edit"/>
                    </svg>
                </div>
                <div class="button"
                     @click.stop="$emit('delete', item.id)"
                >
                    <svg class="icon _red">
                        <use xlink:href="#icon-cross"/>
                    </svg>
                </div>
            </div>
        </div>

        <transition name="move">
            <HomeList v-if="item.children"
                      :items="item.children"
                      v-show="isOpen"
            />
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'HomeItem',
        components: {
            HomeList: () => import('./HomeList.vue')
        },
        data() {
            return {
                isOpen: false,
            };
        },

        props: {
            item: {
                type: Object,
                required: true,
                default: () => ({})
            }
        },

        computed: {
            isFile() {
                return this.item.type === 'file';
            }
        },

        methods: {
            openFolder() {
                if (this.item.type === 'folder') {
                    this.isOpen = !this.isOpen;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .itemSolo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .4rem;
        font-size: 1.4rem;
        transition: background-color .3s;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
        }

        &._bold {
            font-weight: bold;
        }
    }

    .nameWrap {
        display: flex;
        align-items: center;
        overflow-x: hidden;
    }

    .name {
        display: inline;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }

    .iconName {
        display: flex;
        margin-right: .2rem;
    }

    .buttons {
        display: flex;
        align-items: center;
    }

    .button {
        display: flex;
        margin-right: .8rem;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }
    }

    .icon {
        width: 1.4rem;
        height: 1.4rem;
        fill: #000;

        &._red {
            stroke: #ff0000;
        }
    }
</style>

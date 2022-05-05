import {findItemByArray} from '@/assets/js/utils';

const state = () => ({
    content: [
        {
            name: 'Dir 1',
            id: 1,
            type: 'folder',
            children: [
                {
                    name: 'Dir 1-1',
                    id: 2,
                    type: 'folder',
                    children: [
                        {
                            name: 'File 1-1-1',
                            id: 3,
                            type: 'file',
                        }
                    ]
                },
                {
                    name: 'File 1-2',
                    id: 4,
                    type: 'file',
                }
            ]
        },
        {
            name: 'Dir 2',
            id: 5,
            type: 'folder',
            children: [
                {
                    name: 'Dir 2-1',
                    id: 6,
                    type: 'folder',
                },
                {
                    name: 'File 2-2',
                    id: 7,
                    type: 'file',
                }
            ]
        },
        {
            name: 'File 2',
            id: 8,
            type: 'file',
        }
    ]
});

const getters = {
};

const mutations = {
    DELETE_ITEM(state, payload) {
        const arr = findItemByArray(state.content, payload, true);
        arr.splice(arr.findIndex(e => e.id === payload), 1);
    },

    RENAME_ITEM(state, payload) {
        const {id, name} = payload;
        const item = findItemByArray(state.content, id);
        item.name = name;
    }
};

const actions = {
    deleteItem({state, commit}, payload) {
        const item = findItemByArray(state.content, payload);

        // eslint-disable-next-line no-alert
        const isReady = confirm(`Вы действительно хотите удалить "${item.name}"?`);

        if (isReady) {
            commit('DELETE_ITEM', payload);
        }
    },

    renameItem({state, commit}, payload) {
        const item = findItemByArray(state.content, payload);

        // eslint-disable-next-line no-alert
        const newName = prompt(`Как вы хотите переименовать "${item.name}"?`, item.name);

        if (newName) {
            commit('RENAME_ITEM', {id: payload, name: newName});
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};

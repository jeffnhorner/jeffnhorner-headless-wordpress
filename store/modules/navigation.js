export const state = () => ({
    isOpen: false,
});

export const getters = {
    isOpen: state => state.isOpen,
};

export const mutations = {
    updateIsOpen: (state, isOpen) => {
        state.isOpen = isOpen;
    },
};

export const actions = {
    open ({ commit }) {
        commit('updateIsOpen', true);
    },

    close ({ commit }) {
        commit('updateIsOpen', false);
    },
};

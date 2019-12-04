export const state = () => ({
    isOpen: false,
    userIsScrolling: true,
});

export const getters = {
    isOpen: state => state.isOpen,
    userIsScrolling: state => state.userIsScrolling,
};

export const mutations = {
    updateIsOpen: (state, isOpen) => {
        state.isOpen = isOpen;
    },

    updateUserIsScrollingBoolean: (state, userIsScrolling) => {
        state.userIsScrolling = userIsScrolling;
    },
};

export const actions = {
    open ({ commit }) {
        commit('updateIsOpen', true);
    },

    close ({ commit }) {
        commit('updateIsOpen', false);
    },

    setUserIsScrollingBoolean ({ commit }, isScrolling) {
        commit('updateUserIsScrollingBoolean', isScrolling);
    },
};

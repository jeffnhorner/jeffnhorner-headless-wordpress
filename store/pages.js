export const state = () => ({
    pages: [],
});

export const getters = {
    pages: (state) => {
        return state.pages;
    }
};

export const mutations = {
    updatePages: (state, pages) => {
        state.pages = pages;
    }
};

export const actions = {
    async getPages ({ state, commit }) {
        if (state.pages.length) return;

        try {
            const { data: pageData } = await this.$axios.get('wp/v2/pages');

            pageData.find(page => page.slug === 'home' ? page.slug = '' : null);

            commit('updatePages', pageData);
        } catch (error) {
            console.log(error);
        }
    }
};

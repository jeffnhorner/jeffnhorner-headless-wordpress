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
        // If the pages array already contains data, there's no need to make a new call
        if (state.pages.length) return;

        try {
            // Make request to CMS /pages endpoint to get page data
            const { data: pageData } = await this.$axios.get('wp/v2/pages');

            // If the data we're trying to get is for the homepage, let's update the page
            // slug to what we are expecting the url parameters to be for the homepage (i.e. '/')
            pageData.find(page => page.slug === 'home' ? page.slug = '' : null);

            commit('updatePages', pageData);
        } catch (error) {
            throw new Error(`the page you were trying to reach was not found`);
        }
    }
};

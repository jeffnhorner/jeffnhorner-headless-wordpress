export const state = () => ({
    pages: [],
    generalSettings: null,
});

export const getters = {
    pages: state => state.pages,
    generalSettings: state => state.generalSettings,
};

export const mutations = {
    updatePages: (state, pages) => {
        state.pages = pages;
    },
    setGeneralSettings: (state, generalSettings) => {
        state.generalSettings = generalSettings;
    },
};

export const actions = {
    async fetchCMSPages ({ state, commit }) {
        // If the pages array already contains data, there's no need to make a new call
        if (state.pages.length) return;

        try {
            // Make request to CMS /pages endpoint to get page data
            const [
                { data: pageData },
                { default: GlobalSettings },
            ] = await Promise.all([
                this.$axios.get('wp/v2/pages'),
                import('~/models/cms/GlobalSettings'),
            ]);

            // If the data we're trying to get is for the homepage, let's update the page
            // slug to what we are expecting the url parameters to be for the homepage (i.e. '/')
            pageData.find(page => page.slug === 'home' ? page.slug = '' : null);

            const generalSettings = pageData.filter(page => page.slug === 'general-settings')[0].acf;

            commit('updatePages', pageData);
            commit('setGeneralSettings', new GlobalSettings(generalSettings));
        } catch (error) {
            throw new Error(`the page you were trying to reach was not found`);
        }
    }
};

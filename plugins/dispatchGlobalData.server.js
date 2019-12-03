// This plugin will only run if the nuxt mode is 'universal' in the nuxt.config.js file
export default async ({ store }) => {
    await store.dispatch('modules/pages/fetchCMSPages');
    await store.dispatch('modules/posts/fetchCMSPosts');
};

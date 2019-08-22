export default async ({ store }) => {
    await store.dispatch('modules/pages/fetchCMSPages');
    await store.dispatch('modules/posts/fetchCMSPosts');
};

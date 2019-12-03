import normalizeTime from '~/utilities/helpers/normalizeTime';

export const state = () => ({
    posts: [],
});

export const getters = {
    posts: state => state.posts,
};

export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts;
    },
};

export const actions = {
    async fetchCMSPosts ({ state, commit }) {
        // If the posts array already contains data, there's no need to make a new call
        if (state.posts.length) {
            return;
        };

        try {
            // Make request to CMS /pages endpoint to get page data
            const { data: postsData } = await this.$axios.get('wp/v2/posts');

            // Create a normalized timestamp to utilize for blog posts
            postsData.forEach((post) => {
                post.timestamp = normalizeTime(post.date);
            });

            commit('updatePosts', postsData);
        } catch (error) {
            throw new Error(`the page you were trying to reach was not found`);
        }
    }
};

import Vue from 'vue';

// Define the directory of components to globally register
const components = require.context('~/components/Framework', true, /[A-Z]\w+\.(vue)$/);

// Iterate over all of the files within the Framework directory
components.keys().map((file) => {
    // Parse any non global word characters to create the file name
    const fileName = file.match(/\w+/)[0];
    // Define the component configuration - we have .default option to ensure that
    // webpack can fall back on component options for both vue components using export default
    // or module.exports.
    const componentConfiguration = components(file).default || components(file);

    // Return all components that will be registered globall
    return Vue.component(fileName, componentConfiguration);
});

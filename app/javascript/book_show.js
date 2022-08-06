import { createApp } from 'vue' // WEBPACK WIL PULL ALL VUE CODE INTO HERE!!!

// since we use https://github.com/rails/jsbundling-rails, dynamic import like code splitting is NOT SUPPORTED
// https://webpack.js.org/guides/code-splitting/
import App from './my_component.vue'

const app = createApp(App)

console.log("loading vue 3");
app.mount('#app');


import Vue from 'vue'
window.Vue=Vue; // making it global now we can use as Vue, anywhere

/* we could also do like following
window.Vue = require('vue');
 */

import axios from 'axios'
window.axios=axios;


import VueRouter from 'vue-router'
Vue.use(VueRouter); //telling vue to use this object for routing

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}



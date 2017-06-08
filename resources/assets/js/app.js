
require('./bootstrap');//for doing bootstrapping for our app
/* we can also do something like this
 import './bootstrap' //which is es6 syntax

 */
import router from "./routes"

new Vue({
    el: '#app',
    router:router
});

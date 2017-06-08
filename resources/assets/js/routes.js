/**
 * Created by ashish on 8/6/17.
 */


import VueRouter from 'vue-router'

let routes=[ //store the array of route objects
    //first route
    {
       path:"/",
       component:require("./views/Home.vue")
    },
    {
        path:"/about",
        component:require("./views/About.vue")
    }
];

export default new VueRouter({
   routes:routes,
    linkActiveClass:'is-active' //this property applied to active class
});
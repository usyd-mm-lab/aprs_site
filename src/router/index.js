import VueRouter from "vue-router";

import HelloWorld from "../components/HelloWorld";
import Main from '../components/Main';
import About from "../components/About";
import Events from "../components/Events";
import Membership from "../components/Membership";

const routes = [
    {path: '/', component: Main},
    {path: '/main', component: Main},
    {path: '/hello', component: HelloWorld},
    {path: '/about', component: About},
    {path: '/events', component: Events},
    {path: '/membership', component: Membership}

]
const index = new VueRouter({
    routes, // short for `routes: routes`
    // mode: 'history'
})

export default index
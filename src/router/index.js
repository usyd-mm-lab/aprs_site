import VueRouter from "vue-router";

import HelloWorld from "../components/HelloWorld";
import Main from '../components/Main';
import About from "../components/About";
import Events from "../components/Events";
import Membership from "../components/Membership";
import Award_Dicta from "../components/Award_Dicta";
import Award_ECR from "../components/Award_ECR";

const routes = [
    {path: '/', component: Main},
    {path: '/main', component: Main},
    {path: '/hello', component: HelloWorld},
    {path: '/about', component: About},
    {path: '/events', component: Events},
    {path: '/membership', component: Membership},
    {path: '/award_dicta', component: Award_Dicta},
    {path:'/award_ecr', component: Award_ECR}

]
const index = new VueRouter({
    routes, // short for `routes: routes`
    // mode: 'history'
})

export default index
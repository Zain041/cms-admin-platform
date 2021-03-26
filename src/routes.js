/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";




import Login from "views/examples/Login.js";
import Icons from "views/examples/Icons.js"
import Blog from "views/examples/Blog.js";
import jobs from "views/examples/jobs";
import remoteHiring from "views/examples/remoteHiring";
import about from "views/examples/about";
import Orders from "views/examples/Orders";
import service from "views/examples/service";



var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  
    {
      path: "/Blog",
      name: "Add Blog",
      icon: "fas fa-building text-orange",
      component: Blog,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
    {
      path: "/add-Job",
      name: " Add Job",
      icon: "fas fa-building text-orange",
      component: jobs,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
    {
      path: "/add-service",
      name: " Add service",
      icon: "fas fa-building text-orange",
      component:service ,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
    {
      path: "/Jobs",
      name: "Jobs",
      icon: "fas fa-building text-orange",
      component: Orders,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
    {
      path: "/remote-hiring",
      name: " Add Remote Hiring",
      icon: "fas fa-building text-orange",
      component: remoteHiring,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
    {
      path: "/about",
      name: "Add About",
      icon: "fas fa-building text-orange",
      component: about,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "fas fa-building text-orange",
      component: Icons,
      layout: "/admin"
      // <i class="fas fa-building"></i>
    },
   
     


 
 
];
export default routes;

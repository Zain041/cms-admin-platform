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
      name: "Blog",
      icon: "fas fa-building text-orange",
      component: Blog,
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

import Vue from "vue";
import VueRouter from "vue-router";

import ComDashBoard from "./components/ComDashBoard.vue";
import ComListUser from "./components/users/ComListUser.vue";
import ComUserDetail from "./components/users/ComUserDetail.vue";
import ComUserAdd from "./components/users/ComUserAdd.vue";
import ComLogin from "./components/ComLogin.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login", name: "login", component: ComLogin },
    { path: "/", name: "dashboard", component: ComDashBoard },
    {
      path: "/users",
      name: "users",
      component: ComListUser,
      children: [
        // {
        //   path: "list",
        //   name: "users.list",
        //   component: ComListUser,
        // },
        // {
        //   path: "add",
        //   name: "users.add",
        //   component: ComUserAdd,
        // },
      ],
    },
    {
      path: "/users/add",
      name: "users.add",
      component: ComUserAdd,
    },
    {
      // router Group
      path: "/users/:id",
      name: "user_ac",
      component: ComUserDetail,
      children: [
        {
          // user profile
          path: "profile",
          name: "users.profile",
          component: ComUserDetail,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/users:id'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('userAuth');
  // const loggedIn = false;

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})

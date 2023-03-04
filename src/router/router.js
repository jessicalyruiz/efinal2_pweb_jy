import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
      path: "/ingresarProducto",
      name: 'ingresarProducto',
      component: () => import(/* webpackChunkName: "ingresarProducto" */ "../pages/IngresarProducto"),
    },

    {
        path: "/realizarVenta",
      name: 'realizarVenta',
      component: () => import(/* webpackChunkName: "realizarVenta" */ "../pages/RealizarVenta"),
   
    }
  ];
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router;
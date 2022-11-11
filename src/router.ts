import { createRouter, createWebHistory } from "vue-router"
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/baseball",
    name: "Baseball",
    components: {
      default: () => import("./views/BaseballGame.vue"),
      bottom: () => import("./components/bottom/NumberPad.vue"),
    },
    meta: { hasBottom: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

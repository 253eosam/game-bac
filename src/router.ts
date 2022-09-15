import { createRouter, createWebHistory } from 'vue-router'
// 1. Define route components.
// These can be imported from other files
const GameReady = () => import('./views/GameReady.vue')
const GameInProgress = () => import('./views/GameInProgress.vue')
const GameFinish = () => import('./views/GameFinish.vue')

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: GameReady },
  { path: '/in-progress', component: GameInProgress },
  { path: '/finish', component: GameFinish },
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
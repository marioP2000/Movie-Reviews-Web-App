import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  // Main routes
  {
    path: '/',
    name: 'home',
    component: () => import('../frontend/views/HomeView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('../frontend/views/ReviewsView.vue')
  },
  {
    path: "/create-review",
    name: "create-review",
    component: () => import("../frontend/views/CreateReview.vue")
  },

  // Individual review route
  {
    path: '/reviews/:id',
    name: 'reviewdetails',
    component: () => import('../frontend/views/IndividualReview.vue'),
    params: true,
    props: true
  },

  // Category routes
  {
    path: "/category/action",
    name: "action-category",
    component: () => import("../frontend/views/category_views/ActionView.vue")
  },
  {
    path: "/category/comedy",
    name: "comedy-category",
    component: () => import("../frontend/views/category_views/ComedyView.vue")
  },
  {
    path: "/category/crime",
    name: "crime-category",
    component: () => import("../frontend/views/category_views/CrimeView.vue")
  },
  {
    path: "/category/documentary",
    name: "documentary-category",
    component: () => import("../frontend/views/category_views/DocumentaryView.vue")
  },
  {
    path: "/category/drama",
    name: "drama-category",
    component: () => import("../frontend/views/category_views/DramaView.vue")
  },
  {
    path: "/category/fantasy",
    name: "fantasy-category",
    component: () => import("../frontend/views/category_views/FantasyView.vue")
  },
  {
    path: "/category/horror",
    name: "horror-category",
    component: () => import("../frontend/views/category_views/HorrorView.vue")
  },
  {
    path: "/category/romance",
    name: "romance-category",
    component: () => import("../frontend/views/category_views/RomanceView.vue")
  },
  {
    path: "/category/sports",
    name: "sports-category",
    component: () => import("../frontend/views/category_views/SportsView.vue")
  },
  {
    path: "/category/thriller",
    name: "thriller-category",
    component: () => import("../frontend/views/category_views/ThrillerView.vue")
  },
  {
    path: "/category/western",
    name: "western-category",
    component: () => import("../frontend/views/category_views/WesternView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import ResultView from '../views/ResultView.vue'
import StudyHubView from '../views/StudyHubView.vue'
import StudyTopicView from '../views/StudyTopicView.vue'
import ScenarioQuizView from '../views/ScenarioQuizView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/study',
            name: 'StudyHub',
            component: StudyHubView,
        },
        {
            path: '/study/:topicId',
            name: 'StudyTopic',
            component: StudyTopicView,
        },
        {
            path: '/quiz',
            name: 'SelectLicense',
            component: () => import('../views/SelectLicenseView.vue'),
        },
        {
            path: '/quiz/:licenseType',
            name: 'Quiz',
            component: QuizView,
        },
        {
            path: '/results',
            name: 'Results',
            component: ResultView,
        },
        {
            path: '/scenarios',
            name: 'Scenarios',
            component: ScenarioQuizView,
        },
        {
            path: '/history',
            name: 'History',
            component: () => import('../views/HistoryView.vue'),
        },
    ],
})

export default router

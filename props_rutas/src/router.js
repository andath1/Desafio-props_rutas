import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import SobremiView from './views/SobremiView.vue'
import ContactoView from './views/ContactoView.vue'
import UltimopostView from './views/UltimopostView.vue'
import RutasnoView from './views/RutasnoView.vue'
import ArticuloView from './views/ArticuloView.vue'



const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ('./views/HomeView.vue')
    },
    {
        path: "/sobremi",
        name: "SobremiView",
        alias: ['/sobremi', '/acerca'],
        component: () =>
            import ('./views/SobremiView.vue')
    },
    {
        path: "/contacto",
        name: "ContactoView",
        alias: ['/contacto', '/contactame'],
        component: () =>
            import ('./views/ContactoView.vue')
    },
    {
        path: "/post",
        name: "UltimopostView",
        component: UltimopostView,
        children: [{
            path: ":1",
            name: "1",
            component: () =>
                import ('./views/ArticuloView.vue')
        }]
    },
    {
        path: '/administrador',
        name: 'AdministradorView ',
        component: () =>
            import ('./views/AdministradorView.vue'),
        children: [{
                path: '/administrador/simple',
                name: 'administradorsimple',
                component: () =>
                    import ('./components/administradorsimple.vue')
            },
            {
                path: '/administrador/avanzado',
                name: 'administradoravanzado',
                component: () =>
                    import ('./components/administradoravanzado.vue')
            }

        ]
    },
    {
        path: '/home',
        redirect: '/'
    },
    {
        path: '/inicio',
        redirect: '/'
    },
    {
        path: '/portada',
        redirect: '/'
    },
    {
        path: '/:catchAll(.*)',
        name: RutasnoView,
        component: RutasnoView
            /*    name: "RutasnoView",
               component: RutasnoView */
    },
];

const history = createWebHistory();
const router = createRouter({
    history,
    routes,
});


export default router
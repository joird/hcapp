import Registro from './view/Registro';
import Login from './view/Login';
import Rol from './view/Rol';
import Index from './view/index';
import PageNotFound from './view/PageNotFound';

const routesPublic = [
  {
    path:'/registro',
    component: Registro
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/',
    component: Index
  },
  {
    path:'/*',
    component: PageNotFound
  },
]

const routesAuth =[
  {
    path:'/rol',
    component: Rol
  },
  {
    path:'/',
    component: Index
  },
  {
    path:'/*',
    component: PageNotFound
  },
]
 
export { routesPublic, routesAuth }
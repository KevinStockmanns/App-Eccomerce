import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { loginGuard } from './core/guards/login.guard';
import { adminsGuard } from './core/guards/admins.guard';
import { notLoginGuard } from './core/guards/not-login.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Inicio"
    },{
        path: 'productos',
        component: ProductsPageComponent,
        title: "Productos"
    },{
        path: 'productos/:action',
        loadComponent: () => import('./pages/create-product-page/create-product-page.component').then(el=>el.CreateProductPageComponent),
        title: 'Crear Producto',
        canActivate: [loginGuard, adminsGuard]
    },{
        path: 'productos/versiones/images',
        loadComponent: ()=> import('./pages/upload-image-page/upload-image-page.component').then(el=>el.UploadImagePageComponent),
        title: 'Subir imagenes',
        canActivate: [loginGuard, adminsGuard]
    },{
        path: 'login',
        component: LoginComponent,
        title: "Iniciar Sesión",
        canActivate: [notLoginGuard]
    },{
        path: 'signup',
        component: SignupComponent,
        title: "Registrarse",
        canActivate: [notLoginGuard]
    },{
        path: 'cart', 
        loadComponent: ()=> import('./pages/cart-page/cart-page.component').then(el=> el.CartPageComponent),
        title: "Pedidos",
        canActivate: [loginGuard]
    },{
        path: 'cart/update',
        loadComponent: ()=> import('./pages/update-page/update-page.component').then(el=> el.UpdatePageComponent),
        canActivate: [loginGuard]
    },{
        path: 'cart/confirm',
        loadComponent: ()=> import('./pages/confirm-page/confirm-page.component').then(el=>el.ConfirmPageComponent),
        title: 'Confirmar Pedido',
        canActivate: [loginGuard, adminsGuard]
    },{
        path: 'dashboard',
        loadComponent: ()=> import('./pages/dashboard-page/dashboard-page.component').then(el=>el.DashboardPageComponent),
        canActivate: [loginGuard, adminsGuard]
    },{
        path: '**',
        loadComponent: ()=> import('./pages/error-page/error-page.component').then(el=> el.ErrorPageComponent),
        title: 'Error'
    }
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { loginGuard } from './core/guards/login.guard';
import { adminsGuard } from './core/guards/admins.guard';
import { notLoginGuard } from './core/guards/not-login.guard';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { estadoValidoCartGuard } from './core/guards/estado-valido-cart.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },{
        path: 'home',
        component: HomeComponent,
        title: "Inicio"
    },{
        path: 'productos',
        component: ProductsPageComponent,
        title: "Productos",
        children: [{
            path: ':action',
            loadComponent: () => import('./pages/create-product-page/create-product-page.component').then(el=>el.CreateProductPageComponent),
            title: 'Crear Producto',
            canActivate: [loginGuard, adminsGuard]
        }]
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
        path: 'auth/forget-pass',
        loadComponent: ()=> import('./pages/login/forget-password-page/forget-password-page.component').then(el=>el.ForgetPasswordPageComponent),
        title: "Recuperar Clave",
        canActivate: [notLoginGuard]
    },{
        path: 'cart', 
        loadComponent: ()=> import('./pages/cart-page/cart-page.component').then(el=> el.CartPageComponent),
        title: "Pedidos",
        canActivate: [loginGuard],
        children: [{
            path: '',
            redirectTo: '/cart/pendiente',
            pathMatch: 'full'
        },{
            path: ':estado',
            loadComponent: ()=>import('./pages/cart-page/cart-content/cart-content.component').then(el=>el.CartContentComponent),
            canActivate: [estadoValidoCartGuard]
        }]
    },{
        path: 'pedido/update',
        loadComponent: ()=> import('./pages/update-page/update-page.component').then(el=> el.UpdatePageComponent),
        canActivate: [loginGuard]
    },{
        path: 'pedido/confirm',
        loadComponent: ()=> import('./pages/confirm-page/confirm-page.component').then(el=>el.ConfirmPageComponent),
        title: 'Confirmar Pedido',
        canActivate: [loginGuard, adminsGuard]
    },{
        path: 'dashboard',
        loadComponent: ()=> import('./pages/dashboard-page/dashboard-page.component').then(el=>el.DashboardPageComponent),
        canActivate: [loginGuard, adminsGuard]
    },{
        path: "settings",
        loadComponent: ()=>import('./pages/settings/settings-page/settings-page.component').then(el=>el.SettingsPageComponent),
        title: 'Ajustes',
        canActivate: [loginGuard],
        children: [{
            path: '',
            pathMatch: 'full',
            loadComponent: ()=> import('./pages/settings/default-page/default-page.component').then(el=>el.DefaultPageComponent)
        },{
            path: 'account/update',
            title: 'Actualizar Perfil',
            loadComponent: ()=> import('./pages/settings/update-user-page/update-user-page.component').then(el=>el.UpdateUserPageComponent)
        },{
            path: 'account/change-pass',
            title: 'Cambiar Clave',
            loadComponent: ()=> import('./pages/settings/change-pass-page/change-pass-page.component').then(el=>el.ChangePassPageComponent)
        }]
    },{
        path: '**',
        loadComponent: ()=> import('./pages/error-page/error-page.component').then(el=> el.ErrorPageComponent),
        title: 'Error'
    }
];

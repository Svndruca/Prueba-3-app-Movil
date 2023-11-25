import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsGuard } from './guards/permissions.guard';
import { SessionLogoutGuard } from './guards/session-logout.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
    // canActivate: [SessionLogoutGuard] lo implementaré más adelante como una mejora
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [PermissionsGuard],
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudiante/estudiante.module').then((m) => m.EstudiantePageModule),
    //canActivate: [PermissionsGuard],
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./escanear-qr/escanear-qr.module').then((m) => m.EscanearQRPageModule),
    //canActivate: [PermissionsGuard],
  },
  {
    path: 'cambio-contrasena',
    loadChildren: () => import('./cambio-contrasena/cambio-contrasena.module').then((m) => m.CambioContrasenaPageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
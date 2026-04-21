import { Routes } from '@angular/router';

export default [
    { path: 'empleados', loadChildren: () => import('./empleados/empleados.routes') },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

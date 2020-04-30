import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',
    children: [
    { path: 'attendance', loadChildren: () => import('./modules/attendance/attendance.module').then(m => m.AttendanceModule)},
    { path: 'user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule)},
    { path: 'attendance/user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule)},
    { path: 'supervisor', loadChildren: () => import('./modules/attendance-supervisor/attendance-supervisor.module')
    .then(m => m.AttendanceSupervisorModule)},
    { path: 'supervisor/user-profile', loadChildren: () => import('./modules/user-profile/user-profile.module')
    .then(m => m.UserProfileModule)},
  ],
},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

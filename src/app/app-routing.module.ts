import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '',
    children: [
    {  path: 'attendance', loadChildren: () => import('./modules/attendance/attendance.module')
    .then(m => m.AttendanceModule)  },
    {  path: 'supervisor', loadChildren: () => import('./modules/attendance-supervisor/attendance-supervisor.module')
    .then(m => m.AttendanceSupervisorModule)  },
  ], },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceSupervisorRoutingModule } from './attendance-supervisor-routing.module';
import { AttendanceSupervisorComponent } from './attendance-supervisor.component';
import { MaterialModule } from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import { DialogAddAttendanceComponent } from './dialog-add-attendance/dialog-add-attendance.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogAssignComponent } from './dialog-assign/dialog-assign.component';


@NgModule({
  declarations: [AttendanceSupervisorComponent, DialogAddAttendanceComponent, DialogAssignComponent],
  imports: [
    CommonModule,
    AttendanceSupervisorRoutingModule,
    MaterialModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogAddAttendanceComponent,
    DialogAssignComponent,
  ],
})
export class AttendanceSupervisorModule { }

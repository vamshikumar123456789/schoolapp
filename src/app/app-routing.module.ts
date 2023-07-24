import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreteStudentComponent } from './crete-student/crete-student.component';
import { AllSudentsComponent } from './all-sudents/all-sudents.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { notifyGuard } from './notify.guard';
import { authenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'crete-student',component:CreteStudentComponent,canDeactivate:[notifyGuard]},
    {path:'all-sudents',component:AllSudentsComponent,canDeactivate:[notifyGuard]},
    {path:'student-details/:id',component:StudentDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

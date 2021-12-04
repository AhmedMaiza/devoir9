import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EnseignantGuard } from './enseignant.guard';


const routes: Routes = [
  {path : "enseignant", component : EnseignantComponent},
  {path : "add-enseignant", component : AddEnseignantComponent, canActivate:[EnseignantGuard]},
  {path: "", redirectTo:"enseignant",pathMatch: "full"},
  {path: "updateEnseignant/:id", component: UpdateEnseignantComponent, canActivate:[EnseignantGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

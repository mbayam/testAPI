import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const routes: Routes = [
   { path: '', component: HomePageComponent },
   {path: 'users', component: UsersPageComponent},
   { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeeComponent } from './homee/homee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent} from './signup/signup.component';
import { SigninComponent} from './signin/signin.component';
import { MymodelsComponent} from  './mymodels/mymodels.component';
import {ViewComponent} from './view/view.component';
import {ModelsComponent} from './models/models.component';

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'upload', component: HomeeComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'mymodels/:id', component: MymodelsComponent},
  {path: 'view/:user/:id', component: ViewComponent},
  {path: 'models/:id', component: ModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

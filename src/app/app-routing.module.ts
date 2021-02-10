import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './user/home/home.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './user/contact/contact.component';
import { ErrorComponent } from './user/error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MyHomeComponent } from './user/my-home/my-home.component';
import { DestinationComponent } from './user/destination/destination.component';
import { EditPasswordComponent } from './shared/profile/edit-password/edit-password.component';
import { EditProfileComponent } from './shared/profile/edit-profile/edit-profile.component';
import { DemandeEchangeComponent } from './user/demande-echange/demande-echange.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "myHome",
    component: MyHomeComponent,
  },
  {
    path: "destination",
    component: DestinationComponent,
  },
  {
    path: "editPassword",
    component: EditPasswordComponent,
  },
  {
    path: "editProfile",
    component: EditProfileComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "echange",
    component: DemandeEchangeComponent,
  },
  
  {
    path: "**",
    component: ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

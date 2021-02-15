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
import { HomeAvailableComponent } from './user/home-available/home-available.component';
import { HomeDetailsComponent } from './user/home-details/home-details.component';
import { TunisComponent } from './user/Region/tunis/tunis.component';
import { SousseComponent } from './user/Region/sousse/sousse.component';
import { ArianaComponent } from './user/Region/ariana/ariana.component';
import { BejaComponent } from './user/Region/beja/beja.component';
import { BenArousComponent } from './user/Region/ben-arous/ben-arous.component';
import { BizerteComponent } from './user/Region/bizerte/bizerte.component';
import { GabesComponent } from './user/Region/gabes/gabes.component';
import { GafsaComponent } from './user/Region/gafsa/gafsa.component';
import { JendoubaComponent } from './user/Region/jendouba/jendouba.component';
import { KasserineComponent } from './user/Region/kasserine/kasserine.component';
import { KairouanComponent } from './user/Region/kairouan/kairouan.component';
import { KebiliComponent } from './user/Region/kebili/kebili.component';
import { KefComponent } from './user/Region/kef/kef.component';
import { MahdiaComponent } from './user/Region/mahdia/mahdia.component';
import { ManoubaComponent } from './user/Region/manouba/manouba.component';
import { MedenineComponent } from './user/Region/medenine/medenine.component';
import { MonastirComponent } from './user/Region/monastir/monastir.component';
import { NabeulComponent } from './user/Region/nabeul/nabeul.component';
import { SfaxComponent } from './user/Region/sfax/sfax.component';
import { SidiBouzidComponent } from './user/Region/sidi-bouzid/sidi-bouzid.component';
import { SilianaComponent } from './user/Region/siliana/siliana.component';
import { TataouineComponent } from './user/Region/tataouine/tataouine.component';
import { TozeurComponent } from './user/Region/tozeur/tozeur.component';
import { ZaghouanComponent } from './user/Region/zaghouan/zaghouan.component';


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
    path:  'tunis',
    component: TunisComponent
  },
  {
    path:  'sousse',
    component:  SousseComponent
  },
  {
    path:  'ariana',
    component:  ArianaComponent
  },
  {
    path:  'beja',
    component:  BejaComponent
  },
  {
    path:  'benArous',
    component:  BenArousComponent
  },
  {
    path:  'bizerte',
    component:  BizerteComponent
  },
  {
    path:  'gabes',
    component:  GabesComponent
  },
  {
    path:  'gafsa',
    component:  GafsaComponent
  },
  {
    path:  'jendouba',
    component:  JendoubaComponent
  },
  {
    path:  'kasserine',
    component:  KasserineComponent
  },
  {
    path:  'kairouan',
    component:  KairouanComponent
  },
  {
    path:  'kebili',
    component:  KebiliComponent
  },
  {
    path:  'kef',
    component:  KefComponent
  },
  {
    path:  'mahdia',
    component:  MahdiaComponent
  },
  {
    path:  'manouba',
    component:  ManoubaComponent
  },
  {
    path:  'medenine',
    component:  MedenineComponent
  },
  {
    path:  'monastir',
    component:  MonastirComponent
  },
  {
    path:  'nabeul',
    component:  NabeulComponent
  },
  {
    path:  'sfax',
    component:  SfaxComponent
  },
  {
    path:  'sidiBouzid',
    component:  SidiBouzidComponent
  },
  {
    path:  'siliana',
    component:  SilianaComponent
  },
  {
    path:  'tataouine',
    component:  TataouineComponent
  },
  {
    path:  'tozeur',
    component:  TozeurComponent
  },
  {
    path:  'zaghouan',
    component:  ZaghouanComponent
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
    path: "maisonDispo",
    component: HomeAvailableComponent,
  },
  {
    path: "homeDteail",
    component: HomeDetailsComponent,
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

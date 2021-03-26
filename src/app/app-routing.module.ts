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
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ValidateHomeComponent } from './admin/validate-home/validate-home.component';
import { ValidateEchangeComponent } from './admin/validate-echange/validate-echange.component';
import { ListClientComponent } from './admin/list-client/list-client.component';
import {AuthGuard} from './services/auth-guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'myHome',
    component: MyHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'destination',
    component: DestinationComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'tunis',
    component: TunisComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'sousse',
    component:  SousseComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'ariana',
    component:  ArianaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'beja',
    component:  BejaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'benArous',
    component:  BenArousComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'bizerte',
    component:  BizerteComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'gabes',
    component:  GabesComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'gafsa',
    component:  GafsaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'jendouba',
    component:  JendoubaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'kasserine',
    component:  KasserineComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'kairouan',
    component:  KairouanComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'kebili',
    component:  KebiliComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'kef',
    component:  KefComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'mahdia',
    component:  MahdiaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'manouba',
    component:  ManoubaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'medenine',
    component:  MedenineComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'monastir',
    component:  MonastirComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'nabeul',
    component:  NabeulComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'sfax',
    component:  SfaxComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'sidiBouzid',
    component:  SidiBouzidComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'siliana',
    component:  SilianaComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'tataouine',
    component:  TataouineComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'tozeur',
    component:  TozeurComponent,
    canActivate: [AuthGuard]
  },
  {
    path:  'zaghouan',
    component:  ZaghouanComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editPassword',
    component: EditPasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'echange/:homeId',
    component: DemandeEchangeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'maisonDispo/:region',
    component: HomeAvailableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'homeDteail',
    component: HomeDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/validateHome',
    component: ValidateHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/validateEchange',
    component: ValidateEchangeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard/listClient',
    component: ListClientComponent,
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    component: ErrorComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

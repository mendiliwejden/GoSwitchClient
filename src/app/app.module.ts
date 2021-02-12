import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { ContactComponent } from './user/contact/contact.component';
import { ErrorComponent } from './user/error/error.component';
import { MyHomeComponent } from './user/my-home/my-home.component';
import { DestinationComponent } from './user/destination/destination.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './shared/profile/edit-profile/edit-profile.component';
import { EditPasswordComponent } from './shared/profile/edit-password/edit-password.component';
import { DemandeEchangeComponent } from './user/demande-echange/demande-echange.component';
import { HomeAvailableComponent } from './user/home-available/home-available.component';
import { HomeDetailsComponent } from './user/home-details/home-details.component';
import { TunisComponent } from './user/Region/tunis/tunis.component';
import { NabeulComponent } from './user/Region/nabeul/nabeul.component';
import { BenArousComponent } from './user/Region/ben-arous/ben-arous.component';
import { SousseComponent } from './user/Region/sousse/sousse.component';
import { ArianaComponent } from './user/Region/ariana/ariana.component';
import { BejaComponent } from './user/Region/beja/beja.component';
import { BizerteComponent } from './user/Region/bizerte/bizerte.component';
import { GabesComponent } from './user/Region/gabes/gabes.component';
import { GafsaComponent } from './user/Region/gafsa/gafsa.component';
import { JendoubaComponent } from './user/Region/jendouba/jendouba.component';
import { KairouanComponent } from './user/Region/kairouan/kairouan.component';
import { KasserineComponent } from './user/Region/kasserine/kasserine.component';
import { KebiliComponent } from './user/Region/kebili/kebili.component';
import { KefComponent } from './user/Region/kef/kef.component';
import { MahdiaComponent } from './user/Region/mahdia/mahdia.component';
import { ManoubaComponent } from './user/Region/manouba/manouba.component';
import { MedenineComponent } from './user/Region/medenine/medenine.component';
import { MonastirComponent } from './user/Region/monastir/monastir.component';
import { SfaxComponent } from './user/Region/sfax/sfax.component';
import { SidiBouzidComponent } from './user/Region/sidi-bouzid/sidi-bouzid.component';
import { SilianaComponent } from './user/Region/siliana/siliana.component';
import { TataouineComponent } from './user/Region/tataouine/tataouine.component';
import { TozeurComponent } from './user/Region/tozeur/tozeur.component';
import { ZaghouanComponent } from './user/Region/zaghouan/zaghouan.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    MyHomeComponent,
    DestinationComponent,
    EditProfileComponent,
    EditPasswordComponent,
    DemandeEchangeComponent,
    HomeAvailableComponent,
    HomeDetailsComponent,
    TunisComponent,
    NabeulComponent,
    BenArousComponent,
    SousseComponent,
    ArianaComponent,
    BejaComponent,
    BizerteComponent,
    GabesComponent,
    GafsaComponent,
    JendoubaComponent,
    KairouanComponent,
    KasserineComponent,
    KebiliComponent,
    KefComponent,
    MahdiaComponent,
    ManoubaComponent,
    MedenineComponent,
    MonastirComponent,
    SfaxComponent,
    SidiBouzidComponent,
    SilianaComponent,
    TataouineComponent,
    TozeurComponent,
    ZaghouanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

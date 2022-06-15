import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GestionService } from './gestion.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ListeComponent } from './liste/liste.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ModifierComponent } from './modifier/modifier.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListeComponent,
    AddComponent,
    DetailComponent,
    HomeComponent,
    ModifierComponent,
    PanierComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

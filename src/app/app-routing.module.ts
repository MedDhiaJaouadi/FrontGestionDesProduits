import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';

import { LoginComponent } from './login/login.component';
import { ModifierComponent } from './modifier/modifier.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path: "liste" , component : ListeComponent} ,
  {path: "add" , component : AddComponent} ,
  {path: "detail/:id" , component : DetailComponent},
  {path: "home" , component : HomeComponent} ,
  {path: "modifier" , component : ModifierComponent} ,
  {path: "panier" , component : PanierComponent} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

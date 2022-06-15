import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: Object;
   produits:any=[]
   titre :string="";

  constructor(private serv:GestionService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.route.navigate(["login"])
    
    }
    
    this.serv.getProduits();
  }
  deconnecter(){
    localStorage.clear();
    window.location.replace('login')
  }
  

getProduit(){
this.serv.getProduits().subscribe(
  data=>{this.produits=data},
  err=>{}
)
}

          
gettitre(){
 
if(this.titre.length==0){
  this.serv.getProduits();
}if(this.titre.length>0){
 this.serv.getAllProduitbyTitre(this.titre).subscribe({
   next:(data:any)=>{this.produits =data
     
   
     },
   error:(err:any)=>{},
   complete:()=>{}
 })}

}
  
}

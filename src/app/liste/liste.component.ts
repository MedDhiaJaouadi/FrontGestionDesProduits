import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';
import { PanierService } from '../service/panier.service';
import { Panier1Service } from '../service/panier1.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  [x: string]: Object;
   produits:any=[]
   titre :string="";
   arrays:any=[];
   searchKey:string="";

   public productList=[{"id":"","titre":"","prix":"","image":"","quantiter":0}]
   public filterCategory:any;
  constructor(private serv:GestionService,private route:Router, private PanierService:PanierService,private panier1:Panier1Service) { }

  ngOnInit(): void {
    this.productList.splice(0)
    if(localStorage.getItem("token")==null){
      this.route.navigate(["login"])
    
    }
    this.serv.getProduits()
  .subscribe(res=>{
    this.produits = res;
    console.log(res)
    this.filterCategory = res;
  /*  this.productList.forEach((a:any) => {
      
      Object.assign(a,{quantity:1,total:a.price});
    });
   // console.log(this.productList)
    this.arrays = this.productList
    //console.log(this.arrays) */
  });
 
  this.PanierService.search.subscribe((val:any)=>{
    this.searchKey = val;
  })
 

  }
getProduits(){
  this.serv.getProduits().subscribe(
    data=>{this.produits=data},
    err=>{}
  )
}
deleteProduit(id:any){
  console.log(id)
  this.serv.deleteProduit(id).subscribe({
    next:(data:any)=>
    {
      this.getProduits()
     console.log(data)

      },
    error:(err:any)=>{
      console.log(err)
    },
    complete:()=>{}
  });
}
addtocart(item:any){
  
  this.PanierService.addtoCart(item);

}

            
gettitre(){
   console.log(this.titre)
  if(this.titre.length==0){
    this.getProduits();
  }if(this.titre.length>0){
   this.serv.getAllProduitbyTitre(this.titre).subscribe({
     next:(data:any)=>{
      console.log(data) 
      this.produits =data
    },
     error:(err:any)=>{
       console.log(err)
     },
     complete:()=>{}
   })}
  
 }
 deconnecter(){
  localStorage.clear();
  window.location.replace('login')
}

update(produit:any){
  localStorage.setItem("updateproduit",JSON.stringify(produit))
  this.route.navigate(["modifier"])

}
AddPanier(produit:any){
  produit.quantiter=1
this.panier1.addProuit(produit)
console.log(this.panier1.getall())


}

}

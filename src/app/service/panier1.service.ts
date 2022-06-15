import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Panier1Service {
  public productList=[{"id":"","titre":"","prix":"","image":"","quantiter":0}]
  constructor() {
   
  }
   addProuit(produit:any){
    this.productList=JSON.parse(localStorage.getItem("ListPanier")!)
   var test= this.productList.find(x => x.id === produit.id)
      if(test==undefined){
        this.productList.push(produit)
      }else{
        let i = this.productList.findIndex(x => x.id === produit.id);
    
     this.productList[i].quantiter++
      }
      localStorage.setItem("ListPanier",JSON.stringify(this.productList))
     
   
   }
   deleetProduit(p:any){
    this.productList=JSON.parse(localStorage.getItem("ListPanier")!)
     this.productList.splice(p)
     localStorage.setItem("ListPanier",JSON.stringify(this.productList))
   }
   getall(){
     return JSON.parse(localStorage.getItem("ListPanier")!)
   }
}


import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from '../service/panier.service';
import { Panier1Service } from '../service/panier1.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

    
  public products:any;
  public grandTotal !: number;
constructor(private PanierService : PanierService, private route:Router,private panier1:Panier1Service) { }

ngOnInit(): void {
console.log(this.panier1.getall())

  this.products=this.panier1.getall()
  console.log(this.products)
}
removeItem(p: any){
  localStorage.setItem("listPanier",JSON.stringify(this.products))
//  this.PanierService.removeCartItem(p);
}
emptycart(){
  this.PanierService.removeAllCart();
}

}

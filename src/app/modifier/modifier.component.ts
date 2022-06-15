import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
produit:any ;
  constructor(private gest:GestionService) { }

  ngOnInit(): void {
    this.produit=JSON.parse(localStorage.getItem("updateproduit")!)
    console.log(this.produit)
  }


  update(){
    this.gest.updateProduit(this.produit).subscribe({
      next:(data:any)=>{
        console.log(data)},
        error:(err:any)=>{console.log(err)},
        complete:()=>{}
      
    })
  }
}

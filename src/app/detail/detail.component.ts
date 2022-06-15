import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  num: number;
  prod:any={"id":null, "titre":"","prix":0.0}
  constructor(private act:ActivatedRoute, private ser :GestionService, private route:Router) { 
this.num=this.act.snapshot.params["id"];
this.ser.getProduit(this.num).subscribe(
  data=>{this.prod=data},
  err=>{}
  
)
}
  ngOnInit(): void {
    if(localStorage.getItem("token")==null){
      this.route.navigate(["login"])
    
    }
  }

}

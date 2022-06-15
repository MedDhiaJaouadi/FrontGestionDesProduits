import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  prod:any = { "id": null, "titre": "", "prix": 0.0 }
  constructor(private serv: GestionService, private route: Router) { }

  ngOnInit(): void {
if(localStorage.getItem("token")==null){
  this.route.navigate(["login"])

}

  }
  ajouter(image: any) {
    const fichier: File = image.files[0];
    const read = new FileReader();
    read.addEventListener("load", (event: any) => {
      this.serv.addProduit(fichier, this.prod).subscribe(
        (data) => { this.route.navigate(['/liste']) },
        (err) => { }
      )

    }

    )
    read.readAsDataURL(fichier);
  }
}

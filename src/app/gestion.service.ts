import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) {}
  getProduits(){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!});

    return this.http.get("http://127.0.0.1:8080/rest/produits/",{headers:hs})
  }
  getProduit(id:number){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!});

    return this.http.get("http://127.0.0.1:8080/rest/produit/"+id,{headers:hs})
  }
  deleteProduit(id:number){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!});

    return this.http.delete("http://127.0.0.1:8080/rest/delete/"+id,{headers:hs})
  }
  addProduit(image:File,pdt:any){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    const form= new FormData();
    form.append('file',image);
    form.append('prod', JSON.stringify(pdt));

  return  this.http.post("http://127.0.0.1:8080/rest/add",form,{headers:hs})
  }
  getAllProduitbyTitre(titre:string){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    return  this.http.get("http://127.0.0.1:8080/rest/ProduitBytitre/"+titre,{headers:hs})

    

  }
  updateProduit(produit:any){
    let hs= new HttpHeaders({"Authorization":localStorage.getItem("token")!})
    const form= new FormData();
   
    form.append('prod', JSON.stringify(produit));
    return  this.http.post("http://127.0.0.1:8080/rest/update",produit,{headers:hs});

}


}

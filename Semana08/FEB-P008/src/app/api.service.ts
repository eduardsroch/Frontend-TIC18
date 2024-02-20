import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://en.wikipedia.org/w/api.php?action=query&format=json&requestid=&list=search&formatversion=2&srsearch=";
  conteudo:any;
  
  constructor(private http: HttpClient) { }

  getData(srsearch:string){
    return this.http.get(this.url + srsearch + '&origin=*');
  }
  
}

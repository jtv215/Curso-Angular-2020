import { Cancion } from './../cancion';
import { Injectable } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map'; //npm install --save rxjs-compat
import { Observable, of } from 'rxjs';

import { User } from '../user';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable({ providedIn: 'root' })


export class PeticionesService{
public url: string;

constructor(
private _http:HttpClient,
private messageService: MessageService
){
   // this.url = "https://jsonplaceholder.typicode.com/posts";
   this.url = "http://localhost:9188/api/getCanciones";
}



    getPrueba(){
        return "hola Mundo desede el servicio";
    }



getArticulos(): Observable<Cancion[]> {
    return this._http.get<Cancion[]>(this.url,httpOptions)
      
}


}
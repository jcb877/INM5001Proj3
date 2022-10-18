import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
 readonly APIUrl = "http://127.0.0.1:8000/";
 readonly PhotoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http:HttpClient) { }

  getNivAccList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/niveauAcces/');
  }

  addNivAcc(val:any){
    return this.http.post(this.APIUrl + '/niveauAcces/',val);
  }

  updateNivAcc(val:any){
    return this.http.put(this.APIUrl + '/niveauAcces/',val);
  }

  deleteNivAcc(val:any){
    return this.http.delete(this.APIUrl + '/niveauAcces/'+ val);
  }

  getUsagerList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/usagers/');
  }

  addUsager(val:any){
    return this.http.post(this.APIUrl + '/usagers/',val);
  }

  updateUsager(val:any){
    return this.http.put(this.APIUrl + '/usagers/',val);
  }

  deleteUsager(val:any){
    return this.http.delete(this.APIUrl + '/usagers/'+ val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'SaveFile',val);
  }

  getAllNiveauAccessNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/niveauAcces/');
  }

}

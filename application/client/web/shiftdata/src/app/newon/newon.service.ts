import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class NewonService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllNewonValues(data:any){

    return this.http.post(`${this.BaseURL}/Newon`,data);
  }

  GetAllNewonValues(){
    return this.http.get(`${this.BaseURL}/Newon`);
  }

  UpdateNewon(data:any){
    return this.http.put(`${this.BaseURL}/Newon/${data.id}`,data);
  }

  getSpecificNewon(id:number){
    return this.http.get(`${this.BaseURL}/Newon/${id}`);
  }

  getSpecificNewonHistory(id:number){
    return this.http.get(`${this.BaseURL}/Newon/${id}/history?days=30`);
  }

  DeleteNewonValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/Newon/${dataId}`);
  }

  GetEntityById(NewonId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/Newonid/` + NewonId);
  }

  SearchNewon(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/Newon/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}
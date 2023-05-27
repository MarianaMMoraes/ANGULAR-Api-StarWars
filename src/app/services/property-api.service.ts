import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyApiService {

  API_URL = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}
    
  public getAllCharacters() {
    return this.http.get<any>(`${this.API_URL}/people/`);
  }
  
  public getCharactersNewPage(url:string) {
    return this.http.get<any>(url);
  }

  public getPlanet(url:string) {
    return this.http.get<any>(url);
  }
   
}

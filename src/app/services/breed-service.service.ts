import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreedServiceService {
  private apiUrl = 'https://dog.ceo/api/breeds/list/all';
  private randomImageUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor( private http: HttpClient) { }

  getBreed(): Observable<any> {
return this.http.get<any>(this.apiUrl);
  }

  getPhoto(breed: string): Observable<any> {
    return this.http.get<any>('https://dog.ceo/api/breed/'+breed.trim()+'/images/random/1');
}

getRandomPhoto(): Observable<any> {
  return this.http.get<any>(this.randomImageUrl)
}
}

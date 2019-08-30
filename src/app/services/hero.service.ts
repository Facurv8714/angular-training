import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }
  getHeros(): Observable<Hero[] | HttpErrorResponse> {
    return this.http.get<Hero[]>("http://localhost:3000/heros").pipe(
      catchError(this.handleHerror));
  }
  private handleHerror(
    error: HttpErrorResponse): Observable<HttpErrorResponse> {
    if (error.status == 404) {
      alert("Ups! mandaste fruta al back");
    }
    else {
      alert(
        "Ups! hay un problema, no contacte al admin porque tampoco sabe cual es"
      );
    }
    return throwError(error);
  }
  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`http://localhost:3000/heros/${id}`);
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>("http://localhost:3000/heros", hero);

  }

}

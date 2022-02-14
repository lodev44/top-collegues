import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avis, Collegue, Vote } from '../modele';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  listerCollegues(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues");
  }

  ajouterCollegue(collegue: Partial<Collegue>): Observable<Collegue> {
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues",
      collegue
    );
  }

  findByPseudo(pseudo: string): Observable<Collegue> {
    return this.http.get<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues/" + pseudo);
  }


  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {
    console.log("Log - DataService - DonnerUnAvis");
    const headers = { 'content-type': 'application/json' };
    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/votes",
      {
        "avis": avis,
        "pseudo": collegue.pseudo
      },
      { 'headers': headers })
  }

  listerVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>("https://formation-angular-collegues.herokuapp.com/api/v1/votes");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  private url = 'http://127.0.0.1:5000/proposals/';

  constructor(private http: HttpClient) {}

  getProposalsByUserId(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}user/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProposalsByServiceId(serviceId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}service/${serviceId}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  getAllProposals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProposal(id: string): Observable<any> {
    return this.http.delete(`${this.url}${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  acceptProposal(id: string): Observable<any> {
    return this.http.put(`${this.url}accept/${id}`, {})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:8083'; // Replace with your Spring backend API URL

  constructor(private http: HttpClient) { }

  // Example method for making a GET request
  getTaches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/taches`);
  }
}

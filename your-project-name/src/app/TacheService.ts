// src/app/tache.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private apiUrl = 'http://localhost:8083/taches'; // Replace with your Spring backend API URL

  constructor(private http: HttpClient) { }

  // Example method for making a GET request to fetch all tasks
  getAllTache(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Example method for making a POST request to add a task
  ajouterTache(tache: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tache);
  }

  // Example method for making a DELETE request to remove a task by ID
  supprimerTache(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Example method for making a GET request to fetch a task by ID
  getTache(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Example method for making a PUT request to modify a task
  modifierTache(tache: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, tache);
  }

  // Add more methods as needed for additional functionalities

  // ...

  // Example method for making a GET request to fetch tasks in the trash
  getTasksInTrash(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/trash`);
  }

  // Example method for making a PUT request to move a task to the trash
  moveToTrash(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/trash`, {});
  }

  // Example method for making a PUT request to restore a task from the trash
  restoreFromTrash(id: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/restore`, {});
  }

  // Example method for making a DELETE request to permanently delete a task
  deletePermanently(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}/permanent`);
  }
}

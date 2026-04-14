import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pregunta, PaginatedPreguntas } from '../models/pregunta';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private apiUrl = `${environment.apiUrl}/preguntas`;

  constructor(private http: HttpClient) { }

  getPreguntas(page: number = 1, limit: number = 10, search: string = ''): Observable<PaginatedPreguntas> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
      
    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<PaginatedPreguntas>(this.apiUrl, { params });
  }

  getPregunta(id: string): Observable<Pregunta> {
    return this.http.get<Pregunta>(`${this.apiUrl}/${id}`);
  }

  createPregunta(pregunta: Partial<Pregunta>): Observable<Pregunta> {
    return this.http.post<Pregunta>(this.apiUrl, pregunta);
  }

  updatePregunta(id: string, pregunta: Partial<Pregunta>): Observable<Pregunta> {
    return this.http.patch<Pregunta>(`${this.apiUrl}/${id}`, pregunta);
  }

  deletePregunta(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  addRespuesta(preguntaId: string, usuario: string, texto: string): Observable<Pregunta> {
    return this.http.post<Pregunta>(`${this.apiUrl}/${preguntaId}/respuestas`, { usuario, texto });
  }
}

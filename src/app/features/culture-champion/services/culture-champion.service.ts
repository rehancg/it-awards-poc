import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';

export interface CultureChampion {
  id: number;
  name: string;
  department: string;
  achievements: string[];
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root'
})
export class CultureChampionService {
  private endpoint = 'culture-champions';

  constructor(private apiService: ApiService) {}

  getAll(): Observable<CultureChampion[]> {
    return this.apiService.get<CultureChampion[]>(this.endpoint);
  }

  getById(id: number): Observable<CultureChampion> {
    return this.apiService.get<CultureChampion>(`${this.endpoint}/${id}`);
  }

  create(champion: Omit<CultureChampion, 'id'>): Observable<CultureChampion> {
    return this.apiService.post<CultureChampion>(this.endpoint, champion);
  }

  update(id: number, champion: Partial<CultureChampion>): Observable<CultureChampion> {
    return this.apiService.put<CultureChampion>(`${this.endpoint}/${id}`, champion);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`${this.endpoint}/${id}`);
  }
}

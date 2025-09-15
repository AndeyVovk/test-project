import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Policies, WorkQueue} from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly base = 'http://localhost:3001';

  constructor(private http: HttpClient) {
  }
  getAccounts():Observable<WorkQueue[]> {
    return this.http.get<WorkQueue[]>(`${this.base}/workQueue`);
  }
  getPolicies():Observable<Policies[]>{
    return this.http.get<Policies[]>(`${this.base}/policies`);
  }
}

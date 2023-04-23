import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  constructor(private http: HttpClient) {}

  public getCompanyData(): Observable<Company> {
    return this.http.get<Company>(
      'https://company-data-a5278-default-rtdb.europe-west1.firebasedatabase.app/company.json'
    );
  }
}

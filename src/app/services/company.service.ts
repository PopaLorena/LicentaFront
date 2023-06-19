import { HttpClient } from '@angular/common/http';
import { Company } from 'src/models/companyGet';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  token = localStorage.getItem("jwt");
  header = {Authorization: 'Bearer ${this.token}'};
  constructor(private httpClient: HttpClient) { }
}

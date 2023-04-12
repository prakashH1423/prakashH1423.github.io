import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http :HttpClient) { }

  getUniversities(){
    return this.http.get("http://universities.hipolabs.com/search");
  }
}

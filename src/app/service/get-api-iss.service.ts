import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GetApiIssService {

  constructor(private http: HttpClient) {
  }

  getPeopleIss() {
    return this.http.get('http://api.open-notify.org/astros.json')
  }
  getLocationIss() {
    return this.http.get("http://api.open-notify.org/iss-now.json")
  }
}

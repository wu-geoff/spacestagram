import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApodReturn } from "../models/apod_return.model";
import Config from '../../../config.json';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(private http: HttpClient) { }

  getAPODs() {
    return this.http.get<ApodReturn[]>(`${Config.api}?api_key=${Config.key}&start_date=2022-01-01`);
  }
}

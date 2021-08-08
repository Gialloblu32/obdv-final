import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(
    private http: HttpClient 
  ) { }


  getTemperature (ciudad: string) {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=c79b585c3113e2abb3daf7819ab5e525&units=metric&lang=es`);
  }

}


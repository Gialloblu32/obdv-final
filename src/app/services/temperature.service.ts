import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(
    private http: HttpClient 
  ) { }

  fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q=Siem%20Reap&appid=c79b585c3113e2abb3daf7819ab5e525&units=metric&lang=es";

  getTemperature () {
    return this.http.get<any>(this.fetchUrl);
  }

}


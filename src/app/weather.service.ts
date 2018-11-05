import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from '../../node_modules/rxjs'; 
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpAgent: HttpClient) { }

  weatherDataUrl = 'https://api.openweathermap.org/data/2.5/find?q=London&APPID=4a8b27c9afc167b2d33396da75981ce6';

  getWeatherData(): Observable<any> {
    return this.httpAgent.get(this.weatherDataUrl)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "ServerCommunication  Error")
  }


}

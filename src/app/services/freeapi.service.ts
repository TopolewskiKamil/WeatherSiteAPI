import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private httpclient: HttpClient) { }

  getWeatherData(city:string): Observable<any>{
    return this.httpclient.get("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=d0e88ddec4dda09589b5a39235133b11").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error:any) {
    let errorMessage = '';
    errorMessage = `Error: ${error.error.message}`;
    window.alert(errorMessage);

    return throwError(errorMessage);
  }
}

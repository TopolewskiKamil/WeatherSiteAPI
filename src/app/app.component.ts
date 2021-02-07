import { Component } from '@angular/core';
import { DataTableItem } from './data-table/data-table.component';
import { FreeapiService } from './services/freeapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-v1';

  constructor(private _freeApiService: FreeapiService){

  }

  city:string;
  lon:string;
  lat:string;
  weather:any;
  temp:string;
  tempMin:string;
  tempMax:string;

  cityName:string;

  itemToShow: DataTableItem[];

  onKey(event: any) { // without type info
    this.cityName = event.target.value;
   
  }

  display = false;
  onClickMe() {
    this.display = true;
    this._freeApiService.getWeatherData(this.cityName)
    .subscribe
    (
      data=>
      {
        this.itemToShow = [{
          city: data.name,
          weather: data.weather[0].main,
          icon: "http://openweathermap.org/img/wn/"+ data.weather[0].icon +".png",
          lon: data.coord.lon,
          lat: data.coord.lat,
          temp: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
        }
        ];

      }
    );
    
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { WeatherApiService } from './weather-api.service';
import { WeatherModel } from './weather-model';
import { ForecastModel } from './forecast-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'weatherapp';


  currentWeather: WeatherModel = {} as WeatherModel;
  forecastWeather: ForecastModel = {} as ForecastModel;
  position: GeolocationCoordinates = {} as GeolocationCoordinates;

  constructor(private api: WeatherApiService) { }

  async ngOnInit() {
    await this.getLocation();
    this.api.getWeather(this.position).subscribe((res) => {
      this.currentWeather = res;
    })
    this.api.getForecast(this.position).subscribe((res) => {
      this.forecastWeather = res;
    } )
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          if (position) {
            this.position = position.coords;
            resolve(
              true
            )
          }
        },
          (error: GeolocationPositionError) => {reject(error)
        console.log(error)});
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }

  changeLoc(val:string) {
    this.api.getWeather(undefined, val).subscribe((res) => {
      this.currentWeather = res;
    })
    this.api.getForecast(undefined, val).subscribe((res) => {
      this.forecastWeather = res;
    })

  }

}

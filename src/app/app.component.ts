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


  currentWeather: WeatherModel = {} as WeatherModel || {};
  forecastWeather: ForecastModel = {} as ForecastModel || {};
  position: GeolocationCoordinates = {} as GeolocationCoordinates;

  constructor(private api: WeatherApiService) { }

  async ngOnInit() {
    await this.getLocation();
    this.api.getWeather(this.position).subscribe((res) => {
      this.currentWeather = res;
    })
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
          if (position) {
            this.position = position.coords;
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          }
        },
          (error: GeolocationPositionError) => reject(error));
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  }

  changeLoc() {
    this.api.getWeather(undefined, "izmir").subscribe((res) => {
      this.currentWeather = res;
    })
    this.api.getForecast(undefined, "izmir").subscribe((res) => {
      this.forecastWeather = res;
    })

  }

}

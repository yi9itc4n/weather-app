import { Component, Input } from '@angular/core';
import { WeatherModel } from '../weather-model';
import { ForecastModel } from '../forecast-model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  @Input() curWeather: WeatherModel = {} as WeatherModel || {} ;
  @Input() forWeather: ForecastModel = {} as ForecastModel || {};

}

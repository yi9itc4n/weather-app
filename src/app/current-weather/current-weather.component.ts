import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { WeatherModel } from '../weather-model';
import { ForecastModel } from '../forecast-model';
import {formatCurrency, formatDate, formatNumber} from "@angular/common";
import {min} from "rxjs";
import {Format} from "@angular-devkit/build-angular/src/builders/extract-i18n/schema";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnChanges{

  @Input() curWeather: WeatherModel = {} as WeatherModel;

  weatherIconUrl =  "../assets/10d.png";
  public weatherDetails:string[]=[];


  ngOnChanges(changes: SimpleChanges) {
    this.weatherDetails=[];
    this.weatherDetails.push(formatNumber(this.curWeather.main.temp_max,"en","1.0-0")+"°"+`<br>`+"High");
    this.weatherDetails.push(formatNumber(this.curWeather.wind.speed,"en","1.0-0")+" km/h"+`<br>`+"Wind");
    this.weatherDetails.push(this.eptoTime(this.curWeather.sys.sunrise)+`<br>`+"Sunrise");
    this.weatherDetails.push(formatNumber(this.curWeather.main.temp_min,"en","1.0-0")+"°"+`<br>`+"Low");
    this.weatherDetails.push((this.curWeather.rain ? String(this.curWeather.rain["1h"]):'0')+"%"+`<br>`+"Rain");
    this.weatherDetails.push(this.eptoTime(this.curWeather.sys.sunset)+`<br>`+"Sunset");

  }

  eptoTime(dt: number){
    return formatDate(dt*1000,"HH:mm","en");
}

  iconUrl(icon: string): string {
    return this.weatherIconUrl.replace("10d", icon);
  }



  protected readonly formatCurrency = formatCurrency;
  protected readonly length = length;
}

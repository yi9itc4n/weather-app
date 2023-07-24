import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WeatherModel} from "../weather-model";
import {ButtonModule} from "primeng/button";
import {PrimeIcons} from "primeng/api";
import {WeatherApiService} from "../weather-api.service";
import {query} from "@angular/animations";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  @Input() curWeather: WeatherModel = {} as WeatherModel;
  @Input() forWeather: WeatherModel = {} as WeatherModel;

  @Output() queryEvent = new EventEmitter<string>();


  constructor(private api:WeatherApiService) {
  }
  search(value:string){
    this.queryEvent.emit(value);
  }

}

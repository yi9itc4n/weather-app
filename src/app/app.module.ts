import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastWeatherComponent } from './forecast-weather/forecast-weather.component';
import { WeatherApiService } from './weather-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherApiService } from './weather-api.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import { ForecastViewComponent } from './forecast-view/forecast-view.component';
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {ScrollerModule} from "primeng/scroller";
import {ScrollPanelModule} from "primeng/scrollpanel";

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    TopBarComponent,
    ForecastViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    ScrollerModule,
    ScrollPanelModule,
  ],
  providers: [WeatherApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  wApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  fApiUrl = "https://api.openweathermap.org/data/2.5/forecast";
  appId = "dd0189d0baa1f62c2d8e61e99186b748";
  defPrm = new HttpParams().appendAll(
    {
      "appid": this.appId,
      "lat": 40.2,
      "lon": 29,
      "units": "metric",
      "lang": "tr"
    }

  );

  getWeather(pos?: GeolocationCoordinates, q?: string): Observable<any> {
    let tempPrm =  this.defPrm;
    if(pos) {
      tempPrm = tempPrm.set("lat",pos.latitude);
      tempPrm = tempPrm.set("lon",pos.longitude);
    }
    if(q) {
      tempPrm = tempPrm.delete("lat");
      tempPrm = tempPrm.delete("lon");
      tempPrm = tempPrm.append("q", q);
    }


    return this.http.get(this.wApiUrl, { params: tempPrm });
  }

  getForecast(pos?: GeolocationCoordinates, q?: string): Observable<any> {
    let tempPrm = this.defPrm;
    if(pos) {
      tempPrm = tempPrm.set("lat",pos.latitude);
      tempPrm = tempPrm.set("lon",pos.longitude);
    }
    if(q) {
      tempPrm = tempPrm.delete("lat");
      tempPrm = tempPrm.delete("lon");
      tempPrm = tempPrm.append("q", q);
    }
    return this.http.get(this.fApiUrl, { params: tempPrm });
 }



}

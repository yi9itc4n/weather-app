import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ForecastModel} from "../forecast-model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-daily-view',
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.css']
})
export class DailyViewComponent implements OnChanges{
  public forecastList:any=[];
  @Input() forecast:ForecastModel={} as ForecastModel;

  ngOnChanges(changes: SimpleChanges) {
    this.forecastList=[];
    this.forecast.list.forEach(obj=>{
      if(formatDate(obj.dt*1000,"HH","en")=="12"){
        this.forecastList.push(obj);
      }
    });

  }

  protected readonly formatDate = formatDate;
}

import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ForecastModel} from "../forecast-model";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-forecast-view',
  templateUrl: './forecast-view.component.html',
  styleUrls: ['./forecast-view.component.css']
})
export class ForecastViewComponent implements OnChanges{
  @Input() forecast:ForecastModel={} as ForecastModel;

  public forecastList:any=[];

ngOnChanges(changes: SimpleChanges) {
  this.forecastList=[];
  this.forecast.list.forEach(obj=>{
    if(formatDate(obj.dt*1000,"HH","en")=="12"){
     this.forecastList.push(obj);
    }
  });

}


  protected readonly scrollX = scrollX;
  protected readonly formatDate = formatDate;
}

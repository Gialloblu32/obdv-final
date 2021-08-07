import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../../services/temperature.service'


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  constructor(
    private temperatureService: TemperatureService
    ) { }

    temp: any;
  

  showTemperature () {
    this.temperatureService.getTemperature()
      .subscribe((data: any) => {
        console.log(data);
        this.temp = data;
      });
  }

  ngOnInit(): void {
    this.showTemperature();
  }




}

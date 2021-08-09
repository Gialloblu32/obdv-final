import { Component, OnInit, Input } from '@angular/core';
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
  
    @Input() ciudad = "Buenos Aires";

  showTemperature () {
    this.temperatureService.getTemperature(this.ciudad)
      .subscribe((data: any) => {
      this.temp = data;
      });
  }

  ngOnInit(): void {
    this.showTemperature();
  }




}

import { Component } from '@angular/core';
import { WeatherService } from 'src/app/home/service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private Res: any;

  constructor(
              private weatherAPI: WeatherService
  ) {}

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.Res = response;
      console.log(this.Res);
    });
  }
  
  }
  
  


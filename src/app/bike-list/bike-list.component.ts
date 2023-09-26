import { Component } from '@angular/core';
import {Bike} from "../bike.model";
import {BikeService} from "../bike.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent {
  bikes: Bike[] = []; // Propiedad para almacenar las bicicletas


  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void {
    this.bikeService.getAllBikes()
      .subscribe(bikes => {
      this.bikes = bikes;
    });
  }

}

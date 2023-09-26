import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BikeService} from "../bike.service";
import {Bike} from "../bike.model";

@Component({
  selector: 'app-bike-create',
  templateUrl: './bike-create.component.html',
  styleUrls: ['./bike-create.component.css']
})
export class BikeCreateComponent implements OnInit{
  bikeForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private bikeService: BikeService) {}

  ngOnInit(): void {
    this.bikeForm = this.fb.group({
      serial: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  onSubmit() {
    if (this.bikeForm?.valid) {
      const formData = this.bikeForm.value as Bike;
      this.bikeService.createBike(formData).subscribe(
        (createdBike) => {
          console.log('Bike created successfully:', createdBike);
          this.bikeForm?.reset();
        },
        (error) => {
          console.error('Error creating bike:', error);
        }
      );
    }
  }
}

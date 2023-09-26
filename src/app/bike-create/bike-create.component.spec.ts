import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeCreateComponent } from './bike-create.component';

describe('BikeCreateComponent', () => {
  let component: BikeCreateComponent;
  let fixture: ComponentFixture<BikeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelistingComponent } from './employeelisting.component';

describe('EmployeelistingComponent', () => {
  let component: EmployeelistingComponent;
  let fixture: ComponentFixture<EmployeelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

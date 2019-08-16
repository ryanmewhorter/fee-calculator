import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCalculatorComponent } from './fee-calculator.component';
import {FormsModule} from '@angular/forms';

describe('FeeCalculatorComponent', () => {
  let component: FeeCalculatorComponent;
  let fixture: ComponentFixture<FeeCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ FeeCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createForm should return a form', () => {
    expect(component.createForm()).toBeTruthy();
  });
});

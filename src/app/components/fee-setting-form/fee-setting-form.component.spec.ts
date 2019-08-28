import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeSettingFormComponent } from './fee-setting-form.component';

describe('FeeSettingFormComponent', () => {
  let component: FeeSettingFormComponent;
  let fixture: ComponentFixture<FeeSettingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeSettingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeSettingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create fee setting form', () => {
    expect(component.createFeeSettingForm()).toBeTruthy();
  });

  it('should create fee form', () => {
    expect(component.createFeeForm()).toBeTruthy();
  });
});

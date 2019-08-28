import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-fee-setting-form',
  templateUrl: './fee-setting-form.component.html',
  styleUrls: ['./fee-setting-form.component.scss']
})
export class FeeSettingFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.form = this.createFeeSettingForm();
  }

  submit(): void {
    console.log('Form submitted: ', this.form.value);
  }

  cancel(): void {
    console.log('New fee setting cancelled.');
    this.location.back();
  }

  addFeeForm(): void {
    (this.form.get('fees') as FormArray).push(this.createFeeForm());
  }

  removeFeeForm(index: number): void {
    (this.form.get('fees') as FormArray).removeAt(index);
  }

  createFeeSettingForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(''),
      description: this.fb.control(''),
      fees: this.fb.array([this.createFeeForm()])
    });
  }

  createFeeForm(): FormGroup {
    return this.fb.group({
      flat: this.fb.control(''),
      percent: this.fb.control(''),
      max: this.fb.control('')
    });
  }

}

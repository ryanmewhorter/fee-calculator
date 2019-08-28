import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fee-form',
  templateUrl: './fee-form.component.html',
  styleUrls: ['./fee-form.component.scss']
})
export class FeeFormComponent implements OnInit {

  @Input()
  group: FormGroup = null;

  @Input()
  index: number = null;

  @Output()
  remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeClicked(): void {
    this.remove.emit(this.index);
  }

}

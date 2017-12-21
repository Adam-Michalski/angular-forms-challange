import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(values) {
    this.submit.emit(values);
  }

}

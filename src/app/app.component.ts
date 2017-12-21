import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  accountForm: FormGroup;

  account = {
    username: '',
    password: '',
    email: '',
    terms: false,
  };

  constructor() {
    this.accountForm = this.createForm(this.account);
    this.accountForm.patchValue(this.account);
    console.log(this.accountForm.value);
  }

  createForm(data: any): FormGroup {
    const form = new FormGroup({});
    Object.keys(data).forEach((key: string) => {
      form.addControl(key, new FormControl([data[key]], [Validators.required]));
    });
    return form;
  }
}

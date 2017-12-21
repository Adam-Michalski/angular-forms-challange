import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegisterFormComponent,
  ],
  exports: [
    RegisterFormComponent,
  ]
})
export class CustomFormsModule {}

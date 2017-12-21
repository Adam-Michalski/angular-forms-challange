import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomFormsModule } from './components/forms/custom-forms.module';
import { ObjectKeysPipe } from './object-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ObjectKeysPipe,
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

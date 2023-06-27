import { Component } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { UserDataService } from '../service/user-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  submit(data: any) {
    console.warn('Form Submitted', data);
  }

  loginForm = new FormGroup({
    fname: new FormControl('', [Validators.required]),
    lname: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  controlHasError(form: FormGroup, validation: string, controlName: string) {
    const control = form.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

}

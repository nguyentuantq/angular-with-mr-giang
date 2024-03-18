import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidationService } from './customizeValidattion.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator) ],
    lastName: ['', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', Validators.min(4)],
    }),
  });

  constructor(
    private formBuilder: FormBuilder,
    private customValidator: CustomvalidationService
  ) {}
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}

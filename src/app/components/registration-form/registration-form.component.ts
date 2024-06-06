import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const btn = document.querySelector('.custom-cls button');
    // btn?.classList.add('need-to-hide');
  }

  // nameValidations: { regex: RegExp; message: string }[] = [
  //   {
  //     regex: /^(?!.--)$/,
  //     message: 'Name cannot contain two or more consicutive hyphens(-)',
  //   },
  //   {
  //     regex: /^(?!.  )$/,
  //     message: 'Name cannot contain two or more consicutive spaces(-)',
  //   },
  //   {
  //     regex: /^(?!. )(?!. )$/,
  //     message: 'Name cannot start or end with blank space',
  //   },
  //   {
  //     regex: /^(?!.- )(?!.- )$/,
  //     message: 'Name cannot start or end with hyphen(-)',
  //   },
  //   { regex: /^(?!.  )$/, message: 'Only Alphabet and hyphens(-) are allowed' },
  // ];

  nameValidations: { regex: RegExp; message: string }[] = [
    {
      regex: /^(?!.*--).*$/,
      message: 'Two or more consecutive hyphens(-) are not allowed',
    },
    {
      regex: /^(?!.*  ).*$/,
      message: 'Two or more consecutive spaces are not allowed',
    },
    {
      regex: /^(?!\s)(?!.*\s$).*$/,
      message: 'Blank space at the start or end is not allowed',
    },
    {
      regex: /^(?!-)(?!.*-$).*$/,
      message: 'Hyphen(-) at the start or end is not allowed',
    },
    {
      regex: /^[A-Za-z\s-]+$/,
      message: 'Only alphabets, blank spaces and hyphens (-) are allowed',
    },
    {
      regex: /^(?!.*\s-|.*-\s).*$/,
      message: 'Having a space and a hyphen side by side is not allowed.',
    },
  ];

  customNameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null; // If the field is empty, don't perform validation
    }

    for (const validation of this.nameValidations) {
      if (!validation.regex.test(value)) {
        return { customValidation: validation.message };
      }
    }

    return null; // Validation passed
  }

  public Genders: Array<string> = ['Male', 'Female'];

  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      this.customNameValidator.bind(this),
    ]),
    lastName: new FormControl(),
    gender: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl('', Validators.email),
    acceptNews: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}

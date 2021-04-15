import {
    AbstractControl,
    ValidationErrors
} from '@angular/forms';


export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const pswrd: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;
    if (control?.value) {
        const isValid = pswrd.test(control.value);
        return !isValid ? { invalidPassword: true } : null;

    }

    return null;
}

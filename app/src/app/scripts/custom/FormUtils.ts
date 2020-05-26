import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class FormUtils {
    constructor(private Apperyio: ApperyioHelperService) {}
    
    markFormControlsAsTouched(form, controlNames) {
        controlNames.forEach(controlName => {
           form.controls[controlName].markAsTouched(); 
        });
    }
    
    showPasswordOnClick(formName) {
        const eyeIcon = document.getElementsByTagName(formName)[0].getElementsByClassName('eye')[0];
        eyeIcon.addEventListener('click', (event) => {
            const passwordInput = < HTMLInputElement > document.getElementsByTagName(formName)[0].getElementsByClassName('password')[0];
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon['color'] = 'dark';
            } else {
                passwordInput.type = 'password';
                eyeIcon['color'] = 'light';
            }
        });
    }
    
}

/*
    Service class should be exported as ExportedClass
*/
export { FormUtils as ExportedClass };
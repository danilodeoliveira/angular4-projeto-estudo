import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidatorForm {
    formulario: FormGroup;

    constructor(form: FormGroup){
        this.formulario = form;
    }

    verificaValidTouched(campo: string) {
        return (
            !this.formulario.get(campo).valid &&
            (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
        );
    }

    showMessageError(campo: string, type: string){
        const campoRequired = this.formulario.get(campo);
        if (campoRequired.errors) {
            if (campoRequired.errors['required'] && type == 'required')
                return campoRequired.errors['required'] && campoRequired.touched;
            else if (campoRequired.errors['email'] && type == 'emailInvalid')
                return campoRequired.errors['email'] && campoRequired.value && campoRequired.touched;
            else if (campoRequired.errors['minlength'] && type == 'minLength')
                return campoRequired.errors['minlength'] && campoRequired.value && campoRequired.touched;
        }
    }

    aplicaCssErro(campo: string) {
        return {
            'invalid': this.verificaValidTouched(campo)
        };
    }
}

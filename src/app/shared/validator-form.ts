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

    verificaRequiredInvalido(campo: string) {
        const campoRequired = this.formulario.get(campo);
        if (campoRequired.errors) {
            return campoRequired.errors['required'] && campoRequired.touched;
        }
    }

    verificaEmailInvalido() {
        const campoEmail = this.formulario.get('email');
        if (campoEmail.errors) {
            return campoEmail.errors['email'] && campoEmail.value && campoEmail.touched;
        }
    }

    aplicaCssErro(campo: string) {
        return {
            'invalid': this.verificaValidTouched(campo)
        };
    }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ValidatorForm } from './../shared/validator-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  validatorForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    // private validatorForm: ValidatorForm
  ) { }
  
  
  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })

    this.validatorForm = new ValidatorForm(this.formulario);

  }

  onSubmit(){
    console.log(this.formulario)
    /* this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados)

        this.resetForm();
      },
    (error: any) => alert('Ocorreu um erro na operação')); */
  }

  resetForm(){
    this.formulario.reset();
  }

  /* verificaValidTouched(campo: string) {
    if (this.formulario.get(campo).errors){
      return (
        this.formulario.get(campo).errors['required'] &&
        (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
      );
    }else
      return false;
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.value && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'invalid': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  } */

  initValidation(campo){
    return this.validatorForm.aplicaCssErro(campo);
  }

}

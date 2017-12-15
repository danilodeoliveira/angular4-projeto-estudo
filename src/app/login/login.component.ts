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
      password: [null, [Validators.required, Validators.minLength(6)]]
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

  initValidation(campo){
    return this.validatorForm.aplicaCssErro(campo);
  }

}

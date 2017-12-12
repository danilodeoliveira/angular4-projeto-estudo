import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { ValidatorForm } from './../shared/validator-form';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;
  validatorForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })

    this.validatorForm = new ValidatorForm(this.formulario);
  }

  onSubmit() {
    console.log(this.formulario)
  }

  initValidation(campo) {
    return this.validatorForm.aplicaCssErro(campo, this.formulario);
  }

}

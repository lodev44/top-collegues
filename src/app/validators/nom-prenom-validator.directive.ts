import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNomPrenomValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective,
    multi: true
  }]
})
export class NomPrenomValidatorDirective {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('Log appNomPrenomValidator - control', control);
    console.log("nom",control.value.nom);
    console.log("prenom",control.value.prenom);
    console.log(control.value.nom === control.value.prenom);
    return control.value.nom === control.value.prenom ? { nomPrenomIdentique: true }:null;
  }
}

import { Avis } from './../../modele';

import { Component, OnInit, Input } from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Collegue } from 'src/app/modele';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {


  @Input() collegue?: Collegue;

  prendreEnCompteAvis(avis:Avis){
    if(this.collegue){
      (avis === Avis.AIMER)?this.collegue.score+=100:this.collegue.score-=100;
    }
  }
  constructor() { }


  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { exempleCollegues } from 'src/app/data';
import { Collegue } from 'src/app/modele';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  //@Input() collegues?: Collegue[];
  // On a pas besoin de récupérer la liste depuis un autre composant
  // Le composant peut héberger la liste.
  colleguesToDisplay:Collegue[] = exempleCollegues;
  constructor() { }

  ngOnInit(): void {
  }

}

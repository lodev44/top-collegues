import { Component, OnInit } from '@angular/core';
import { exempleCollegues } from 'src/app/data';
import { Collegue } from 'src/app/modele';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {
  colleguesToDisplay:Collegue[] = exempleCollegues;
  constructor() { }

  ngOnInit(): void {
  }

}

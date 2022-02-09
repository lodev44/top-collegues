import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/modele';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.scss']
})
export class ListeColleguesComponentComponent implements OnInit {

  @Input() collegues?: Collegue[];
  constructor() { }

  ngOnInit(): void {
  }

}

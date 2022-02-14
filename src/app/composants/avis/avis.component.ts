import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Avis } from 'src/app/modele';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() donnerUnAvisEvt = new EventEmitter<number>();
  @Input() score: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  aimer() {
    this.donnerUnAvisEvt.emit(Avis.AIMER);
  }
  detester() {
    this.donnerUnAvisEvt.emit(Avis.DETESTER);
  }

  desactiverBoutonAimer() {

    return this.score != undefined && this.score >= 1000 ? true : false;
  }

  desactiverBoutonDetester() {
    return this.score != undefined && this.score <= -1000 ? true : false;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    console.log("score",this.score);
  }

  donnerUnavis(score: number) {
    this.donnerUnAvisEvt.emit(score);
  }

  desactiverBoutonAimer(){

    return this.score!=undefined && this.score>=1000 ? true : false;
  }

  desactiverBoutonDetester(){
    return this.score!=undefined && this.score<=-1000 ? true : false;
  }
}

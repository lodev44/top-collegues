import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  @Output() donnerUnAvisEvt = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  donnerUnavis(score:number) {
    this.donnerUnAvisEvt.emit(score);
  }

}

import { Component, OnInit } from '@angular/core';
import { exempleCollegues } from 'src/app/data';
import { Collegue } from 'src/app/modele';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accueil-component',
  templateUrl: './accueil-component.component.html',
  styleUrls: ['./accueil-component.component.scss']
})
export class AccueilComponentComponent implements OnInit {
  colleguesToDisplay: Collegue[] = [];
  constructor(private serviceData: DataService) {
    const obsCollegues = serviceData.listerCollegues();
    obsCollegues.subscribe(listeAPI => {
      this.colleguesToDisplay = listeAPI;
    })
  }

  rafraichir() {
    this.serviceData.listerCollegues().subscribe(datas => {
      this.colleguesToDisplay = datas;
    })
  }
  ngOnInit(): void {
  }

}

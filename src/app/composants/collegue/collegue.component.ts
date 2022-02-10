import { DataService } from './../../services/data.service';
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

  constructor(private serviceData: DataService) { }
  prendreEnCompteAvis(avis: Avis) {
    if (this.collegue) {
      this.serviceData.donnerUnAvis(this.collegue, avis)
        .subscribe(data => {
          this.collegue = data;
        });
    }
  }

  ngOnInit(): void {
  }
}

import { Collegue } from './../../modele';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  constructor(private serviceData: DataService,private router: Router) {

  }

  collegue: Partial<Collegue> = {};
  ngOnInit(): void {
  }

  valider() {
    console.log("Log - valider formulaire création collegue");
    this.serviceData.ajouterCollegue(this.collegue)
    .subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/accueil');
    }
    );

  }

}

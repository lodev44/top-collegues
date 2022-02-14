import { Collegue } from './../../modele';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {

  collegue?: Collegue;

  constructor(private serviceData: DataService, private aRoute: ActivatedRoute) {

   this.aRoute.paramMap.subscribe(paramMap=> {

     const pseudo = paramMap.get('pseudo');
     if(pseudo) {
       this.serviceData.findByPseudo(pseudo).subscribe(data => this.collegue=data);
     }
    });
  }

  ngOnInit(): void {

  }

}

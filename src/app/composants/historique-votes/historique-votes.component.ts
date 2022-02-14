import { Component, OnInit } from '@angular/core';
import { Vote } from 'src/app/modele';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {

  listeVotes: Vote[] = [];
  constructor(private serviceData: DataService) {
    this.serviceData.listerVotes().subscribe(datas => {
      this.listeVotes = datas;
    });
  }

  ngOnInit(): void {
  }

  suprimerVote(index: number) {
    console.log("Log - supprimer vote");
    this.listeVotes.splice(index, 1);
  }
}

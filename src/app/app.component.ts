import { Component } from '@angular/core';
import { exempleCollegue, exempleCollegues } from './data';
import { Collegue } from './modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';
  colleguesToDisplay:Collegue[] = exempleCollegues;
}

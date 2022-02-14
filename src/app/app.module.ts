import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { CollegueComponent } from './composants/collegue/collegue.component';
import { ListeColleguesComponentComponent } from './composants/liste-collegues-component/liste-collegues-component.component';
import { AccueilComponentComponent } from './composants/accueil-component/accueil-component.component';
import { ScorePipe } from './pipes/score.pipe';
import { HttpClientModule} from '@angular/common/http';
import { HistoriqueVotesComponent } from './composants/historique-votes/historique-votes.component';
import { ScoreDetailPipe } from './pipes/score-detail.pipe';
import { FormsModule } from '@angular/forms';
import { NouveauCollegueTemplateFormComponent } from './composants/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponentComponent,
    AccueilComponentComponent,
    ScorePipe,
    HistoriqueVotesComponent,
    ScoreDetailPipe,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

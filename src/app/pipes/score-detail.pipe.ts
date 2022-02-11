import { Avis } from 'src/app/modele';

import { Pipe, PipeTransform } from '@angular/core';
import { Vote } from '../modele';

@Pipe({
  name: 'scoreDetail'
})
export class ScoreDetailPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: Vote): string {
    let natureVote = "";
    const smiley = Avis.AIMER ? ":-)" : ":-(";

    console.log("value.avis",value.avis);
    console.log(Avis.AIMER);
    //(avis === Avis.AIMER)?this.collegue.score+=100:this.collegue.score-=100;
    console.log("value.avis === Avis.AIMER", value.avis === Avis.AIMER);

    (value.avis === Avis.AIMER) ? natureVote = "aimé(e)" : natureVote = "detesté(e)";
    return value.collegue.prenom + " est " + natureVote + ", il/elle a désormais un score de " + value.collegue.score + " " + smiley;
  }
}

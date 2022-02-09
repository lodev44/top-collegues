import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: number): string {

    if (value >= 0) {
      return `+ ${value}`;
    } else {
      return `- ${Math.abs(value)}`;
    }
  }
}

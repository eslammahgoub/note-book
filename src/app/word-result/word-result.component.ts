import { Component, Input } from '@angular/core';

@Component({
  selector: 'notebook-word-result',
  templateUrl: './word-result.component.html',
})
export class WordResultComponent {
  @Input() requestedWord: string;
  @Input() counts: number;
  @Input() similarWordsAsString: string;
}

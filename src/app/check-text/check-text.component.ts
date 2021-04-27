import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'notebook-check-text',
  templateUrl: './check-text.component.html'
})
export class CheckTextComponent {
  // currentEntry note as input
  @Input() public set currentEntry(entryNote: string) {
    if (entryNote) {
      this.textAreaCtrl.setValue(entryNote);
    }
  }

  // emit the change click btn handler as output
  @Output() checkTxtEmit: EventEmitter<string> = new EventEmitter<string>();

  // textArea Input control
  public textAreaCtrl: FormControl = new FormControl();

}

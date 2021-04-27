import { StorageService } from '@core/services';
import { Component } from '@angular/core';
import { EntryItem, Utils } from '@shared/models';

@Component({
  selector: 'notebook-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // current entry item
  public currentEntry: EntryItem;

  // requested most frequency word
  public requestedWord: string;

  // max counts of requested word
  public counts: number;

  // similarity list of word as string
  public similarWordsAsString: string;

  constructor(private storageSrv: StorageService) {
    // get the current List from the storage
    this.storageSrv.getCurrentEntriesFromLocalStorage();
    this.currentEntry = this.storageSrv.getCurrentEntryFromLocalStorage();

    if (this.currentEntry && this.currentEntry.note) {
      this.processWords();
    }
  }

  /**
   * saveNode
   * @description saveNote function to store the current entry note and create the entry
   * void
   */
  public saveNote(note: string): void {
    const today = new Date();
    const date = Utils.getFormattedDate(today);

    const localEntry: EntryItem = this.storageSrv.currentEntriesList.filter(element => element.date === date)[0];
    if (localEntry) {
      localEntry.note = note;
      // if exist update the current depend on the date
      this.storageSrv.updateLocalStorage(localEntry);
    } else {

      // if not exist create new one
      this.currentEntry = new EntryItem(note, today);
      this.storageSrv.storeOnLocalStorage(this.currentEntry);
    }

    if (note.trim()) {
      // process the current note
      this.processWords();
    } else {
      // reset all the current values
      this.resetCurrentValues();
    }
  }

  /**
   * reset all values
   */
  resetCurrentValues(): void {
    this.counts = 0;
    this.requestedWord = null;
    this.similarWordsAsString = null;
  }

  /**
   * processWords
   * @description processWords Fn to get the max count and get the frequency word from the current entry note
   * void
   */
  public processWords(): void {
    if (this.currentEntry.note) {
      // split the note string
      const words = this.currentEntry.note.replace(/[.]/g, '').split(/\s/);

      // loop to get the obj with values count for each word unique
      const freqMap = {};
      words.forEach((w) => {
        if (!freqMap[w]) {
          freqMap[w] = 0;
        }
        freqMap[w] += 1;
      });

      // sorted List descending order
      const listOfKeys = Utils.getSortedObjectEntries(freqMap);

      // first word is the max count words from the order
      this.requestedWord = listOfKeys[0] as string;

      // first value is the max count
      this.counts = Utils.getSortedObjValues(freqMap)[0] as number;

      // shift the first word that the requested one
      listOfKeys.shift();

      // join after shift to get the similar list
      this.similarWordsAsString = listOfKeys.join(' ');
    }
  }
}

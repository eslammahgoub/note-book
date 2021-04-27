import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService as ngxWebStorageService } from 'ngx-webstorage-service';
import { Entry, Utils } from '@shared/models';

// key that is used to access the data in local storage
const STORAGE_KEY = 'local_check_text';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // current entries List
  currentEntriesList: Entry[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: ngxWebStorageService) { }

  /**
   * storeOnLocalStorage
   * @description store entry onto local storage and push to currentEntriesList
   * @param entry Entry
   * void
   */
  public storeOnLocalStorage(entry: Entry): void {

    // get array of Entries from local storage
    this.currentEntriesList = this.storage.get(STORAGE_KEY) || [];

    // push new entry to array
    this.currentEntriesList.push(entry);

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, this.currentEntriesList);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }

  /**
   * getCurrentEntriesFromLocalStorage
   * @description get current all Entries from the storage
   * @returns Entry[]
   */
  public getCurrentEntriesFromLocalStorage(): Entry[] {
    // get array of Entries from local storage
    this.currentEntriesList = this.storage.get(STORAGE_KEY) || [];
    return this.currentEntriesList;

  }

  /**
   * getCurrentEntryFromLocalStorage
   * @description get current entry from storage
   * @param date string formatted date
   * @returns Entry or undefined if not exist
   */
  public getCurrentEntryFromLocalStorage(date?: string): Entry | undefined {
    date = date ? date : Utils.getFormattedDate(new Date());
    return this.currentEntriesList.filter(element => element.date === date)[0];
  }

  /**
   * updateLocalStorage
   * @description update the current LocalStorage base on entry
   * @param entry Entry
   * void
   */
  public updateLocalStorage(entry: Entry): void {
    this.getCurrentEntriesFromLocalStorage();
    // current entry if exist
    const currentEntry = this.getCurrentEntryFromLocalStorage(entry.date);

    if (currentEntry) {
      // if exist get index
     const index = this.currentEntriesList.indexOf(currentEntry);
     if (index !== -1) {
      // if index is valid update
       this.currentEntriesList[index] = entry;
       this.storage.set(STORAGE_KEY, this.currentEntriesList);
     }
    }
  }


  /**
   * deleteLocalStorage
   * @description to clear all items in the local stroage
   * void
   */
  public deleteLocalStorage(): void {
    this.storage.clear();
  }
}

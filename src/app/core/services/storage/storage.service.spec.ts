import { TestBed } from '@angular/core/testing';
import { EntryItem } from '@shared/models';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should currentEntriesList to be empty list on created', () => {
    expect(service.currentEntriesList.length).toBe(0);
  });

  it('should storeOnLocalStorage fn push entry to  currentEntriesList', () => {
    service.currentEntriesList = [];
    const entry = new EntryItem('note', new Date());
    service.storeOnLocalStorage(entry);
    expect(service.currentEntriesList[0].date).toBe(entry.date);
    expect(service.currentEntriesList.length > 0).toBeTrue();
  });

  it('should getCurrentEntriesFromLocalStorage fn set currentEntriesList', () => {
    service.currentEntriesList = [];
    const entry = new EntryItem('note', new Date());
    service.storeOnLocalStorage(entry);
    const currentEntriesList2 = service.getCurrentEntriesFromLocalStorage();

    expect(service.currentEntriesList[0].date).toBe(currentEntriesList2[0].date);
    expect(service.currentEntriesList.length).toBe(currentEntriesList2.length);
  });

  it('should getCurrentEntryFromLocalStorage fn return currentEntry from local Storage', () => {
    service.currentEntriesList = [];
    const entry = new EntryItem('note', new Date());
    service.storeOnLocalStorage(entry);
    const currentEntry = service.getCurrentEntryFromLocalStorage();

    expect(currentEntry.date).toBe(entry.date);
    expect(currentEntry.note).toBe(entry.note);
  });

  it('should updateLocalStorage fn update currentEntry on local Storage', () => {
    service.currentEntriesList = [];
    const entry = new EntryItem('note', new Date());
    service.storeOnLocalStorage(entry);
    const entry2 = Object.assign({}, entry);
    entry2.note = 'Note';

    service.updateLocalStorage(entry2);

    expect(entry2.date).toBe(entry.date);
    expect(entry2.note).not.toBe(entry.note);
  });

  it('should updateLocalStorage fn if no current Entry do nothing', () => {
    service.currentEntriesList = [];

    const entry = new EntryItem('note', new Date());

    service.updateLocalStorage(entry);

    expect(service.currentEntriesList.length).toBe(0);
  });

  it('should deleteLocalStorage fn clear all items from local Storage', () => {
    service.currentEntriesList = [];
    const entry = new EntryItem('note', new Date());
    service.storeOnLocalStorage(entry);

    service.deleteLocalStorage();

    expect(localStorage.length).toBe(0);
  });
});

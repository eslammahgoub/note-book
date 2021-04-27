import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryItem } from '@shared/models';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const entry = new EntryItem('note note NOTE', new Date());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        LayoutModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should render top div', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#top')).toBeTruthy();
  });

  it('should render bottom div', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#bottom')).toBeTruthy();
  });

  it('should render notebook-header inside wrapper', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.wrapper notebook-header')).toBeTruthy();
  });

  it('should render notebook-viewer inside wrapper', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.wrapper notebook-viewer')).toBeTruthy();
  });

  it('should render notebook-check-text inside notebook-viewer', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('notebook-viewer notebook-check-text')).toBeTruthy();
  });

  it('should render notebook-word-result inside notebook-viewer', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('notebook-viewer notebook-word-result')).toBeTruthy();
  });

  it('should saveNote Fun set currentEntry note ', () => {
    app.saveNote(entry.note);
    expect(app.currentEntry.note).toEqual(entry.note);
  });


  it('should saveNote Fun if no note it will reset values ', () => {
    app.saveNote('');
    expect(app.requestedWord).toEqual(null);
    expect(app.counts).toBe(0);
    expect(app.similarWordsAsString).toBe(null);
  });


  it('should saveNote Fun if there are a currentEntry note will update the current entry', () => {
    const value = 'Note Note 2';
    app.saveNote(entry.note);
    app.saveNote(value);
    expect(app.currentEntry.date).toEqual(entry.date);
    expect(app.currentEntry.note).not.toEqual(entry.note);
  });

  it('should processWords Fun if there is no a currentEntry note do nothing', () => {
    app.requestedWord = null;
    app.currentEntry = new EntryItem(null, new Date());
    app.processWords();
    expect(app.requestedWord).toBe(null);
  });

  it('should processWords Fun if there is a currentEntry note set requestedWord', () => {
    app.requestedWord = null;
    app.saveNote(entry.note);
    app.processWords();
    expect(app.requestedWord).toBe('note');
  });

  it('should processWords Fun if there is a currentEntry note set requestedWord', () => {
    app.counts = 0;
    app.saveNote(entry.note);
    app.processWords();
    expect(app.counts).toBe(2);
  });

  it('should processWords Fun if there is a currentEntry note set similarWordsAsString', () => {
    app.similarWordsAsString = null;
    app.saveNote(entry.note);
    app.processWords();
    expect(app.similarWordsAsString).toBe('NOTE');
  });

  it('should resetCurrentValues Fun reset all values', () => {
    app.similarWordsAsString = 'wWord';
    app.counts = 3;
    app.requestedWord = 'word';
    app.resetCurrentValues();
    expect(app.similarWordsAsString).toBe(null);
    expect(app.counts).toBe(0);
    expect(app.requestedWord).toBe(null);
  });
});

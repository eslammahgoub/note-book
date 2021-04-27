import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckTextComponent } from './check-text.component';

describe('CheckTextComponent', () => {
  let component: CheckTextComponent;
  let fixture: ComponentFixture<CheckTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ CheckTextComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTextComponent);
    component = fixture.componentInstance;
    component.currentEntry = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a textAreaCtrl', () => {
    expect(component.textAreaCtrl).toBeTruthy();
    expect(component.textAreaCtrl.value).toBe(null);
  });

  it('should currentEntry set the textAreaCtrl value', () => {
    component.currentEntry = 'Note';
    fixture.detectChanges();
    expect(component.textAreaCtrl.value).toBe('Note');
  });

  it('should have checkTxtEmit', () => {
    expect(component.checkTxtEmit).toBeTruthy();
  });

  it('should render textArea field', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#textAreaField')).toBeTruthy();
  });

  it('should render check your text button', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toBe('check your text');
  });
});

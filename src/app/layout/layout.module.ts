import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { NoteViewerComponent } from './note-viewer/note-viewer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NoteViewerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
    NoteViewerComponent,
  ]
})
export class LayoutModule { }

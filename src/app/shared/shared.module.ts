import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './customs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FlexLayoutModule,
  ],
  exports: [
    LogoComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule { }

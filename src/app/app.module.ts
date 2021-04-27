import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// CUSTOM MODULES
import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/shared.module';

// APP COMPONENTS
import { AppComponent } from './app.component';
import { CheckTextComponent } from './check-text/check-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@angular/flex-layout';
import { WordResultComponent } from './word-result/word-result.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CheckTextComponent,
    WordResultComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
    LayoutModule,
    CoreModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

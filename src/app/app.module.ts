import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolleeService } from './core/services/enrollee.service';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './core/core/core.module';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [EnrolleeService],
  bootstrap: [AppComponent],
})
export class AppModule {}

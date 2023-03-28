import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploylistComponent } from './employlist/employlist.component';
import{EmployModule} from './employ/employ.module';

@NgModule({
  declarations: [
    AppComponent,
    EmploylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

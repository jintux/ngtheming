import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import { ThemeSwitcherService } from './theme-switcher.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ThemeSwitcherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
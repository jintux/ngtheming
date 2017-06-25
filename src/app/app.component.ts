import { Component } from '@angular/core';

import { ThemeSwitcherService } from './theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'Select a theme:';
  theme: string;
  
  constructor(private themeSwitcher: ThemeSwitcherService) {
    this.theme = "default";
  }


  setTheme() {
    this.themeSwitcher.switch(this.theme);
  }
}

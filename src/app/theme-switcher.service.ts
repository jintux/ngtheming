import { Injectable } from '@angular/core';

@Injectable()
export class ThemeSwitcherService {
  
  private htmlRoot: HTMLElement;
  private theme: string;

  constructor() { 
    this.htmlRoot = document.documentElement;
  }

  switch(theme: string) {
    console.log("Switching theme to: ", theme);
    this.htmlRoot.classList.remove(this.theme);
    this.htmlRoot.classList.add(theme);
    this.theme = theme;
  }
}
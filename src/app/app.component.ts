import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  siteLanguage: string = 'English';

  siteLocale: string;

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'tlh', label: 'tlhIngan' },
  ];

  constructor() {}

  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage =
      this.languageList.find((f) => f.code === this.siteLocale).label ?? 'English';
  }
}

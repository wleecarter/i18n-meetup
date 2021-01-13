import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
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
      this.languageList.find((f) => f.code === this.siteLocale)?.label ?? 'English';
  }
}

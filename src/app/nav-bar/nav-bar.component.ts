import { Component, OnInit } from '@angular/core';

import { TranslocoService } from '@ngneat/transloco';

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

  constructor(private service: TranslocoService) {}

  ngOnInit() {}

  changeSiteLanguage(language: string): void {
    console.log('language', language);
    this.service.setActiveLang(language);
    this.siteLanguage =
      this.languageList.find((f) => f.code === language)?.label ?? 'English';
  }
}

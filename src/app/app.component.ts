import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public count = 0;
  public clickMessage;

  constructor(
    private translocoService: TranslocoService,
    private snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.getClickMessage();
  }

  public increment(): void {
    this.count++;
    this.getClickMessage();
  }

  private getClickMessage(): void {
    let translationKey = 'zero-clicks-message';
    if (this.count === 1) {
      translationKey = 'one-click-message';
    } else if (this.count > 1) {
      translationKey = 'many-clicks-message';
    }
    this.translocoService
      .selectTranslate(translationKey, { count: this.count })
      .subscribe((value) => (this.clickMessage = value));
  }

  public error(): void {
    const message = this.translocoService.translate('error');
    this.snackBar.open(message, '', { duration: 3000 });
  }
}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 0;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  increment(): void {
    this.count++;
  }

  error(): void {
    const message = $localize`Something has gone horribly wrong!`;
    this.snackBar.open(message, '', { duration: 3000 });
  }
}

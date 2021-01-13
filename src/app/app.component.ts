import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  increment(): void {
    this.count++;
  }

  error(): void {
    console.error('something has gone horribly wrong!');
  }
}

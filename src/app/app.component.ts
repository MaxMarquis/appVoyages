import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forfaits: Forfait[] = FORFAITS;
}

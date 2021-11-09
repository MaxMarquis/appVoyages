import { Component, OnInit } from '@angular/core';
import { Forfaits } from 'src/app/forfaits';
import { FORFAITS } from 'src/app/mock-forfaits';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
  forfaits: Forfaits[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}

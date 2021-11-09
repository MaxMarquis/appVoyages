import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';
import { FORFAITS } from 'src/app/mock-forfaits';

@Component({
  selector: 'app-mini-forfait',
  templateUrl: './mini-forfait.component.html',
  styleUrls: ['./mini-forfait.component.css']
})
export class MiniForfaitComponent implements OnInit {
  @Input() forfait: Forfait = {
    destination: '',
    villeDepart: '',
    hotel: {
      nom: '',
      coordonnees: '',
      nombreEtoiles: 0,
      nombreChambres: 0,
      caracteristiques: ['', '', '']
    },
    dateDepart: '',
    dateRetour: '',
    prix: 0,
    rabais: 0,
    vedette: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

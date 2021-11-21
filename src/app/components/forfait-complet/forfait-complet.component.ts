import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from 'src/app/forfait';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
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

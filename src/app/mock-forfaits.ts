import { Forfaits } from "./forfaits";

export const FORFAITS: Forfaits[] = [
  {
    destination: 'Mexique',
    villeDepart: 'Québec',
    hotel: {
      nom: 'nom...',
      coordonnees: '...',
      nombreEtoiles: 6,
      nombreChambres: 100,
      caracteristiques: ['Face à la plage', 'Ascenseur', 'Miniclub']
    },
    dateDepart: '2021-01-01',
    dateRetour: '2020-01-08',
    prix: 500,
    rabais: 100,
    vedette: true
  }

]
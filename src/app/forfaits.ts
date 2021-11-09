export interface Forfaits {
  destination: string,
  villeDepart: string,
  hotel: Hotels,
  dateDepart: string,
  dateRetour: string,
  prix: number,
  rabais: number,
  vedette: boolean
}

export interface Hotels {
  nom: string,
  coordonnees: string,
  nombreEtoiles: number,
  nombreChambres: number,
  caracteristiques: [string, string, string],
}
export interface Collegue {
  pseudo: string;
  score: number;
  photo: string;
  nom : string;
  prenom : string;
};

export interface Vote {
  collegue: Collegue;
  avis: Avis;
  score: number;
}

export enum Avis {
  "AIMER","DETESTER"
};

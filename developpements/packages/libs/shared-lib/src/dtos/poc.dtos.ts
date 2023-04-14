export interface SearchCustomerByChronoClientDto {
  chronoClient: string
  codeFichierPartenaire: string,
}

export interface SearchCustomerDto {
  chronoClient?: string,
  codeFichierPartenaire: string,
  codePostal?: string,
  dateDerniereCommandeFrom?: Date,
  dateDerniereCommandeTo?: Date
  nom?: string,
  prenom?: string,
  ville?: string,
}

export interface CustomerSearchResultDto {
  chronoClient: string,
  codeFichierPartenaire: string,
  codePostal: string,
  dateDerniereCommande: Date
  nom: string,
  prenom: string,
  ville: string,
}

export interface CodeLabelResultDto {
  code: string,
  label: string
}

export interface OffreReferenceResultDto {
  codeCampagne: number,
  codeOffre: string,
  codeProduit: string,
  dateDerniereModification: Date
  libelleOffre: string,
}

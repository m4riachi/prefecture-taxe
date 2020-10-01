import { Rue } from "../rues/rue.model";
import { Redevable } from "../redevables/redevable.model";
import { Categorie } from "../categories/categorie.model";

export class Locale {
  public id: number = 0;
  public nom: string;
  public ice: string;
  public dernierTrimestreTaxeBoisson: number = 0;
  public dernierAnneeTaxeBoisson: number = 0;
  public dateCreation: Date;
  public dateFermeture: Date;
  public rue: Rue = new Rue();
  public categorie: Categorie = new Categorie();
  public redevable: Redevable = new Redevable();
}

import {Quartier} from "../quartiers/quartier.model";

export class Rue {
  public id:number = 0;
  public nom:string;
  public quartier:Quartier = new Quartier();
}

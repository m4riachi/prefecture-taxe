import { RedevableTypeEnum } from './redevable-type-enum.model';

export class Redevable {
  public id: number = 0;
  public nom: string;
  public cin: string;
  public type: RedevableTypeEnum = RedevableTypeEnum.MORALE;
}

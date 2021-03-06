import { CarType } from '../../../models';

export class CreateCarDto {
  model: string;
  registrationNumber: string;
  fuelConsumptionRate: number;
  winterFuelConsumptionRate: number;
  adBlueConsumptionRate: number;
  weBastoConsumptionRate: number;
  type: CarType;
  inArchive: boolean;
}

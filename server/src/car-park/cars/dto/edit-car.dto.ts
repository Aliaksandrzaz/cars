import { CarType } from '../../../models';

export class EditCarDto {
  id: number;
  model: string;
  registrationNumber: string;
  fuelConsumptionRate: number;
  winterFuelConsumptionRate: number;
  adBlueConsumptionRate: number;
  weBastoConsumptionRate: number;
  type: CarType;
}

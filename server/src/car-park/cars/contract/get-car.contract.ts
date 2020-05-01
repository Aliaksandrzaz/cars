import { CarType } from '../../../models';

export interface GetCarContract {
  id: number;
  model: string;
  registrationNumber: string;
  fuelConsumptionRate: number;
  winterFuelConsumptionRate: number;
  adBlueConsumptionRate: number;
  weBastoConsumptionRate: number;
  carType: CarType;
}

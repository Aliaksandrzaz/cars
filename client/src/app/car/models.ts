import { Pagination } from '../models';

export type CarType = 'tractor' | 'dumpTruck' | string;
export type TrailerType = 'wagon' | 'dumpTruck' | string;

export interface Car {
  id: number;
  model: string;
  registrationNumber: string;
  fuelConsumptionRate: number;
  winterFuelConsumptionRate: number;
  adBlueConsumptionRate: number;
  weBastoConsumptionRate: number;
  type: CarType;
  inArchive: boolean;
}

export interface CreateCarRequest {
  model: string;
  registrationNumber: string;
  fuelConsumptionRate: number;
  winterFuelConsumptionRate: number;
  adBlueConsumptionRate: number;
  weBastoConsumptionRate: number;
  type: CarType;
}

export interface EditCarRequest {
  model: string;
  registrationNumber: string;
  fuelConsumptionRate: number;
  winterFuelConsumptionRate: number;
  adBlueConsumptionRate: number;
  weBastoConsumptionRate: number;
  type: CarType;
}

export interface FetchCarsRequest {
  page?: number;
  size?: number;
  types?: string[];
}

import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CarsEntity } from './entities/cars.entity';
import { TrailersEntity } from './entities/trailers.entity';
import { DriversEntity } from './entities/drivers.entity';

@Injectable()
export class CarParkService {
  constructor() {}

  async getCarPark() {
    const carPark = await this.getCarParkFromDb();
    return {
      cars: carPark[0],
      trailer: carPark[1],
      users: carPark[2],
    };
  }

  getCarParkFromDb() {
    const entityManager = getManager();
    const cars = entityManager.find(CarsEntity);
    const trailers = entityManager.find(TrailersEntity);
    const users = entityManager.find(DriversEntity);
    return Promise.all([cars, trailers, users]);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CarsEntity } from '../entities/cars.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { EditCarDto } from './dto/edit-car.dto';
import { Paging } from '../../../../client/src/app/models';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarsEntity)
    private carRepository: Repository<CarsEntity>,
  ) {}

  async createCar(createCar: CreateCarDto) {
    const car = new CarsEntity();

    // car.model = createCar.model
    // car.type = createCar.type
    // car.registrationNumber = createCar.registrationNumber
    // car.adBlueConsumptionRate = createCar.adBlueConsumptionRate
    // car.weBastoConsumptionRate = createCar.weBastoConsumptionRate
    // car.winterFuelConsumptionRate = createCar.winterFuelConsumptionRate
    // car.fuelConsumptionRate = createCar.fuelConsumptionRate

    car.model = 'testcar';
    car.type = 'dumpTruck';
    car.registrationNumber = '13';
    car.adBlueConsumptionRate = 10;
    car.weBastoConsumptionRate = 10;
    car.winterFuelConsumptionRate = 10;
    car.fuelConsumptionRate = 10;

    await this.carRepository.save(car);

    return {
      status: 'ok',
    };
  }

  async editCar(id: number, editCar: EditCarDto) {
    const car = await this.carRepository.findOne(id);

    car.model = editCar.model;
    car.type = editCar.type;
    car.registrationNumber = editCar.registrationNumber;
    car.adBlueConsumptionRate = editCar.adBlueConsumptionRate;
    car.weBastoConsumptionRate = editCar.weBastoConsumptionRate;
    car.winterFuelConsumptionRate = editCar.winterFuelConsumptionRate;
    car.fuelConsumptionRate = editCar.fuelConsumptionRate;

    return await this.carRepository.save(car);
  }

  async deleteCar(id: number) {
    return await this.carRepository.delete(id);
  }

  async getCar(id: number) {
    return await this.carRepository.findOne(id);
  }

  async getAllCars(page: number, size: number): Promise<Paging<CarsEntity>> {
    const skippedItems = (page - 1) * size;
    const count = await this.carRepository.count();
    const data = await this.carRepository.find({
      order: {
        id: 'DESC',
      },
      skip: skippedItems,
      take: size,
      relations: ['roadList'],
    });

    return {
      page,
      size,
      data,
      pages: Math.ceil(count / size),
    };
  }
}

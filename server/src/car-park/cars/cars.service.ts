import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CarsEntity } from '../entities/cars.entity';
import { CreateCarDto } from './dto/create-car.dto';
import { EditCarDto } from './dto/edit-car.dto';
import { Choice, Paging } from '../../models';
// import { CarsTypeEntity } from '../entities/cars-type.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarsEntity)
    private carRepository: Repository<CarsEntity>, // private carsTypeRepository: Repository<CarsTypeEntity>,
  ) {}

  async createCar(createCar: CreateCarDto) {
    const car = new CarsEntity();

    car.model = createCar.model;
    car.type = createCar.type;
    car.registrationNumber = createCar.registrationNumber;
    car.adBlueConsumptionRate = createCar.adBlueConsumptionRate;
    car.weBastoConsumptionRate = createCar.weBastoConsumptionRate;
    car.winterFuelConsumptionRate = createCar.winterFuelConsumptionRate;
    car.fuelConsumptionRate = createCar.fuelConsumptionRate;
    car.inArchive = false;

    // car.model = 'testcar';
    // car.type = 'dumpTruck';
    // car.registrationNumber = '13';
    // car.adBlueConsumptionRate = 10;
    // car.weBastoConsumptionRate = 10;
    // car.winterFuelConsumptionRate = 10;
    // car.fuelConsumptionRate = 10;
    // car.inArchive = false;

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

  async addToArchive(id: number) {
    const car = await this.carRepository.findOne(id);

    car.inArchive = true;

    return await this.carRepository.save(car);
  }

  async getCar(id: number) {
    return await this.carRepository.findOne(id);
  }

  async getAllCars(
    page: number = 1,
    size: number = 10,
  ): Promise<Paging<CarsEntity>> {
    const skippedItems = (page - 1) * size;
    const total = await this.carRepository.count();
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
      total,
    };
  }

  async getCarsType() {
    // return await this.carsTypeRepository.find();
  }
}

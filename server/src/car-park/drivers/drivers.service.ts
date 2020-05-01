import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DriversEntity } from '../entities/drivers.entity';
import { CreateDriversDto } from './dto/create-drivers.dto';
import { EditDriversDto } from './dto/edit-drivers.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriversEntity)
    private driversRepository: Repository<DriversEntity>,
  ) {}

  async createDriver(createDriver: CreateDriversDto) {
    const driver = new DriversEntity();

    driver.name = 'createDriver.name';

    return await this.driversRepository.save(driver);
  }

  async editDriver(id: number, editDriver: EditDriversDto) {
    const driver = await this.driversRepository.findOne(id);

    driver.name = editDriver.name;

    return await this.driversRepository.save(driver);
  }

  async getDriver(id: number) {
    return await this.driversRepository.findOne(id);
  }

  async getAllDrivers() {
    return await this.driversRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }
}

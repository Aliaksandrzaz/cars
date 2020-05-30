import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FuelEntity } from '../entities/fuel.entity';
import { CreateFuelDto } from './dto/create-fuel.dto';
import { EditFuelDto } from './dto/edit-fuel.dto';

@Injectable()
export class FuelService {
  constructor(
    @InjectRepository(FuelEntity)
    private fuelRepository: Repository<FuelEntity>,
  ) {}

  async getAll() {
    return await this.fuelRepository.find();
  }

  async createFuel(id: number, body: CreateFuelDto) {
    // const fuel = new FuelEntity();
    //
    // fuel.amount = body.amount;
    // fuel.date = body.date;
    // fuel.type = body.type;
    // fuel.road_list_id = body.roadListId;
    // fuel.gas_station = body.gasStation;

    // fuel.amount = 10;
    // fuel.date = 13;
    // fuel.type = 'dt';
    // fuel.road_list_id = 1;
    // fuel.gas_station =" body.gasStation";

    const fuel = this.fuelRepository.create({
      amount: body.amount,
      date: body.date,
      type: body.type,
      roadListId: id,
      gasStation: body.gasStation,
    });

    return await this.fuelRepository.save(fuel);
  }

  async editFuel(body: EditFuelDto) {
    return await this.fuelRepository.update(body.id, {
      amount: body.amount,
      date: body.date,
      type: body.type,
      gasStation: body.gasStation,
    });
  }

  async delete(id: number) {
    return await this.fuelRepository.delete(id);
  }
}

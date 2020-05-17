import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRoadListDto } from './dto/create-road-list.dto';
import { RoadListEntity } from '../entities/road-list.entity';
import { EditRoadListDto } from './dto/edit-road-list.dto';

@Injectable()
export class RoadListService {
  constructor(
    @InjectRepository(RoadListEntity)
    private roadListRepository: Repository<RoadListEntity>,
  ) {}

  async createRoadList(createRoadListDto: CreateRoadListDto) {
    const roadList = new RoadListEntity();

    // roadList.temperature = createRoadListDto.temperature;
    // roadList.day_start = createRoadListDto.dayStart;
    // roadList.fuel_start = createRoadListDto.fuelStart;
    // roadList.odometer_start = createRoadListDto.odometerStart;
    // roadList.road_list_id = createRoadListDto.roadListId;
    // roadList.car_id = createRoadListDto.carId;
    // roadList.driver_id = createRoadListDto.driverId;
    // roadList.trailer_id = createRoadListDto.trailerId;

    roadList.temperature = 12;
    roadList.dayStart = 123;
    roadList.fuelStart = 12;
    roadList.odometerStart = 123;
    roadList.roadListId = '1';
    roadList.carId = 1;
    roadList.driverId = 2;
    // roadList.trailer_id = 1;
    roadList.adBlueStart = 10;

    return await this.roadListRepository.save(roadList);
  }

  async editRoadList(id: number, editRoadListDto: EditRoadListDto) {
    const roadList = await this.roadListRepository.findOne(id);

    roadList.roadListId = editRoadListDto.roadListId;
    roadList.temperature = editRoadListDto.temperature;
    roadList.dayStart = editRoadListDto.dayStart;
    roadList.dayEnd = editRoadListDto.dayEnd;
    roadList.fuelStart = editRoadListDto.fuelStart;
    roadList.fuelEnd = editRoadListDto.fuelEnd;
    roadList.odometerStart = editRoadListDto.odometerStart;
    roadList.odometerEnd = editRoadListDto.odometerEnd;
    roadList.adBlueStart = editRoadListDto.adBlueStart;
    roadList.adBlueEnd = editRoadListDto.adBlueEnd;
    // roadList.car_id = editRoadListDto.carId;
    // roadList.driver_id = editRoadListDto.driverId;
    // roadList.trailer_id = editRoadListDto.trailerId;

    return await this.roadListRepository.save(roadList);
  }

  async addDailyReport() {
    return;
  }

  async addFuel() {
    // const fuel = await this.roadListRepository.findOne(1)
    // fuel.fuel_id = 1
    return await this.roadListRepository.update(1, {
      carId: 2,
    });
  }

  async addAbBlue() {
    return;
  }

  async getRoadLists() {
    return await this.roadListRepository.find({
      relations: ['driver', 'car', 'trailer', 'fuel'],
    });
  }
}

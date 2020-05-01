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
    roadList.day_start = 123;
    roadList.fuel_start = 12;
    roadList.odometer_start = 123;
    roadList.road_list_id = '1';
    roadList.car_id = 1;
    roadList.driver_id = 2;
    // roadList.trailer_id = 1;
    roadList.ad_blue_start = 10;

    return await this.roadListRepository.save(roadList);
  }

  async editRoadList(id: number, editRoadListDto: EditRoadListDto) {
    const roadList = await this.roadListRepository.findOne(id);

    roadList.road_list_id = editRoadListDto.roadListId;
    roadList.temperature = editRoadListDto.temperature;
    roadList.day_start = editRoadListDto.dayStart;
    roadList.day_end = editRoadListDto.dayEnd;
    roadList.fuel_start = editRoadListDto.fuelStart;
    roadList.fuel_end = editRoadListDto.fuelEnd;
    roadList.odometer_start = editRoadListDto.odometerStart;
    roadList.odometer_end = editRoadListDto.odometerEnd;
    roadList.ad_blue_start = editRoadListDto.adBlueStart;
    roadList.ad_blue_end = editRoadListDto.adBlueEnd;
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
      car_id: 2,
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

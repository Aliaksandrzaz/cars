import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateRoadListDto } from "./dto/create-road-list.dto"
import { RoadListEntity } from "../entity/road-list.entity"
import { CarsEntity } from "../entity/cars.entity"
import { TrailersEntity } from "../entity/trailers.entity"
import { DriversEntity } from "../entity/drivers.entity"

@Injectable()
export class RoadListService {
  constructor(
    @InjectRepository(RoadListEntity)
    private roadListRepository: Repository<RoadListEntity>,
    @InjectRepository(CarsEntity)
    private carRepository: Repository<CarsEntity>,
    @InjectRepository(TrailersEntity)
    private trailerRepository: Repository<TrailersEntity>,
    @InjectRepository(DriversEntity)
    private driversRepository: Repository<DriversEntity>,
  ) {
  }

  async createList(createListDto: CreateRoadListDto) {
    const list = new RoadListEntity()

    const car = await this.carRepository.findOne(createListDto.carId)
    const driver = await this.driversRepository.findOne(createListDto.driverId)
    const trailer = await this.trailerRepository.findOne(createListDto.trailerId)

    // list.fuel_start = createListDto.fuelStart
    // list.fuel_end = createListDto.fuelEnd
    // list.odometer_start = createListDto.odometerStart
    // list.odometer_end = createListDto.odometerEnd
    // list.road_list_id = createListDto.roadListId
    // list.car = car
    // list.driver = driver
    // list.trailer = trailer

    list.fuel_start = 100
    list.fuel_end = 100
    list.odometer_start = 100
    list.odometer_end = 100
    list.road_list_id = "1"
    list.car = car
    list.driver = driver
    list.trailer = trailer
    list.simpleAr = ["12", "12", "12"]

    return await this.roadListRepository.save(list)
  }

  async getRoadList() {
    return await this.roadListRepository
      .createQueryBuilder("road_list")
      .leftJoinAndSelect("road_list.car", "car")
      .leftJoinAndSelect("road_list.driver", "driver")
      .leftJoinAndSelect("road_list.trailer", "trailer")
      .getMany()
  }
}

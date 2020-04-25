import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CarsEntity } from "../entity/cars.entity"
import { CreateCarDto } from "./dto/create-car.dto"
import { EditCarDto } from "./dto/edit-car.dto"

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarsEntity)
    private carRepository: Repository<CarsEntity>
  ) {
  }

  async createCar(createCar: CreateCarDto) {
    const car = new CarsEntity()

    // car.model = createCar.model
    // car.type = createCar.carType
    // car.registration_number = createCar.registrationNumber
    // car.ad_blue_consumption_rate = createCar.adBlueConsumptionRate
    // car.we_basto_consumption_rate = createCar.weBastoConsumptionRate
    // car.winter_fuel_consumption_rate = createCar.winterFuelConsumptionRate
    // car.fuel_consumption_rate = createCar.fuelConsumptionRate

    car.model = "testcar"
    car.type = "dumpTruck"
    car.registration_number = "13"
    car.ad_blue_consumption_rate = 10
    car.we_basto_consumption_rate = 10
    car.winter_fuel_consumption_rate = 10
    car.fuel_consumption_rate = 10

    return await this.carRepository.save(car)
  }

  async editCar(editCar: EditCarDto) {
    const car = await this.carRepository.findOne(editCar.id)

    car.model = editCar.model
    car.type = editCar.carType
    car.registration_number = editCar.registrationNumber
    car.ad_blue_consumption_rate = editCar.adBlueConsumptionRate
    car.we_basto_consumption_rate = editCar.weBastoConsumptionRate
    car.winter_fuel_consumption_rate = editCar.winterFuelConsumptionRate
    car.fuel_consumption_rate = editCar.fuelConsumptionRate

    return await this.carRepository.save(car)
  }

  async getCar(id: number) {
    return await this.carRepository.findOne(id)
  }

  async getAllCars() {
    return await this.carRepository.find({
      order: {
        id: "DESC"
      }
    })
  }
}

import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CarsEntity } from "../../entity/carsEntity"
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

    car.model = createCar.model
    car.carType = createCar.carType
    car.registrationNumber = createCar.registrationNumber
    car.adBlueConsumptionRate = createCar.adBlueConsumptionRate
    car.weBastoConsumptionRate = createCar.weBastoConsumptionRate
    car.winterFuelConsumptionRate = createCar.winterFuelConsumptionRate
    car.fuelConsumptionRate = createCar.fuelConsumptionRate

    return await this.carRepository.save(car)
  }

  async editCar(editCar: EditCarDto) {
    const car = await this.carRepository.findOne(editCar.id)

    car.model = editCar.model
    car.carType = editCar.carType
    car.registrationNumber = editCar.registrationNumber
    car.adBlueConsumptionRate = editCar.adBlueConsumptionRate
    car.weBastoConsumptionRate = editCar.weBastoConsumptionRate
    car.winterFuelConsumptionRate = editCar.winterFuelConsumptionRate
    car.fuelConsumptionRate = editCar.fuelConsumptionRate

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

import { Injectable } from "@nestjs/common"
import { getManager } from "typeorm"
import { CarsEntity } from "../entity/carsEntity"
import { TrailersEntity } from "../entity/trailersEntity"
import { UsersEntity } from "../entity/users.entity"

@Injectable()
export class CarParkService {
  constructor() {
  }

  async getCarPark() {
    const carPark = await this.getCarParkFromDb()
    return {
      cars: carPark[0],
      trailer: carPark[1],
      users: carPark[2]
    }
  }

  getCarParkFromDb() {
    const entityManager = getManager()
    const cars = entityManager.find(CarsEntity)
    const trailers = entityManager.find(TrailersEntity)
    const users = entityManager.find(UsersEntity)
    return Promise.all([cars, trailers, users])
  }
}

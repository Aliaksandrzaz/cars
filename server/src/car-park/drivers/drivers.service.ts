import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { DriversEntity } from "../entity/drivers.entity"
import { CarsEntity } from "../entity/cars.entity"
import { TrailersEntity } from "../entity/trailers.entity"
import { CreateDriversDto } from "./dto/create-drivers.dto"
import { EditDriversDto } from "./dto/edit-drivers.dto"

@Injectable()
export class DriversService {
  constructor(@InjectRepository(DriversEntity)
              private driversRepository: Repository<DriversEntity>,
              @InjectRepository(CarsEntity)
              private carRepository: Repository<CarsEntity>,
              @InjectRepository(TrailersEntity)
              private trailerRepository: Repository<TrailersEntity>) {
  }

  async createDriver(createUser: CreateDriversDto) {
    const user = new DriversEntity(createUser.name)

    user.name = createUser.name

    return await this.driversRepository.save(user)
  }

  async editDriver(editUser: EditDriversDto) {
    const user = await this.driversRepository.findOne(editUser.id)

    user.name = editUser.name

    return await this.driversRepository.save(user)
  }

  async getDriver(id: number) {
    // const x = await this.driversRepository
    //     //   .createQueryBuilder("user")
    //     //   .where("user.id = :id", {id: id})
    //     //   .getOne()

    const x = await this.driversRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.list", "list")
      .getMany()

    // const user = await this.driversRepository.findOne(id)
    // const car = await this.carRepository.findOne(user.carId)
    // const trailer = await this.trailerRepository.findOne(user.trailerId)

    return x
    // user: user.name,
    // car: car?.model,
    // carRegistrationNumber: car?.registrationNumber,
    // trailer: trailer?.model,
    // trailerRegistrationNumber: trailer?.registrationNumber,

  }

  async getAllDrivers() {
    return await this.driversRepository.find({
      order: {
        id: "DESC"
      }
    })
  }
}

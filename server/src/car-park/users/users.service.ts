import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { UsersEntity } from "../../entity/users.entity"
import { CarsEntity } from "../../entity/carsEntity"
import { TrailersEntity } from "../../entity/trailersEntity"
import { CreateUserDto } from "./dto/create-user.dto"
import { EditUserDto } from "./dto/edit-user.dto"

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UsersEntity)
              private userRepository: Repository<UsersEntity>,
              @InjectRepository(CarsEntity)
              private carRepository: Repository<CarsEntity>,
              @InjectRepository(TrailersEntity)
              private trailerRepository: Repository<TrailersEntity>) {
  }

  async createUser(createUser: CreateUserDto) {
    const user = new UsersEntity()

    user.carId = createUser.carId
    user.trailerId = createUser.trailerId
    user.name = createUser.name

    return await this.userRepository.save(user)
  }

  async editUser(editUser: EditUserDto) {
    const user = await this.userRepository.findOne(editUser.id)

    user.carId = editUser.carId
    user.trailerId = editUser.trailerId
    user.name = editUser.name

    return await this.userRepository.save(user)
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOne(id)
    const car = await this.carRepository.findOne(user.carId)
    const trailer = await this.trailerRepository.findOne(user.trailerId)

    return {
      user: user.name,
      car: car?.model,
      carRegistrationNumber: car?.registrationNumber,
      trailer: trailer?.model,
      trailerRegistrationNumber: trailer?.registrationNumber,
    }
  }

  async getAllUsers() {
    const users = await this.userRepository.find({
      order: {
        id: "DESC"
      }
    })

    return await Promise.all(await users.map(async(user) => await this.getUser(user.id)))
  }
}

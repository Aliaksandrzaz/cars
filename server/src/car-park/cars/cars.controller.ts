import { Body, Controller, Get, Param, Post } from "@nestjs/common"

import { CreateCarDto } from "./dto/create-car.dto"
import { CarsService } from "./cars.service"
import { EditCarDto } from "./dto/edit-car.dto"

@Controller("/car")
export class CarsController {
  constructor(private carsService: CarsService) {
  }

  @Post("/create")
  createCar(@Body() body: CreateCarDto) {
    return this.carsService.createCar(body)
  }

  @Post("/:id/edit")
  editCar(@Body() body: EditCarDto) {
    return this.carsService.editCar(body)
  }

  @Get("/:id")
  getCar(@Param() id: number) {
    return this.carsService.getCar(id)
  }

  @Get("/")
  getAllCars() {
    return this.carsService.getAllCars()
  }
}

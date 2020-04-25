import { Body, Controller, Get, Param, Post } from "@nestjs/common"

import { CreateDriversDto } from "./dto/create-drivers.dto"
import { DriversService } from "./drivers.service"
import { EditDriversDto } from "./dto/edit-drivers.dto"

@Controller("/drivers")
export class DriversController {
  constructor(private driversService: DriversService) {
  }

  @Post("/")
  createDriver(@Body() body: CreateDriversDto) {
    return this.driversService.createDriver(body)
  }

  @Post("/:id")
  editDriver(@Body() body: EditDriversDto) {
    return this.driversService.editDriver(body)
  }

  @Get("/:id")
  getDriver(@Param() id) {
    console.log(id)
    return this.driversService.getDriver(parseInt(id.id))
  }

  @Get("/")
  getAllDrivers() {
    return this.driversService.getAllDrivers()
  }

}

import { Controller, Get } from "@nestjs/common"

import { CarParkService } from "./car-park.service"

@Controller('car-park')
export class CarParkController {
  constructor(private carParkService: CarParkService) {
  }

  @Get('/')
  async getCarPark() {
    return await this.carParkService.getCarPark()
  }
}

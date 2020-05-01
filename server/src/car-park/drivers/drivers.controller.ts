import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateDriversDto } from './dto/create-drivers.dto';
import { DriversService } from './drivers.service';
import { EditDriversDto } from './dto/edit-drivers.dto';

@Controller('/drivers')
export class DriversController {
  constructor(private driversService: DriversService) {}

  @Post('/')
  createDriver(@Body() body: CreateDriversDto) {
    return this.driversService.createDriver(body);
  }

  @Post('/:id')
  editDriver(@Param() param, @Body() body: EditDriversDto) {
    return this.driversService.editDriver(parseFloat(param.id), body);
  }

  @Get('/:id')
  getDriver(@Param() param) {
    return this.driversService.getDriver(parseInt(param.id));
  }

  @Get('/')
  getAllDrivers() {
    return this.driversService.getAllDrivers();
  }
}

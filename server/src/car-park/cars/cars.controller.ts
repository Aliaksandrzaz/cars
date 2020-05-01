import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateCarDto } from './dto/create-car.dto';
import { CarsService } from './cars.service';
import { EditCarDto } from './dto/edit-car.dto';

@Controller('/cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Post('/')
  createCar(@Body() body: CreateCarDto) {
    return this.carsService.createCar(body);
  }

  @Post('/:id')
  editCar(@Param() param, @Body() body: EditCarDto) {
    return this.carsService.editCar(parseFloat(param.id), body);
  }

  @Get('/:id')
  getCar(@Param() param) {
    return this.carsService.getCar(parseFloat(param.id));
  }

  @Get('/')
  getAllCars() {
    return this.carsService.getAllCars();
  }
}

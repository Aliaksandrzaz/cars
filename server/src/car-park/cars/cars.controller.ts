import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { CreateCarDto } from './dto/create-car.dto';
import { CarsService } from './cars.service';
import { EditCarDto } from './dto/edit-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Post('')
  createCar(@Body() body: CreateCarDto) {
    return this.carsService.createCar(body);
  }

  @Post(':id')
  editCar(@Param() param, @Body() body: EditCarDto) {
    return this.carsService.editCar(parseFloat(param.id), body);
  }

  @Get(':id')
  getCar(@Param() param) {
    return this.carsService.getCar(parseFloat(param.id));
  }

  @Delete(':id')
  deleteCar(@Param() param) {
    return this.carsService.deleteCar(parseFloat(param.id));
  }

  @Get('')
  getAllCars(@Query() param) {
    console.log(param);
    return this.carsService.getAllCars(
      parseFloat(param.page),
      parseFloat(param.size),
    );
  }
}

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

  @Get('/type')
  getCarsType() {
    return this.carsService.getCarsType();
  }

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

  @Post(':id/archive')
  addToArchive(@Param() param) {
    return this.carsService.addToArchive(parseFloat(param.id));
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

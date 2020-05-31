import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
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
  editCar(@Param('id', ParseIntPipe) id, @Body() body: EditCarDto) {
    return this.carsService.editCar(id, body);
  }

  @Get(':id')
  getCar(@Param('id', ParseIntPipe) id) {
    return this.carsService.getCar(id);
  }

  @Post(':id/archive')
  addToArchive(@Param('id', ParseIntPipe) id) {
    return this.carsService.addToArchive(id);
  }

  @Get('')
  getAllCars(
    @Query('size', ParseIntPipe) size,
    @Query('page', ParseIntPipe) page,
    @Query('carType', ParseArrayPipe)
    types,
  ) {
    return this.carsService.getAllCars(page, size, types);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FuelService } from './fuel.service';
import { CreateFuelDto } from './dto/create-fuel.dto';
import { EditFuelDto } from './dto/edit-fuel.dto';

@Controller('/fuel')
export class FuelController {
  constructor(private fuelService: FuelService) {}

  @Get('/')
  getAll() {
    return this.fuelService.getAll();
  }

  @Post('/:roadListId')
  create(@Param() param: { roadListId: string }, @Body() body: CreateFuelDto) {
    return this.fuelService.createFuel(parseFloat(param.roadListId), body);
  }

  @Put('/:fuelId')
  edit(@Param() param: { fuelId: string }, @Body() body: EditFuelDto) {
    return this.fuelService.editFuel(body);
  }

  @Delete('/:fuelId')
  delete(@Body() body: { id: number }) {
    return this.fuelService.delete(body.id);
  }
}

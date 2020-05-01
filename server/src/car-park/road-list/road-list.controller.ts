import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { CreateRoadListDto } from './dto/create-road-list.dto';
import { RoadListService } from './road-list.service';
import { EditRoadListDto } from './dto/edit-road-list.dto';

@Controller('/road-lists')
export class RoadListController {
  constructor(private roadListService: RoadListService) {}

  @Get('/')
  getRoadLists() {
    return this.roadListService.getRoadLists();
  }

  @Post('/')
  createRoadList(@Body() createRoadList: CreateRoadListDto) {
    return this.roadListService.createRoadList(createRoadList);
  }

  @Get('/:id')
  getRoadList() {
    return this.roadListService.getRoadLists();
  }

  @Post('/:id')
  editRoadList(@Param() params, @Body() editRoadList: EditRoadListDto) {
    return this.roadListService.editRoadList(
      parseFloat(params.id),
      editRoadList,
    );
  }

  @Post('/:id/fuel')
  addFuel() {
    return this.roadListService.addFuel();
  }
}

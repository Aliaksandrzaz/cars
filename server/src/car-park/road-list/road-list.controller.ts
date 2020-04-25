import { Body, Controller, Get, Post } from "@nestjs/common"
import { CreateRoadListDto } from "./dto/create-road-list.dto"
import { RoadListService } from "./road-list.service"

@Controller("/road-list")
export class RoadListController {
  constructor(private createListService: RoadListService) {
  }

  @Get("/")
  getRoadList() {
    return this.createListService.getRoadList()
  }

  @Post("/")
  createList(@Body() createList: CreateRoadListDto) {
    return this.createListService.createList(createList)
  }
}

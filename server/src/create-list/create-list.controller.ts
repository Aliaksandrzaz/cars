import { Body, Controller, Post } from "@nestjs/common"
import { CreateListDto } from "./dto/create-list.dto"
import { CreateListService } from "./create-list.service"

@Controller()
export class CreateListController {
  constructor(private createListService: CreateListService) {
  }

  @Post('create-list')
  createList(@Body() createList: CreateListDto) {
    return this.createListService.createList(createList)
  }
}

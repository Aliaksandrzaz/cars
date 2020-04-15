import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { CreateListService } from "./create-list.service"
import { CreateListController } from "./create-list.controller"
import { ListEntity } from "../entity/list.entity"

@Module({
  imports: [TypeOrmModule.forFeature([ListEntity])],
  providers: [CreateListService],
  controllers: [CreateListController]
})

export class CreateListModule {
}

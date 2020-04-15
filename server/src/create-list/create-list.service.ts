import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateListDto } from "./dto/create-list.dto"
import { ListEntity } from "../entity/list.entity"

@Injectable()
export class CreateListService {
  constructor(
    @InjectRepository(ListEntity)
    private list: Repository<ListEntity>
  ) {
  }

  createList(createListDto: CreateListDto) {
    const list = new ListEntity()

    this.list.save(list)

    return 'Success'
  }
}

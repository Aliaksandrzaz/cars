import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { CreateTrailerDto } from "./dto/create-trailer.dto"
import { TrailersEntity } from "../../entity/trailersEntity"
import { EditTrailerDto } from "./dto/edit-trailer.dto"

@Injectable()
export class TrailerService {
  constructor(
    @InjectRepository(TrailersEntity)
    private trailerRepository: Repository<TrailersEntity>
  ) {
  }

  async createTrailer(createTrailer: CreateTrailerDto) {
    const trailer = new TrailersEntity()

    trailer.model = createTrailer.model
    trailer.registrationNumber = createTrailer.registrationNumber
    trailer.trailerType = createTrailer.trailerType
    trailer.weight = createTrailer.weight

    return await this.trailerRepository.save(trailer)
  }

  async editTrailer(editTrailer: EditTrailerDto) {
    const trailer = await this.trailerRepository.findOne(editTrailer.id)

    trailer.model = editTrailer.model
    trailer.registrationNumber = editTrailer.registrationNumber
    trailer.trailerType = editTrailer.trailerType
    trailer.weight = editTrailer.weight

    return await this.trailerRepository.save(trailer)
  }

  async getTrailer(id: number) {
    return await this.trailerRepository.findOne(id)
  }

  async getAllTrailers() {
    return await this.trailerRepository.find({
      order: {
        id: "DESC"
      }
    })
  }

}

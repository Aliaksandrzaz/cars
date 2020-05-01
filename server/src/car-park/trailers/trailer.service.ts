import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTrailerDto } from './dto/create-trailer.dto';
import { TrailersEntity } from '../entities/trailers.entity';
import { EditTrailerDto } from './dto/edit-trailer.dto';

@Injectable()
export class TrailerService {
  constructor(
    @InjectRepository(TrailersEntity)
    private trailerRepository: Repository<TrailersEntity>,
  ) {}

  async createTrailer(createTrailer: CreateTrailerDto) {
    const trailer = new TrailersEntity();

    trailer.weight = 100;
    trailer.model = 'test trailer';
    trailer.registration_number = 'asd';
    trailer.type = 'dumpTruck';

    return await this.trailerRepository.save(trailer);
  }

  async editTrailer(editTrailer: EditTrailerDto) {
    const trailer = await this.trailerRepository.findOne(editTrailer.id);

    return await this.trailerRepository.save(trailer);
  }

  async getTrailer(id: number) {
    return await this.trailerRepository.findOne(id);
  }

  async getAllTrailers() {
    return await this.trailerRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }
}

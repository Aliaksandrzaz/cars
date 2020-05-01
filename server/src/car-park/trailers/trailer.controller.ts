import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateTrailerDto } from './dto/create-trailer.dto';
import { TrailerService } from './trailer.service';
import { EditTrailerDto } from './dto/edit-trailer.dto';

@Controller('/trailers')
export class TrailerController {
  constructor(private trailerService: TrailerService) {}

  @Post('/')
  createTrailer(@Body() body: CreateTrailerDto) {
    return this.trailerService.createTrailer(body);
  }

  @Post('/:id/edit')
  editTrailer(@Body() body: EditTrailerDto) {
    return this.trailerService.editTrailer(body);
  }

  @Get('/:id')
  getTrailer(@Param() id: number) {
    return this.trailerService.getTrailer(id);
  }

  @Get('/')
  getAllTrailers() {
    return this.trailerService.getAllTrailers();
  }
}

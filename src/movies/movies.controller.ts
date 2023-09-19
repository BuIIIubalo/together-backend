import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';

import { MoviesService } from './movies.service';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('all')
  getAll() {
    return this.moviesService.getAll();
  }

  @Get('top')
  getTop() {
    return this.moviesService.getTop();
  }

  @Get('filters')
  getFilters() {
    return this.moviesService.getFilters();
  }

  @Get('search-by-keyword')
  getByKeyword(@Query('keyword') keyword: string) {
    return this.moviesService.getByKeyword(keyword);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getById(id);
  }

  @Get(':id/facts')
  getFacts(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getFacts(id);
  }

  @Get(':id/similars')
  getSimilars(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getSimilars(id);
  }

  @Get(':id/videos')
  getVideos(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getVideos(id);
  }
}

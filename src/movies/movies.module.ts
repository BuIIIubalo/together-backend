import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('API_BASEURL'),
        headers: { 'X-API-KEY': configService.get('API_KEY') }
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
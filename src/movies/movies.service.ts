import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MoviesService {
  constructor(private readonly httpService: HttpService) {};

  async getAll(): Promise<any> {
    return (await this.httpService.axiosRef.get('v2.2/films')).data;
  }

  async getTop(): Promise<any> {
    return (await this.httpService.axiosRef.get('v2.2/films/top')).data;
  }

  async getFilters(): Promise<any> {
    return (await this.httpService.axiosRef.get('v2.2/films/filters')).data;
  }

  async getById(id: number): Promise<any> {
    return (await this.httpService.axiosRef.get(`v2.2/films/${id}`)).data;
  }

  async getFacts(id: number): Promise<any> {
    return (await this.httpService.axiosRef.get(`v2.2/films/${id}/facts`)).data;
  }

  async getSimilars(id: number): Promise<any> {
    return (await this.httpService.axiosRef.get(`v2.2/films/${id}/similars`)).data;
  }

  async getVideos(id: number): Promise<any> {
    return (await this.httpService.axiosRef.get(`v2.2/films/${id}/videos`)).data;
  }

  async getByKeyword(keyword: string): Promise<any> {
    return (await this.httpService.axiosRef.get('v2.1/films/search-by-keyword', { params: { keyword } })).data;
  }
}

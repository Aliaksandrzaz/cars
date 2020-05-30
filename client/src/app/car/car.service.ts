import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Car,
  CreateCarRequest,
  EditCarRequest,
  FetchCarsRequest,
} from './models';
import { Paging } from '../models';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  fetchCars(params?: FetchCarsRequest) {
    let httpParams = new HttpParams();

    if (params.size) httpParams = httpParams.append('page', `${params.page}`);
    if (params.page) httpParams = httpParams.append('size', `${params.size}`);

    return this.http.get<Paging<Car>>('/api/cars', { params: httpParams });
  }

  fetchCar(id: string) {
    return this.http.get<Car>(`/api/cars/${id}`);
  }

  createCars(body: CreateCarRequest) {
    return this.http.post('/api/cars', body);
  }

  editCar(id: string, body: EditCarRequest) {
    return this.http.post(`/api/cars/${id}`, body);
  }

  moveInArchive(id: string) {
    return this.http.post(`/api/cars/${id}/archive`, {});
  }
}

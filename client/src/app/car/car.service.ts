import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Car,
  Cars,
  CreateCarRequest,
  EditCarRequest,
  FetchCarsRequest,
} from './models';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  fetchCars(params?: FetchCarsRequest) {
    let params2 = new HttpParams();
    params2 = params2.append('page', params.page);
    params2 = params2.append('size', params.size);

    return this.http.get<Cars>('/api/cars?', { params: params2 });
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

  removeCar(id: string) {
    return this.http.delete(`/api/cars/${id}`);
  }
}

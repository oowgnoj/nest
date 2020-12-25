import { Body, Inject, Injectable } from '@nestjs/common';
import { Dog } from './model/dog.model';

@Injectable()
export class DogService {
  constructor(@Inject('DOG_REPOSITORY') private dogRepository: typeof Dog) {}
  async findAll(): Promise<Dog[]> {
    return this.dogRepository.findAll<Dog>();
  }
  async create(payload): Promise<Dog> {
    return this.dogRepository.create(payload);
  }
}

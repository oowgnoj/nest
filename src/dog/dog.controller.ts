import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dog } from './model/dog.model';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';

@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get('/')
  findAll(): Promise<Dog[]> {
    return this.dogService.findAll();
  }

  @Post('/')
  create(@Body() payload: CreateDogDto): Promise<Dog> {
    return this.dogService.create(payload);
  }
}

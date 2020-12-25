import { IsNumber, IsString } from 'class-validator';

export class CreateDogDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly breed: string;
  @IsNumber()
  readonly age: number;
}

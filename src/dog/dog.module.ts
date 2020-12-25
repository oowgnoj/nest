import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DogController } from './dog.controller';
import { dogProviders } from './dog.providers';
import { DogService } from './dog.service';

@Module({
  controllers: [DogController],
  providers: [DogService, ...dogProviders],
})
export class DogModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../entities/person/person';
import { PersonController } from './person.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPersonsHandler } from './queries/handlers/get-persons.handler/get-persons.handler';
import { SavePersonHandler } from './commands/handler/save-person.handler/save-person.handler';

@Module({
  providers: [GetPersonsHandler, SavePersonHandler],
  imports: [TypeOrmModule.forFeature([Person]), CqrsModule],
  controllers: [PersonController],
})
export class PersonModule {}

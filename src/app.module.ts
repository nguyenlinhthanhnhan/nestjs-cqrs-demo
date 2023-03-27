import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Person} from "./entities/person/person";
import { PersonModule } from './person/person.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'PassW0rd',
            database: 'cqrs-demo',
            synchronize: false,
            entities: [Person]
        }),
        PersonModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

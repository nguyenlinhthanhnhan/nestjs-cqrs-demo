import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {SavePersonCommand} from "../../impl/save-person.command/save-person.command";
import {InjectRepository} from "@nestjs/typeorm";
import {Person} from "../../../../entities/person/person";
import {Repository} from "typeorm";

@CommandHandler(SavePersonCommand)
export class SavePersonHandler implements ICommandHandler<SavePersonCommand>{
    constructor(
        @InjectRepository(Person) private personRepo:Repository<Person>
    ) {
    }

    async execute(command: SavePersonCommand): Promise<any> {
        let person = new Person()
        person.age = command.age
        person.name = command.name
        await this.personRepo.insert(person)
    }
}

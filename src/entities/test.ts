import {Entity as TypeORMEntity, Column, PrimaryGeneratedColumn} from "typeorm/browser";

@TypeORMEntity('test')
export class test {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text")
    age: number;

    @Column("text")
    email: string;
}

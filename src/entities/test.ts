import {Entity, Column, PrimaryGeneratedColumn} from "typeorm/browser";

@Entity('test')
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

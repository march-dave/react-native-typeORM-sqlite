import {Entity, Column, PrimaryGeneratedColumn} from "typeorm/browser";

@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;

}
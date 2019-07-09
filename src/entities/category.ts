import {Entity, PrimaryGeneratedColumn, Column, EntitySchema} from "typeorm/browser";

// @Entity('category')
// export class Category {

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     name: string;

// }

export interface ICategory {
    id: number;
    name: string;
}

export const CategoryEntity = new EntitySchema<ICategory>({
    name: "category",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String
        }
    }
});
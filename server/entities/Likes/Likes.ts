import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Likes{

    @PrimaryGeneratedColumn("increment")
    likesId!: number;

    // whice cafe

    // liked owner
}
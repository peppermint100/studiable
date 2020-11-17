import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment{

    @PrimaryGeneratedColumn("increment")
    commentId!: number;

    @Column({nullable: false})
    commentContent!: string;

    @CreateDateColumn()
    createdAt!: string;

    // comment owner 

    // cafe belongs to
}
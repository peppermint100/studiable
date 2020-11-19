import { Comment } from './../Comment/Comment';
import { Cafe } from './../Cafe/Cafe';
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Like } from '../Like/Like';

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    userId!: string;

    @Column({nullable: false})
    email!: string;
    
    @Column({nullable: false})
    username!: string;

    @Column({nullable: false})
    password!: string;

    // cafePosted
    @OneToMany(type => Cafe, cafe => cafe.writer)
    cafePosted!: Array<Cafe>;

    // comment wrote
    @OneToMany(type => Comment, comment => comment.owner)
    commentWrote!: Array<Comment>;

    // cafeLiked
    @OneToMany(type => Like, like => like.owner)
    likes!: Array<Like>;
}
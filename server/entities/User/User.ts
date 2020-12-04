import { Comment } from './../Comment/Comment';
import { Cafe } from './../Cafe/Cafe';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    @OneToMany(type => Cafe, cafe => cafe.writer, { cascade: true })
    cafePosted!: Array<Cafe>;

    // comment wrote
    @OneToMany(type => Comment, comment => comment.owner, { cascade : true })
    commentWrote!: Array<Comment>;

    // cafeLiked
    @OneToMany(type => Like, like => like.owner, { cascade: true })
    likes!: Array<Like>;
}
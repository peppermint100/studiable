import { Comment } from './../Comment/Comment';
import { Cafe } from './../Cafe/Cafe';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Like } from '../Like/Like';

@Entity()
export class User{

    @PrimaryGeneratedColumn("uuid")
    userId!: string;

    @Column({nullable: false})
    email!: string;
    
    @Column({nullable: false})
    username!: string;

    @Column({nullable: false})
    password!: string;

    // cafePosted
    // to do some relation stuff added joinColumn but Cafe entity doesn't really make changes about User so I didn't add joinColumn on the other side
    @Column({ default: []})
    @OneToMany(type => Cafe, cafe => cafe.writer)
    cafePosted!: Array<Cafe>;

    // comment wrote
    @Column({ default: [], array: true })
    @OneToMany(type => Comment, comment => comment.owner)
    commentWrote!: Array<Comment>;

    // cafeLiked
    // @Column("simple-array", { default: []})
    @Column({ default: [], array: true })
    @OneToMany(type => Like, like => like.owner)
    likes!: Array<Like>;
    
}
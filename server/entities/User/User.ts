import { Cafe } from './../Cafe/Cafe';
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    cafeId!: number;
    @OneToMany(type => Cafe, cafe => cafe.writer)
    @JoinColumn({ name: "cafeId"})
    cafePosted!: Array<Cafe>;

    // cafeLiked
    // @Column("simple-array", { default: []})
    @Column({ default: [], array: true })
    likedCafeId!: number[];
    @ManyToMany(type => Cafe, cafe => cafe.likedUsers)
    @JoinColumn({ name: "likedCafeId"})
    cafeLiked!: Array<Cafe>;
}
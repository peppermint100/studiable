import { User } from './../User/User';
import { AfterLoad, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Feature from "../../types/Feature";

@Entity()
export class Cafe{

    @PrimaryGeneratedColumn("increment")
    cafeId!: number;

    @Column({nullable: false})
    cafeName!: string;
    
    @Column({nullable: false})
    cafeContent!: string;

    @Column({nullable: false})
    cafeFeatures!: Array<Feature>;

    @Column({ nullable: true })
    cafeScore!: number;

    @Column({ nullable: true})
    americanoPrice!: number;

    @Column({ nullable: true })
    cafeLocation!: string; // requires types for google map location 

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt!: Date;

    // cafe author
    @Column({ nullable: false})
    @ManyToOne(type => User, user => user.cafePosted)
    writer!: User;

    // likesUsers
    @Column({ default: []})
    @ManyToMany(type => User, user => user.cafeLiked)
    likedUsers!: Array<User>

    // likescount
    @AfterLoad()
    countLikes(): number {
        return this.likedUsers.length;
    }

    // comment

    // image location
}
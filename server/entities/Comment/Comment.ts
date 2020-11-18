import { Cafe } from './../Cafe/Cafe';
import { User } from './../User/User';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment{

    // cafe belongs to
    @PrimaryColumn()
    cafeId!: number;
    @ManyToOne(type => Cafe, cafe => cafe.comments)
    @JoinColumn({ name: "cafeId"})
    cafeBelongsTo!: Cafe;
    
    // comment owner 
    @PrimaryColumn()
    ownerId!: string;
    @ManyToOne(type => User, user => user.commentWrote)
    @JoinColumn({ name:"ownerId" })
    owner!: User;

    @Column({nullable: false})
    commentContent!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt!: Date;
}
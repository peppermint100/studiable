import { Cafe } from './../Cafe/Cafe';
import { User } from './../User/User';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment extends BaseEntity{
    
    @PrimaryGeneratedColumn("uuid")
    commentId!: string;

    // cafe belongs to
    @Column()
    cafeId!: number;
    @ManyToOne(type => Cafe, cafe => cafe.comments)
    @JoinColumn({ name: "cafeId"})
    cafeBelongsTo!: Cafe;
    
    // comment owner 
    @Column()
    ownerId!: string;
    @ManyToOne(type => User, user => user.commentWrote)
    @JoinColumn({ name:"ownerId" })
    owner!: User;

    @Column({nullable: false})
    commentContent!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt!: Date;
}
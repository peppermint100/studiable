import { User } from '../User/User';
import { Cafe } from '../Cafe/Cafe';
import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Like extends BaseEntity{
    // cafe
    @PrimaryColumn()
    cafeId!: number;
    @ManyToOne(type => Cafe, cafe => cafe.likes)
    @JoinColumn({ name: "cafeId" })
    cafe!: Cafe;

    // liked owner
    @PrimaryColumn()
    userId!: string;
    @ManyToOne(type => User, user => user.likes)
    @JoinColumn({ name: "userId"})
    owner!: User;
}
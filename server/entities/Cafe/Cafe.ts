import { Like } from '../Like/Like';
import { Comment } from './../Comment/Comment';
import { User } from './../User/User';
import { AfterLoad, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Feature from "../../types/Feature";

@Entity()
export class Cafe{

    @PrimaryGeneratedColumn("increment")
    cafeId!: number;

    @Column({nullable: false})
    cafeName!: string;
    
    @Column({nullable: false})
    cafeContent!: string;

    @Column("simple-array", {nullable: false})
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
    @Column()
    writerId!: string;
    @ManyToOne(type => User, user => user.cafePosted)
    @JoinColumn({ name: "writerId" })
    writer!: User;

    @OneToMany(type => Comment, comment => comment.cafeBelongsTo)
    comments!: Array<Comment>;

    // image location
    @Column({ nullable: true })
    imageLocation!: string;

    // likesUsers
    @OneToMany(type => Like, like => like.cafe)
    likes!: Array<Like>;

    // likescount
    @AfterLoad()
    countLikes(): number {
        return this.likes.length;
    }

    @AfterLoad()
    async hasUserPushedLike(user: User): Promise<boolean> {
        const likeMaybe: Like | undefined = await Like.findOne({
            where : {
                userId: user.userId,
                cafeId: this.cafeId
            }
        }) 
        return !!likeMaybe;
    }
}
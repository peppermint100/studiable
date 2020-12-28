import { Like } from '../Like/Like';
import { Comment } from './../Comment/Comment';
import { User } from './../User/User';
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Feature from "../../types/Feature";

@Entity()
export class Cafe extends BaseEntity{

    @PrimaryGeneratedColumn("increment")
    cafeId!: number;

    @Column({nullable: false})
    cafeName!: string;
    
    @Column({nullable: false})
    cafeContent!: string;

    @Column("simple-array", {nullable: true})
    cafeFeatures!: Array<Feature>;

    @Column({ nullable: true })
    cafeScore!: number;

    @Column({ nullable: true })
    americanoPrice!: number;

    @Column({ nullable: true })
    cafeLocationLat!: number; // requires types for google map location 

    @Column({ nullable: true })
    cafeLocationLng!: number; // requires types for google map location 

    // image location
    @Column({ nullable: true })
    imageLocation!: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt!: Date;

    // cafe author
    @Column()
    writerId!: string;
    @ManyToOne(type => User, user => user.cafePosted)
    @JoinColumn({ name: "writerId" })
    writer!: User;

    @OneToMany(type => Comment, comment => comment.cafeBelongsTo, { cascade: true })
    comments!: Array<Comment>;

     // likesUsers
    @OneToMany(type => Like, like => like.cafe, { cascade : true })
    likes!: Array<Like>;

    // likescount
    @AfterLoad()
    countLikes(): number {
        if(this.likes){
            return this.likes.length;
        }else{
            return 0;
        }
    }

    @AfterLoad()
    async hasUserPushedLike(): Promise<boolean> {
        const likeMaybe: Like | undefined = await Like.findOne({
            where : {
                userId: this.writerId,
                cafeId: this.cafeId
            }
        }) 
        return !!likeMaybe;
    }
}
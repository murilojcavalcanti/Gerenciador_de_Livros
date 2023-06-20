import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        nullable:false
    })
    title: string

    @Column({
        nullable:false
    })
    books_id: string


    @Column({
        nullable:false
    })
    authors: string

    @Column({
        nullable:false
    })
    numberOfPages: number

    @Column({
        nullable:false
    })
    thumbnail: string

    @CreateDateColumn({ 
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",
        nullable: false
     })
    startedAt: Date

    @CreateDateColumn({ 
        type: "timestamp",
        nullable:true,
        default:null
     })
    ended_At: Date

    @Column({
        nullable:false
    })
    score: Number

    @Column({
        default:"",
        nullable:true
    })
    review: string


}

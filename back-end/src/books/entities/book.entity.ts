import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({
        nullable:false
    })
    Title: string

    @Column({
        nullable:false
    })
    Authors: string

    @Column({
        nullable:false
    })
    NumberOfPages: number

    @Column({
        nullable:false
    })
    Thumb: string

    @CreateDateColumn({ 
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",
        nullable: false
     })
    StartedAt: Date

    @CreateDateColumn({ 
        type: "timestamp",
        nullable:true
     })
    Conclued_At: Date

    @Column({
        nullable:false
    })
    Score: Number

    @Column({
        default:"",
        nullable:true
    })
    Review:string


}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { NewsPost } from "./NewsPost"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    // @OneToMany(() => NewsPost, newspost => newspost.author)
    // newsposts: NewsPost[];
}

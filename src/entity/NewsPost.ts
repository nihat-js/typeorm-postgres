import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class NewsPost {

  @PrimaryGeneratedColumn()
  public id: number


  @Column()
  public title: string

  @Column()
  public text: string


  @ManyToOne(() => User, User => User.id)
  author: User;


}
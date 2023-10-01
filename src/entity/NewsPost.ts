import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsPost{

  @PrimaryGeneratedColumn()
  public id: number 


  @Column()
  public title : string

  @Column()
  public text : string

  @Column()
  public description : string

  @Column({nullable : true})
  public createdAt : Date

}
import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { NewsPost } from "./entity/NewsPost"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "main",
    synchronize: true,
    logging: false,
    entities: [User,NewsPost],
    migrations: [],
    subscribers: [],
})

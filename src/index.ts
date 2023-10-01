import * as express from "express"
import { Request, Response } from "express"
import 'dotenv/config'
import { AppDataSource as myDataSource } from "./data-source"

import { User } from "./entity/User"
import { NewsPost } from "./entity/NewsPost"
import {newsPostRoutes} from "./routes/news"

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(express.json())
app.use("/api/newsposts",newsPostRoutes)


// start express server
app.listen(3000)
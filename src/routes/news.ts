import { Router, Request, Response } from 'express';
import { AppDataSource as myDataSource } from "../data-source"
import { User } from '../entity/User';
import { NewsPost } from '../entity/NewsPost';

const r = Router()


r.get("/", async function (req: Request, res: Response) {
  const result = await myDataSource.getRepository(NewsPost).find()
  res.json(result)
})

r.get("/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(NewsPost).createQueryBuilder("news_post").where("news_post.id = :id", {id : req.params.id}).getOne(); 
  // .findOneBy({
  //   id: req.params.id,
  // })
  return res.send(results)
})

r.post("/", async function (req: Request, res: Response) {
  let { title, text, author } = req.body
  const newspost: NewsPost = myDataSource.getRepository(NewsPost).create({ title, text, author })
  const results = await myDataSource.getRepository(NewsPost).save(newspost)
  return res.send(results)
})

r.put("/:id", async function (req: Request, res: Response) {
  const result = await myDataSource.getRepository(NewsPost).findOneBy({
    id: req.params.id,
  })
  myDataSource.getRepository(NewsPost).merge(result, req.body)
  const results = await myDataSource.getRepository(NewsPost).save(result)
  return res.send(results)
})

r.delete("/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(NewsPost).delete(req.params.id)
  return res.send(results)
})

export {
  r as newsPostRoutes
}

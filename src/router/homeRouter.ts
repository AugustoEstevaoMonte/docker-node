import {Router,Request,Response} from "express";

const router = Router();

router.get('/',(req :Request,res :Response) => {
  res.send("Hello")
})

router.get('/contato',(req :Request,res :Response) => {
  res.send("Hello from /contato")
})

export default router
import express,{Request,Response} from "express"
import path from 'path'
import homeRoutes from "./router/homeRouter"

const server = express();

server.use(express.static(path.join(__dirname,'../public')))

server.use(homeRoutes)

server.use((req: Request, res: Response) => {
  res.send("Não pude encontrar a págin!")
})

server.listen(3000)

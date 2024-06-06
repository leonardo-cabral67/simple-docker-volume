import express, { Request, Response } from 'express'
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.json({message: "this route is working"})
})

const port = 3000;
app.listen(port, () => console.log("app is running in port: ", port))

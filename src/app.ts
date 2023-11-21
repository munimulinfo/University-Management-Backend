import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
// const port = 3000
app.use(cors());
//data parser
app.use(express.json());
app.use(express.text());

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;

import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const port = 3333;
const app = express();
app.use(cors())
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);


app.listen(port, () => {
  console.log(`Server at http:localhost:${port}`)
});
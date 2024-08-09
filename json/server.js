import express from 'express';
import cors from 'cors';
import addAdbum from './public/API/addAdbum.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.VITE_PORTSERVER_KEY

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/album/add', addAdbum);

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});

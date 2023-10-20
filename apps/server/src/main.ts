import express from 'express';
import * as path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/user';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to ecommerce REST API!' });
});

app.use('/api/user', userRouter);

mongoose.connect(process.env.MONGODB_URI);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

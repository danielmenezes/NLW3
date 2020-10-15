import express from 'express'
import path from 'path';
import './database/connection';
import 'express-async-errors';
import cors from 'cors'

import roustes from './routes'
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(roustes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => {
    console.log('Server running...');
});



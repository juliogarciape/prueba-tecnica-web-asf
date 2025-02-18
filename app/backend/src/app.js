import authRoutes from './routes/auth.js';
import employeeRoutes from './routes/employee.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import { validateToken } from './middlewares/validateToken.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/employees', validateToken, employeeRoutes);

export default app;

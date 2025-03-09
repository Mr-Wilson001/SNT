import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import noteRoutes from './routes/noteRoutes';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Encode MongoDB URI
const username = encodeURIComponent(process.env.DB_USERNAME || 'gozmork');
const password = encodeURIComponent(process.env.DB_PASSWORD || 't6yQ2q9g8VstpVHC');
const clusterUrl = process.env.DB_CLUSTER_URL || 'cluster0.sc172.mongodb.net';
const dbName = process.env.DB_NAME || 'your-database-name';

const mongoUri = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Database connection
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/notes', noteRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
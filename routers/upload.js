import express from 'express';
import { uploadController } from '../controller/upload.js';

const router = express.Router();

router.post('/', uploadController )

export default router;

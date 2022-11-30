import express from 'express';
import { imagesInFolder, imagesAll } from '../controller/images.js';

const router = express.Router();

router.get('/:folder', imagesInFolder )
router.get('/', imagesAll );

export default router;

import express from 'express';
import * as teacherController from '../controllers/teacherController.js';

const router = express.Router();

router.post('/register', teacherController.registerTeacher);

export default router;
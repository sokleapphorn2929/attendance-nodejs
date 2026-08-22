import express from 'express';
import * as teacherController from '../controllers/teacherController.js';

const router = express.Router();

router.post('/register', teacherController.registerTeacher);
router.post('/login', teacherController.loginTeacher);
router.post('/logout', teacherController.logoutTeacher);

export default router;
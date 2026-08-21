import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Teacher } from '../models/index.js';

export const registerTeacher = async (req, res) => {
    try {
        const {username, password} = req.body;

        const existingTeacher = await Teacher.findOne(
            {
                where: {username}
            }
        );

        if(existingTeacher){
            return res.status(400).json({message: 'Username is already exists.'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newTeacher = await Teacher.create(
            {
                username,
                password: hashedPassword
            }
        )

        return res.status(201).json(
            {
                message: 'Teacher registered successfully.',
                teacher: {
                    id: newTeacher.id,
                    username: newTeacher.username
                }
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                message: 'Internal server error.',
                error: error.message
            }
        )
    }
}
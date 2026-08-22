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

export const loginTeacher = async (req, res) => {
    try {
        const {username, password} = req.body;

        const teacher = await Teacher.findOne(
            {
                where: {username}
            }
        )
        if(!teacher){
            return res.status(400).json(
                {
                    message: 'Invalid username or password.'
                }
            )
        }

        const validPassword = await bcrypt.compare(password, teacher.password);
        if(!validPassword){
            return res.status(400).json(
                {
                    message: 'Invalid username or password.'
                }
            )
        }

        const token = jwt.sign(
            {
                id: teacher.id,
                username: teacher.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        )

        return res.status(200).json(
            {
                message: 'Login successful.',
                token,
                teacher: {
                    id: teacher.id,
                    username: teacher.username
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

export const logoutTeacher = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if(!token){
            return res.status(401).json(
                {
                    message: 'Unauthorized.'
                }
            )
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        return res.status(200).json(
            {
                message: 'Logout successful.',
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
import { Request, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
    { name: 'gerson', email: 'gerson@hotmail.com' },
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Luana', 
                email: 'LuanaGata@gmail.com'
            },
            message: {
                subject: 'Bem vindo ao sistema', 
                body: 'seja bem vindo espirito santo'
            }
        })
    }
};
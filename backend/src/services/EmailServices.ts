interface IMailto {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachement?: string[];
}

interface IMessageDTO {
    to: IMailto;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email em viado ${to.name}: ${message.subject}`);
    }
}

export default EmailService;
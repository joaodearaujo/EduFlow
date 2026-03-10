import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { type Curso, type Matricula } from './interfaces.js';

const app = express();
app.use(express.json());
app.use(cors());

const cursos: Curso[] = [
    {id: '1', label: 'Web Development' },
    {id: '2', label: 'Mobile App Design' },
    {id: '3', label: 'Data Analysis' },
];

app.get('/cursos', (req: Request, res: Response) => {
    res.status(200).json(cursos)
})

app.post('/matricula', (req: Request, res: Response) => {
    const { name, email, course }: Matricula = req.body;

    if (!name || !email || !course) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'Todos os campos (nome, e-mail e curso) são obrigatórios'
        });
    }

    console.log(`Nova matrícula recebida: ${name} no curso ${course}`);

    res.status(201).json({
        message: 'Matrícula realizada com sucesso!',
        data: { name, email, course }
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor EduFlow a correr em http://localhost:${PORT}`)
})
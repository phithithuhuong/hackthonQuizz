import express from 'express';
import Question from '../../schemas/Question.js';
import token from '../auth.controller.js';
import categoryController from '../category.controller.js';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class QuestionApiController {
    create = async (req, res) => {
        try {
            let { questions, category_id, nameCategory, id_user } = req.body;
            let idUser = id_user;

            if (!category_id) {
                let newCategory = await categoryController.create(nameCategory, idUser);
                category_id = newCategory.id;
            }

            let categoryId = category_id;

            for (let i = 0; i < questions.length; i++) {
                let newQuestion = await prisma.question.create({
                    data: {
                        question: questions[i].question,
                        content: questions[i].content,
                        correct: questions[i].correct,
                        category_id: categoryId,
                    } 
                })

                res.status(200).json({ message: 'Question created successfully', data: newQuestion })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong' })
        }
    }

    read = async (req, res) => {
        let question_id = req.params.question_id;
    }

}

export default new QuestionApiController();  

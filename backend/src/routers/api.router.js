import express from 'express';
import authApiController from '../controllers/api/auth.api.controller.js';
import CategoryApiController from '../controllers/api/category.api.controller.js';
import QuestionApiController from '../controllers/api/question.api.controller.js';

const apiRouter = express.Router();

apiRouter.post('/auth/register',authApiController.register);
apiRouter.post('/auth/login',authApiController.login);
apiRouter.post('/auth/logout',authApiController.logout);

apiRouter.post('/category', CategoryApiController.create);
apiRouter.get('/category/:category_id', CategoryApiController.read);

apiRouter.post('/question', QuestionApiController.create);
apiRouter.get('/question', QuestionApiController.read);

export default apiRouter;

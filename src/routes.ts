import { request, response, Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router()

router.post('/users', (request, response) => {
    //return response.status(201).send();
    return createUserController.handle(request,response);
});

export { router }
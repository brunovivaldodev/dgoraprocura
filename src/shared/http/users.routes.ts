import { Router } from "express";
import CreateUserController from "../../modules/users/UseCases/createUser/createUserController";



const UserRoutes = Router();


UserRoutes.post("", CreateUserController.handle)


export { UserRoutes }
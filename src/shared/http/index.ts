import { Router } from "express";
import { UserRoutes } from "./users.routes";

import { DisappearanceRouter } from "./disappearance.routes";

const Routes = Router()

Routes.use("/users", UserRoutes)
Routes.use("/disappearance", DisappearanceRouter)



export { Routes }

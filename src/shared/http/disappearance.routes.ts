import { Router } from "express";
import { CreateDisappearanceController } from "../../modules/disappearance/useCases/createDisappearance/createDisappearanceController";
import { sendMessageToUserController } from "../../modules/disappearance/useCases/sendAMessageToUser/sendMessageToUserController";
const DisappearanceRouter = Router()


DisappearanceRouter.post("", CreateDisappearanceController.handle)

DisappearanceRouter.get("", sendMessageToUserController.handle)

export { DisappearanceRouter }
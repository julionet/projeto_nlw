import { Router } from "express"
import MessageController from "../controllers/MessageController"

const messageRoute = Router()

const messageController = new MessageController()

messageRoute.post("/", messageController.create)

messageRoute.get("/:user_id", messageController.listByUser)

export default messageRoute

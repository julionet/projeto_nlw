import { Request, Response} from "express"
import MessageService from "../services/MessageService"

class MessageController {
    async create(request: Request, response: Response) {
        const { admin_id, text, user_id } = request.body

        const messageService = new MessageService()

        const message = await messageService.create( { admin_id, text, user_id })

        return response.json(message)
    }

    async listByUser(request: Request, response: Response) {
        const { user_id } = request.params

        const messageService = new MessageService()

        const list = await messageService.listByUser(user_id)

        return response.json(list)
    }
}

export default MessageController

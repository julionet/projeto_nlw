import { Request, Response } from "express"

import SettingService from "../services/SetttingService"

class SettingController {
  async create(request: Request, response: Response) {
    const { username, chat } = request.body

    const settingService = new SettingService()

    try {
        const setting = await settingService.create({ username, chat })
        return response.json(setting)
    } catch (err) {
        return response.status(400).json( { message: err.message })
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params

    const settingService = new SettingService();

    const setting = await settingService.findByUsername(username)

    return response.json(setting)
  }

  async update(request: Request, response: Response) {
    const { username } = request.params
    const { chat } = request.body

    const settingService = new SettingService()

    const setting = await settingService.update(username, chat)

    return response.json(setting)
  }
}

export default SettingController

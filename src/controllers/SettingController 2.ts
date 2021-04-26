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
}

export default SettingController

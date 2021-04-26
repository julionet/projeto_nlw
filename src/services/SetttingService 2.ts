import { getCustomRepository, Repository } from "typeorm"
import Setting from "../entities/Setting"

import SettingRepository from "../repositories/SettingRepository"

interface ISettingCreate {
    username: string
    chat: boolean
}

class SettingService {
    private settingRepository: Repository<Setting>

    constructor() {
        this.settingRepository = getCustomRepository(SettingRepository)
    }
    async create({ username, chat }: ISettingCreate) {
        const userExists = await this.settingRepository.findOne({ username })

        if (userExists) {
            throw new Error("Usuário já existe!")
        }

        const setting = this.settingRepository.create({ username, chat })
        await this.settingRepository.save(setting)

        return setting
    }
}

export default SettingService

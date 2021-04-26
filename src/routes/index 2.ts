import { Router } from "express"

import Constantes from "../config/Constantes"
import messageRoute from "./MessageRoute"
import settingRoute from "./SettingRoute"
import userRoute from "./UserRoute"

const routes = Router()

routes.use(Constantes.routes.settings, settingRoute)
routes.use(Constantes.routes.user, userRoute)
routes.use(Constantes.routes.message, messageRoute)

export default routes

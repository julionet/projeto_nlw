import { request, Router } from "express"

import Constantes from "../config/Constantes"
import messageRoute from "./MessageRoute"
import settingRoute from "./SettingRoute"
import userRoute from "./UserRoute"

const routes = Router()

routes.use(Constantes.routes.settings, settingRoute)
routes.use(Constantes.routes.user, userRoute)
routes.use(Constantes.routes.message, messageRoute)
routes.use(Constantes.routes.client, (request, response) => {
    return response.render("html/client.html")
})

export default routes

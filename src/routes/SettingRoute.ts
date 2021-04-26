import { Router } from "express";
import SettingController from "../controllers/SettingController";

const settingRoute = Router()

const settingController = new SettingController()

settingRoute.post("/", settingController.create)
settingRoute.put("/:username", settingController.update)
settingRoute.get("/:username", settingController.findByUsername)

export default settingRoute

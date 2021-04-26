import { Router } from "express";
import SettingController from "../controllers/SettingController";

const settingRoute = Router()

const settingController = new SettingController()

settingRoute.post("/", settingController.create)

export default settingRoute

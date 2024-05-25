import express from "express";
import { UserController } from "../controller/user.controller.js";
const user = new UserController()
const router = express.Router();

router.post("/user/add", user.add);
router.get("/user/find/all/:pageNumber/:pageSize",user.findAll)












export default router;

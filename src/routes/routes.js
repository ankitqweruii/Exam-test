import express from "express";
import { UserController } from "../controller/user.controller.js";
import { authenticateUser } from "../core/common/auth.js";
const user = new UserController();
const router = express.Router();

router.post("/user/add", user.add);
router.post("/user/login", user.login);
router.get("/user/find/all/:pageNumber/:pageSize", authenticateUser, user.find);
router.get("/user/find/all", authenticateUser, user.findAll);

export default router;

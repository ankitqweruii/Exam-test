import express from "express";
import { UserController } from "../controller/user.controller.js";
import { authenticateUser } from "../core/common/auth.js";
import { QuestionController } from "../controller/question.controller.js";
import { TestController } from "../controller/test.controller.js";
import { StudentController } from "../controller/student.controller.js";
const user = new UserController();
const questionController = new QuestionController();
const testController = new TestController();
const student= new StudentController();


const router = express.Router();

router.post("/user/add", user.add);
router.post("/student/add", student.add);
router.get("/student/list", student.find);
router.post("/user/login", user.login);
router.get("/user/find/all/:pageNumber/:pageSize", authenticateUser, user.find);
router.get("/user/find/all", authenticateUser, user.findAll);

router.post("/question/add",authenticateUser, questionController.add);
router.get("/question/find/all/:pageNumber/:pageSize", authenticateUser, questionController.find);

router.post("/test/add",authenticateUser , testController.add)
router.get("/test/find/all/:pageNumber/:pageSize", authenticateUser, questionController.find);



export default router;

import { sendResponse } from "../core/common/response.handler.js";
import { responseCode } from "../core/constant/response.code.js";
import { QuestionService } from "../service/question.service.js";
import { questionSchema } from "../validation/question.validation.js";
const questionService = new QuestionService()


export class QuestionController {
  async add(req, res) {
    try {
      const { error } = questionSchema.validate(req?.body);
      if (error) {
        return sendResponse(res, responseCode.BAD_REQUEST, null, error);
      }
      sendResponse(res, responseCode.CREATED, await questionService.addQuestion(req));
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }

  async find(req, res) {
    try {
      sendResponse(
        res,
        responseCode.OK,
        await questionService.findAllWithPagination(req)
      );
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }

//   async findAll(req, res) {
//     try {
//       sendResponse(
//         res,
//         responseCode.OK,
//         await userService.findAll(req)
//       );
//     } catch (err) {
//       console.error(err);
//       sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
//     }
//   }


}

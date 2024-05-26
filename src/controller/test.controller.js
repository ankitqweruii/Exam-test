import { sendResponse } from "../core/common/response.handler.js";
import { responseCode } from "../core/constant/response.code.js";
import { TestService } from "../service/test.service.js";
import { testSchema } from "../validation/test.validation.js";
const testService = new TestService();

export class TestController {
  async add(req, res) {
    try {
      const { error } = testSchema.validate(req?.body);
      if (error) {
        return sendResponse(res, responseCode.BAD_REQUEST, null, error);
      }
      sendResponse(
        res,
        responseCode.CREATED,
        await testService.addTest(req)
      );
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
        await testService.findAllWithPagination(req)
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

import { sendResponse } from "../core/common/response.handler.js";
import { responseCode } from "../core/constant/response.code.js";
import { UserService } from "../service/user.service.js";
import { userSchema } from "../validation/user.validation.js";
const userService = new UserService();

export class UserController {
  async add(req, res) {
    try {
      const { error } = userSchema.validate(req?.body);
      if (error) {
        return sendResponse(res, responseCode.BAD_REQUEST, null, error);
      }
      sendResponse(res, responseCode.CREATED, await userService.addUser(req));
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
        await userService.findAllWithPagination(req)
      );
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }

  async findAll(req, res) {
    try {
      sendResponse(
        res,
        responseCode.OK,
        await userService.findAll(req)
      );
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }

  async login(req, res) {
    try {
      sendResponse(
        res,
        responseCode.OK,
        await userService.userLogin(req)
      );
    } catch (err) {
      console.error(err);
      sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
    }
  }
}

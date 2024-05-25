import { generateToken } from "../core/common/auth.js";
import { HelperModules } from "../core/common/helper.modules.js";
import { buildSearchQuery } from "../core/common/query.search.js";
import { commonResponse } from "../core/constant/enum.js";
import UserModel from "../model/user.model.js";

export class UserService extends HelperModules {
  async addUser(req) {
    try {
      const { name, email, phone, userType, password } = req?.body;
      let hash = await this.encrypt(password);
      const user = new UserModel({
        name: name,
        email: email,
        phone: phone,
        user_type: userType,
        phone: phone,
        password: hash,
      });

      return await user.save();
    } catch (error) {
      throw error;
    }
  }

  async findAllWithPagination(req) {
    try {
      const pageNumber = parseInt(req?.params?.pageNumber) || 1;
      const pageSize = parseInt(req?.params?.pageSize) || 10;
      const skipCount = (pageNumber - 1) * pageSize;
      let search = req?.query?.search;
      let searchQuery = {};
      if (search) {
        searchQuery = buildSearchQuery(search, ["name", "email", "phone"]);
      }
      const users = await UserModel.find(searchQuery)
        .limit(pageSize)
        .skip(skipCount)
        .sort({ created_at: "asc" });

      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async userLogin(req) {
    const { email, password } = req?.body;
    let user = await UserModel.findOne({ email: email });
    if (!user) {
      throw new Error(commonResponse.UserNotFound);
    }
    let isCorrectPassword = await this.decrypt(password, user?.password);
    if (!isCorrectPassword) {
      throw new Error(commonResponse.InvalidCredential);
    }
    const token = await generateToken(user);
    return { user, auth: token };
  }

  async findAll(req) {
    try {
      return await UserModel.find().sort({
        created_at: "asc",
      });
    } catch (error) {
      throw error;
    }
  }
}

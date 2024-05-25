import UserModel from "../model/user.model.js";

export class UserService {
  async addUser(req) {
    try {
      const { name, email, phone, userType } = req?.body;
      const user = await new UserModel({
        name: name,
        email: email,
        phone: phone,
        user_type: userType,
      });
      return await user.save();
    } catch (error) {
      throw error;
    }
  }

  async findAllWithPagination(req) {
    const pageNumber = req?.params?.pageNumber;
    const pageSize = req?.params?.pageSize;
    try {
      return await UserModel.find()
        .limit(pageSize)
        .skip(pageSize * pageNumber)
        .sort({
          created_at: "asc",
        });
    } catch (error) {
      throw error;
    }
  }

  async findAll(req) {
    const pageNumber = req?.params?.pageNumber;
    const pageSize = req?.params?.pageSize;
    try {
      return await UserModel.find()
        .sort({
          created_at: "asc",
        });
    } catch (error) {
      throw error;
    }
  }
}

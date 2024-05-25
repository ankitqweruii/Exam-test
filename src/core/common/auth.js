import jwt from "jsonwebtoken";
import { sendResponse } from "./response.handler.js";
import { responseCode } from "../constant/response.code.js";
import { commonResponse } from "../constant/enum.js";

export const generateToken = async (user) => {
  const payload = {
    userId: user?._id,
    username: user?.name,
    role: user?.user_type,
  };
  const secretKey = process.env.JWT_SECREAT_KEY;
  const token = await jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
  //   const decoded = jwt.verify(token, secretKey);
};

export const authenticateUser = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req?.headers?.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    let secretKey = process.env.JWT_SECREAT_KEY
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        err.message = commonResponse.Unauthorize;
        return sendResponse(res, responseCode.UNAUTHORIZED, null, err);
      }
      req.user = user;
      next();
    });
  } else {
    return sendResponse(res, responseCode.UNAUTHORIZED, null, err);
  }
};

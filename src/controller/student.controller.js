import { responseCode } from "../core/constant/response.code.js";
import { studentService } from "../service/student.service.js";
import { sendResponse } from "../core/common/response.handler.js";

const studentServices=new studentService()
export class StudentController {
 
     add=async (req, res) =>{
      try {
        
        sendResponse(res, responseCode.CREATED, await studentServices.addStudent(req));
      } catch (err) {
        console.error(err);
        sendResponse(res, responseCode.INTERNAL_SERVER_ERROR, null, err);
      }
    }

    async find(req,res) {
      try {
        sendResponse(res,
          responseCode.OK,
          await studentServices.findAllStudentList()
        );
      } catch (err) {
        console.error(err);
        sendResponse(res,responseCode.INTERNAL_SERVER_ERROR, null, err);
      }
    }
}
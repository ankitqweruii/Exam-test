import StudentModel from "../model/student.model.js";

export class studentService {
    async addStudent(req) {
        try {
            const {
                name,
                email,
                batch,
                year,
                gender,
                phone,

            } = req?.body;

            const student = new StudentModel({
                name,
                email,
                batch,
                year,
                gender,
                phone,
            });

            const studentData = await student.save();
            return studentData;
        } catch (error) {
            throw error;
        }
    }

    async findAllStudentList(req,res){
        try {
            const data=await StudentModel.find();
            return data
        } catch (error) {
            throw error
        }
       
    }

}
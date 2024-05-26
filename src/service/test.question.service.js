import QuestionTestModel from "../model/test.question.model.js";

export class QuestionTestService {
  async addTestQuestion(data) {
    try {
      const { questionId, testId } = data;
      const questionTest = new QuestionTestModel({
        question_id: questionId,
        test_id: testId,
      });

      return await questionTest.save();
    } catch (error) {
      throw error;
    }
  }
}

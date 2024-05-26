import { buildSearchQuery } from "../core/common/query.search.js";
import QuestionModel from "../model/question.model.js";
import { QuestionTestService } from "./test.question.service.js";

export class QuestionService extends QuestionTestService {
  async addQuestion(req) {
    try {
      const {
        option_a,
        option_b,
        option_c,
        option_d,
        answer,
        subject,
        created_by,
        title,
        testId,
      } = req?.body;

      const question = new QuestionModel({
        title: title,
        option_a: option_a,
        option_b: option_b,
        option_c: option_c,
        option_d: option_d,
        answer: answer,
        created_by: created_by,
        subject: subject,
      });

      const questionData = await question.save();
      const questionTestPayload = {
        questionId: questionData?._id,
        testId: testId,
      };

      await this.addTestQuestion(questionTestPayload);
      return questionData;
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
        searchQuery = buildSearchQuery(search, [
          "title",
          "option_a",
          "option_b",
          "option_c",
          "option_d",
        ]);
      }
      const questions = await QuestionModel.find(searchQuery)
        .limit(pageSize)
        .skip(skipCount)
        .sort({ created_at: "asc" });

      return questions;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

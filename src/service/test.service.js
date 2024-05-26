import { buildSearchQuery } from "../core/common/query.search.js";
import TestModel from "../model/test.model.js";

export class TestService {
  async addTest(req) {
    try {
      const {
        title,
        status,
        max_marks,
        max_time,
        is_nagative_marking,
        is_scheduled,
        date_time,
        buffer_time,
        created_by
      } = req?.body;

      const test = new TestModel({
        title: title,
        status: status,
        max_marks: max_marks,
        max_time: max_time,
        is_nagative_marking: is_nagative_marking,
        is_scheduled: is_scheduled,
        date_time: date_time,
        buffer_time: buffer_time ? buffer_time : 0,
        created_by : created_by
      });

      return await test.save();
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
        ]);
      }
      const test = await TestModel.find(searchQuery)
        .limit(pageSize)
        .skip(skipCount)
        .sort({ created_at: "asc" });
      return test;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

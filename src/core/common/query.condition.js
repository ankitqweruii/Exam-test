export const addDefaultQueryConditions = (schema) => {

  schema.pre("find", function (next) {
    this.where({ active: true, deleted_at: null });
    next();
  });

  schema.pre("findOne", function (next) {
    this.where({ active: true, deleted_at: null });
    next();
  });
  
  schema.pre("findOneAndUpdate", function (next) {
    this.where({ active: true, deleted_at: null });
    next();
  });
};

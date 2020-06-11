'use strict';

import CategoryModel from './category.model';

export default {

  async Save(body) {
    try {
      let category = new CategoryModel(body);
      return category.save()
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return CategoryModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },

  async Delete(id) {
    try {
      return CategoryModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  },

  async ListAll() {
    try {
      return CategoryModel.find().exec();
    } catch (error) {
      throw error;
    }
  }
};
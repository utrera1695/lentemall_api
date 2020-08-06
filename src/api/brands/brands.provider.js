'use strict';

import BrandsModel from './brands.model';

export default {

  async Save(body) {
    try {
      let data = new BrandsModel(body);
      return data.save()
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return BrandsModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },

  async Delete(id) {
    try {
      return BrandsModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  },

  async ListAll() {
    try {
      return BrandsModel.find().exec();
    } catch (error) {
      throw error;
    }
  }
};
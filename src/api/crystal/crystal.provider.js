'use strict';

import CrystalModel from './crystal.model';

export default {

  async Save(body) {
    try {
      let data = new CrystalModel(body);
      return data.save()
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return CrystalModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },
  async Delete(id) {
    try {
      return CrystalModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  },

  async GetByType(type) {
    try {
      return await CrystalModel.find({
        type: type
      }).exec()
    } catch (error) {
      throw error
    }
  }
};
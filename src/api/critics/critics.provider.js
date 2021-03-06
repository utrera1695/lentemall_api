'use strict';

import criticsModel from './critics.model';

export default {

  async Save(body) {
    try {
      let data = new criticsModel(body);
      return data.save()
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return criticsModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },

  async ListAll() {
    try {
      return criticsModel.find().populate('user').exec();
    } catch (error) {
      throw error;
    }
  },
  async GetByUser(user) {
    try {
      return await criticsModel.findOne({
        user: user
      }).exec()
    } catch (error) {
      throw error
    }
  }
};
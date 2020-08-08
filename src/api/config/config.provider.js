'use strict';

import ConfigModel from './config.model';

export default {

  async Save(body) {
    try {
      let data = new ConfigModel(body);
      return data.save()
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return ConfigModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },

  async Delete(id) {
    try {
      return ConfigModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  },

  async Get() {
    try {
      return ConfigModel.findOne().exec();
    } catch (error) {
      throw error;
    }
  }
};
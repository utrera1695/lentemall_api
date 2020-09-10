'use strict';

import OrderModel from './order.model';

export default {
  async Save(body) {
    try {
      let order = new OrderModel(body);
      return order.save();
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return OrderModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },

  async Delete(id) {
    try {
      return OrderModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  },

  async ListAll() {
    try {
      return OrderModel.find()
        .populate('user')
        .populate('crystals')
        .populate('treatments')
        .populate('product')
        .exec();
    } catch (error) {
      throw error;
    }
  },
  async ListByUser(user) {
    try {
      return OrderModel.find({
        user: user,
      })
        .populate('product')
        .populate('crystals')
        .populate('treatments')
        .exec();
    } catch (error) {
      throw error;
    }
  },
  async GetById(id) {
    try {
      return OrderModel.findById(id)
        .populate('user')
        .populate('product')
        .populate('crystals')
        .populate('treatments')
        .exec();
    } catch (error) {
      throw error;
    }
  },
};

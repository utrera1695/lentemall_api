'use strict';

import ProductModel from './products.model';

export default {

  async Save(body) {
    try {
      let products = new ProductModel(body);
      return products.save()
    } catch (error) {
      throw error;
    }
  },

  async Update(id, body) {
    try {
      return await ProductModel.findByIdAndUpdate(id, body).exec();
    } catch (error) {
      throw error;
    }
  },

  async Delete(id, status) {
    try {
      return await ProductModel.findByIdAndUpdate(id, {
        status: status
      }).exec();
    } catch (error) {
      throw error;
    }
  },
  async Get(id) {
    try {
      return await ProductModel.findById(id).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async ListAll() {
    try {
      return await ProductModel.find({
        status: true
      }).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async ListByType(type) {
    try {
      return await ProductModel.find({
        type: type,
      }).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async ListByCategory(category) {
    try {
      return await ProductModel.find({
        category: category,
        status: true
      }).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async ListByBrand(brand, category) {
    try {
      return await ProductModel.find({
        category: category,
        brand: brand,
        status: true
      }).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async ListBrandsInCategory(category) {
    try {
      let products = await ProductModel.find({
        category: category,
        status: true
      }).select('brand').exec();
      let brands = products.filter((a, b) => a.brand !== b.brand)
        .map((a) => {
          return a.brand;
        });
      brands = brands.length > 1 ? brands.filter((v, i) => brands.indexOf(v) === i) : brands;

      return brands
    } catch (error) {
      throw error;
    }
  },
  async ListNoAvailable() {
    try {
      return await ProductModel.find({
        status: false
      }).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async ListExhausted() {
    try {
      return await ProductModel.find({
        stock_status: false
      }).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  },
  async getOutstanding() {
    try {
      return await ProductModel.find({
        outstanding: true
      }).populate('materials').populate('treatments').limit(8).exec();
    } catch (error) {
      throw error;
    }
  },
  async getRecents() {
    try {
      return await ProductModel.find().sort('created_at').limit(8).populate('materials').populate('treatments').exec();
    } catch (error) {
      throw error;
    }
  }
};
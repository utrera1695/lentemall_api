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
  async ListAll() {
    try {
      return await ProductModel.find({
        status: true
      }).exec();
    } catch (error) {
      throw error;
    }
  },
  async ListByType(type) {
    try {
      return await ProductModel.find({
        type: type,
      }).exec();
    } catch (error) {
      throw error;
    }
  },
  async ListByCategory(category) {
    try {
      return await ProductModel.find({
        category: category,
        status: true
      }).exec();
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
      }).exec();
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
      }).exec();
    } catch (error) {
      throw error;
    }
  },
  async ListExhausted() {
    try {
      return await ProductModel.find({
        stock_status: false
      }).exec();
    } catch (error) {
      throw error;
    }
  }
};
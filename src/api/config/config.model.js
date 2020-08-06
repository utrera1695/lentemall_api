'use strict';

import {
  Schema,
  model
} from 'mongoose';

const CategoryModel = Schema({
  info: [{
    label: String,
    data: String
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model('Category', CategoryModel);
'use strict';

import {
  Schema,
  model
} from 'mongoose';

const CategoryModel = Schema({
  name: {
    type: String,
  },
  subcategiries: [{
    type: String
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model('Category', CategoryModel);
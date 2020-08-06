'use strict';

import {
  Schema,
  model
} from 'mongoose';

const BrandsModel = Schema({
  name: {
    type: String,
  },
  logo: {
    type: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model('Brand', BrandsModel);
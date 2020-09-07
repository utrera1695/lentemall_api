'use strict';

import {
  Schema,
  model
} from 'mongoose';

const CrystalModel = Schema({
  name: String,
  description: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  type: {
    type: Number,
    default: 1
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model('Crystal', CrystalModel);
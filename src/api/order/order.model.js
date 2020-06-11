'use strict';

import {
  Schema,
  model
} from 'mongoose';

const OrderModel = Schema({
  status: {
    type: String,
    default: '1'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  od: {
    esf: String,
    cil: String,
    eje: String
  },
  oi: {
    esf: String,
    cil: String,
    eje: String
  },
  add: String,
  dp: String,
  alt: String,
  notes: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model('Order', OrderModel);
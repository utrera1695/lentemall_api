'use strict';

import {
  Schema,
  model
} from 'mongoose';
import {
  autoIncrement
} from 'mongoose-plugin-autoinc';

const OrderModel = Schema({
  status: {
    type: String,
    default: '1',
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  od: {
    esf: String,
    cil: String,
    eje: String,
  },
  oi: {
    esf: String,
    cil: String,
    eje: String,
  },
  add: {
    esf: String,
    cil: String,
    eje: String,
  },
  dp: String,
  alt: String,
  doctor: String,
  notes: String,
  color: String,
  size: {
    bridge: Number,
    horizontal: Number,
    vertical: Number,
    diagonal: Number,
    width: Number,
    dipstick: Number,
  },
  recipe: String,
  files: [String],
  treatments: {
    type: Schema.Types.ObjectId,
    ref: 'Crystal',
    default: null
  },
  crystals: {
    type: Schema.Types.ObjectId,
    ref: 'Crystal',
    default: null
  },
  formulated: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});
OrderModel.plugin(autoIncrement, {
  model: 'Order',
  field: 'orderNumber',
  startAt: 1,
  incrementBy: 1,
});
export default model('Order', OrderModel);
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
  orderNumber: {
    type: Number,
    default: 0,
    unique: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});
OrderModel.plugin(autoIncrement.plugin, {
  model: 'Order',
  field: 'orderNumber',
  startAt: 1,
  incrementBy: 1,
});
export default model('Order', OrderModel);
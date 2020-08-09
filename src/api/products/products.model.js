'use strict';

import {
  Schema,
  model
} from 'mongoose';

const ProductModel = Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  model: {
    type: String,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
    enum: [1, 2, 3, 4],
  },
  /* 
    1: Monturas
    2: Cristales
    3: Lentes de contactos
    4: Accesorios
  */
  sex: String,
  young: Boolean,
  price: Number,
  offer: Boolean,
  offerpercent: Number,
  colors: [{
    type: String
  }],
  images: [{
    type: String,
  }, ],
  images_tester: [{
    type: String,
  }, ],
  category: String,
  stock_status: {
    type: Boolean,
    default: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  sizes: [{
    bridge: Number,
    horizontal: Number,
    vertical: Number,
    diagonal: Number,
    width: Number,
    dipstick: Number
  }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

export default model('Product', ProductModel);
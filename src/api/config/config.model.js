'use strict';

import {
  Schema,
  model
} from 'mongoose';

const ConfigModel = Schema({
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

export default model('Config', ConfigModel);
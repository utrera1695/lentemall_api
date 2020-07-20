'use strict';

import {
  Schema,
  model
} from 'mongoose';

const CriticModel = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  score: Number,
  text: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

export default model('Critic', CriticModel);
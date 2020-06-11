'use strict';

import {
    Schema,
    model
} from 'mongoose';

const UserModel = Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: 'C'
    },
    referer_id: {type:String},
    address: {type: String,default:'desconocido'},
    ci: {type: String,default:'desconocido'},
    phone: {type: String,default:'desconocido'},

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default model('User', UserModel);
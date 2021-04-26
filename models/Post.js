const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: Types.ObjectId, ref: 'User' },
})

module.exports = model('Post', schema)


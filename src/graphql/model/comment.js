/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    _def: { type: Schema.Types.ObjectID, ref: 'def', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);

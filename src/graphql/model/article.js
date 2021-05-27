const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  // eslint-disable-next-line comma-dangle
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);

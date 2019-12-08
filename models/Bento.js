const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BentoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  avatar: {
    type: String
  },
  name: {
    type: String
  },
  nameofbento: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: [String],
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  comment: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Bento = mongoose.model('bento', BentoSchema);

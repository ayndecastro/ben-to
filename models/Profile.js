const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  statusinfo: {
    school: {
      type: String
    },
    department: {
      type: String
    },
    fieldofstudy: {
      type: String
    }
  },
  social: {
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    youtube: {
      type: String
    }
  },
  favorites: [
    {
      name: {
        type: String,
        required: true
      },
      ingredients: {
        type: [String],
        required: true
      },
      cuisine: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  ],
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);

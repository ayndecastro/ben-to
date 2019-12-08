const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Bento = require('../../models/Bento');
const { check, validationResult } = require('express-validator/check');

// @route       GET api/profile/me
// @desc        Get current users profile
// @access      private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('users', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/profile
// @desc        create or update users profile
// @access      private
router.post(
  '/',
  [auth, [check('status', 'Status is required')]],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //profile model structure
    const {
      location,
      bio,
      facebook,
      instagram,
      twitter,
      youtube,
      status,
      fieldofstudy,
      department,
      school
    } = req.body;

    //build profile object
    const profileFields = {};

    profileFields.user = req.user.id;
    //make sure we're getting data in before setting data
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;

    profileFields.social = {};
    //social profileFields
    if (facebook) profileFields.social.facebook = facebook;
    if (twitter) profileFields.social.twitter = twitter;
    if (youtube) profileFields.social.youtube = youtube;
    if (instagram) profileFields.social.instagram = instagram;

    profileFields.statusinfo = {};
    //Status info field
    if (fieldofstudy) profileFields.statusinfo.fieldofstudy = fieldofstudy;
    if (department) profileFields.statusinfo.department = department;
    if (school) profileFields.statusinfo.school = school;

    try {
      // if user profile is available then we update it
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //profile update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      //if there is no profile, create one using profiefields variable
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       GET api/profile
// @desc        get all profiles
// @access      public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/profile/user/:user_id
// @desc    get profile by user ID
// @access  public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/profile
// @desc    DELETE profile, user,posts
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    //remove user's Bento
    await Bento.deleteMany({ user: req.user.id });
    //remove user's profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/profile/favorite
// @desc    add favorite bento to the profile
// @access  Private
router.put(
  '/favorite',
  [
    auth,
    [
      check('name', 'Name of bento is required')
        .not()
        .isEmpty(),
      check('ingredients', 'Ingredients is required')
        .not()
        .isEmpty(),
      check('cuisine', 'Cuisine is required')
        .not()
        .isEmpty(),
      check('cost', 'Cost is required').isInt([{ min: 1 }]),
      check('image', 'Image is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, ingredients, cuisine, cost, image } = req.body;

    const newFav = {
      name,
      ingredients,
      cuisine,
      cost,
      image
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.favorites.unshift(newFav);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/profile/favorite/:fav_id
// @desc    delete favorite from profile
// @access  Private
router.delete('/favorite/:fav_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    const removeIndex = profile.favorites
      .map(item => item.id)
      .indexOf(req.params.fav_id);

    profile.favorites.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

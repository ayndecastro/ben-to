const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Bento = require('../../models/Bento');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator/check');

// @route   POST api/bento
// @desc    Create bento
// @access  private
router.post(
  '/',
  [
    auth,
    [
      check('nameofbento', 'Name of dish is required')
        .not()
        .isEmpty(),
      check('ingredients', 'Ingredients is required')
        .not()
        .isEmpty(),
      check('cuisine', 'Cuisine is required')
        .not()
        .isEmpty(),
      check('cost', 'cost is required')
        .not()
        .isEmpty(),
      check('image', 'Image is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    //error checking
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //grab user data except the password
      const user = await User.findById(req.user.id).select('-password');

      const newBento = new Bento({
        user: req.user.id,
        name: user.name,
        avatar: user.avatar,
        cuisine: req.body.cuisine,
        nameofbento: req.body.nameofbento,
        description: req.body.description,
        ingredients: req.body.ingredients.split(','),
        cost: parseFloat(req.body.cost),
        amount: parseInt(req.body.amount),
        image: req.body.image
      });

      const bento = await newBento.save();
      res.json(bento);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/bento/:id
// @desc    edit bento
// @access  private
router.put('/:id', auth, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    cuisine,
    nameofbento,
    ingredients,
    description,
    cost,
    image,
    amount
  } = req.body;

  const bentoFields = {};

  if (cuisine) bentoFields.cuisine = cuisine;
  if (nameofbento) bentoFields.nameofbento = nameofbento;
  if (description) bentoFields.description = description;
  if (cost) bentoFields.cost = cost;
  if (amount) bentoFields.amount = amount;
  if (image) bentoFields.image = image;
  if (ingredients) bentoFields.ingredients = ingredients;

  try {
    let bento = await Bento.findById(req.params.id);

    if (!bento) {
      return res.status(404).json({ msg: 'Bento not found' });
    }

    // if (!bento.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: "User not Authorized" });
    // }

    if (bento) {
      bento = await Bento.findOneAndUpdate(
        { _id: req.params.id },
        { $set: bentoFields },
        { new: true }
      );
      return res.json(bento);
    }

    res.json(bento);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/bento
// @desc    get all bento
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const bento = await Bento.find().sort({ date: -1 });
    res.json(bento);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/bento/:id
// @desc    get bento by id
// @access  private
router.get('/:id', auth, async (req, res) => {
  try {
    const bento = await Bento.findById(req.params.id);

    if (!bento) {
      return res.status(404).json({ msg: 'Bento not found' });
    }
    res.json(bento);
  } catch (err) {
    //if we input a nonvalid object Id we get the same error message
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Bento not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/bento/:id
// @desc    Delete bento by id
// @access  private
router.delete('/:id', auth, async (req, res) => {
  try {
    const bento = await Bento.findById(req.params.id);

    if (!bento) {
      return res.status(404).json({ msg: 'Bento not found' });
    }

    //make sure that whoever is deleting the bento is the user who created the bento
    if (bento.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not Authorized' });
    }

    await bento.remove();

    res.json({ msg: 'Bento Removed' });
  } catch (err) {
    //if we input a nonvalid object Id we get the same error message
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Bento not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/bento/like/:id
// @desc    Like a bento
// @access  private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const bento = await Bento.findById(req.params.id);

    //check if bento is already liked by the user
    if (
      bento.likes.filter(like => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: 'Bento already liked' });
    }

    bento.likes.unshift({ user: req.user.id });

    await bento.save();
    res.json(bento.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/bento/unlike/:id
// @desc    Like a bento
// @access  private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const bento = await Bento.findById(req.params.id);

    //check if bento is already liked by the user
    if (
      bento.likes.filter(like => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: 'Bento has not been liked yet' });
    }

    const removeIndex = bento.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    bento.likes.splice(removeIndex, 1);

    await bento.save();
    res.json(bento.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/bento/comment/:id
// @desc    Comment on a bento
// @access  private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const bento = await Bento.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      bento.comment.unshift(newComment);

      await bento.save();

      res.json(bento.comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/bento/comment/:id/:comment_id
// @desc    delete comment
// @access  private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const bento = await Bento.findById(req.params.id);

    const comment = bento.comment.find(
      cmnt => cmnt.id === req.params.comment_id
    );

    //check if comment acually exist
    if (!comment) {
      return res.status(404).json({ msg: 'Comment not found' });
    }

    //make sure that whoever is deleting the comment is the user who created the comment
    if (bento.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not Authorized" });
    }

    const removeIndex = bento.comment
      .map(cmnt => cmnt.user.toString())
      .indexOf(req.user.id);

    bento.comment.splice(removeIndex, 1);

    await bento.save();

    res.json(bento.comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

const Like = require("../models/like");

const LikesController = {

  Index: (req, res) => {
    const populatedLikes = Like.find().populate('users');
    populatedLikes.find( async (err, likes) => {
      res.status(200).json({ likes: likes});
    })
},

  Update: (req, res) => {
      const likeData = { 
      post: req.body.post,
      users: req.user_id
    };

    Like.findOne({ post: likeData.post }).then(async (like) => {
      if (!like) { //if like doesn't exist
        const like = new Like(likeData);
        like.save();
        res.status(200).json({ message: 'new like' })
      } else if (like.users.includes(req.user_id)) { // if like exists & contains user id
        like.users = like.users.filter(e => e != req.user_id);
        like.save();
        res.status(200).json({ message: 'remove user' })
      } else { // if like exists but doesn't contain user id
        like.users.push(likeData.users);
        like.save();
        res.status(200).json({ message: 'add user' })
      }
    });
  }
};

module.exports = LikesController;
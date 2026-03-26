const prisma = require('./prisma.js');

//I have experimented with dependency injection here
//  this may be useful when I practice testing
const UserModel = require('./user.model.js')(prisma);
const PostModel = require('./post.model.js')(prisma);
const CommentModel = require('./comment.model.js')(prisma);


module.exports = {
  UserModel,
  PostModel,
  CommentModel
};
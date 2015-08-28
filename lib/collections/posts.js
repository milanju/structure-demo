Posts = new Mongo.Collection('posts');

Meteor.methods({
  postsInsert: function(post) {
    if(Meteor.user().admin === true) {
      check(post, {
        title: String,
        content: String
      });
      Posts.insert({title: post.title, content: post.content});
    } else {
      throw new Meteor.Error(403, "access denied noob");
    }
  },
  postsUpdate: function(id, content) {
    Posts.update({_id: id}, {$set: {content: content}});
  },
  postsRemove: function(id) {
    Posts.remove({_id: id});
  }
});

Meteor.publish('allPosts', function () {
  if(Meteor.users.findOne({_id: this.userId}).admin === true) {
    return Posts.find({});
  } else {
    return [];
  }
});

Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {fields: {admin: 1}});
});

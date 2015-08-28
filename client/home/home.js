Template.home.onCreated(function() {
  Meteor.subscribe('allPosts');
});

Template.home.helpers({
  posts: function() {
    return Posts.find();
  },
  isAdmin: function() {
    if(Meteor.user()) {
      if(Meteor.user().admin === true) {
        return true
      }
    }
    return false;
  }
});

Template.home.events({
  'submit .post-form': function() {
    var title = $('.post-title-input')[0].value;
    var content = $('.post-content-input')[0].value;
    Meteor.call('postsInsert', {title: title, content: content});

    $('.post-title-input')[0].value = "";
    $('.post-content-input')[0].value = "";
    $('.post-title-input')[0].focus();
    return false;
  }
});
